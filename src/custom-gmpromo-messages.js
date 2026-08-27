/**
 * custom-gmpromo-messages.js
 *
 * Rewrites the default GM promo labels ("$10.99 Off", "Buy 2 Get 1 Free", ...)
 * into custom copy, driven by a three-level hierarchy:
 *
 *   1. skus[sku][type]   per-SKU, one message type          (most specific)
 *   2. skus[sku]['*']    per-SKU, every message type
 *   3. global[type]      site-wide, one message type        (least specific)
 *   4. (no match)        the default text, untouched
 *
 * The order is defined once in RESOLUTION_ORDER below; swap the first two
 * entries if you want '*' to beat per-type for a SKU.
 *
 * An override is either a template string or a function:
 *   - Template strings use {placeholders}.
 *     text: {amount} -> "$10.99", {percent} -> "25", {buyQty} -> "2"
 *   - Functions receive the same ctx and return a string. Use ctx.raw for the
 *     numeric values if you need to do math.
 *
 * Placeholders available per type:
 *   DollarsOff          {amount}
 *   PercentOff          {percent}
 *   BuyGetDollarsOff    {buyQty} {amount}
 *   BuyGetFree          {buyQty} {getQty}
 *   BuyGetPercentOff    {buyQty} {percent}
 *   SpendGetFree        {spend}
 *   SpendGetDollarsOff  {spend} {amount}
 *   SpendGetPercentOff  {spend} {percent}
 *   QuantityForDeal     ctx.tiers = [{ qty: "2", price: "$20.00" }, ...]  (function override only)
 *   (all types)         {original} {sku} {type}
 *
 * Everything fails open: if the default text can't be parsed, an override is
 * missing a placeholder, or a function throws, the default text is left as-is.
 */
(function (root) {
  'use strict';

  // Name of the single global this script creates.
  // Bail if it already exists so we never end up with two observers.
  const NAMESPACE = 'GmPromoMessages';
  if (root && root[NAMESPACE]) return;

  // ---------------------------------------------------------------------------
  // 1. CONFIG — the only section marketers/devs should normally need to touch
  // ---------------------------------------------------------------------------

  // Set true to get console.warn diagnostics (unparseable text, bad templates, config typos).
  const DEBUG = true;

  const customPromoMessages = {
    // Lowest: global per-type. Placeholders vary by type (see header).
    global: {
      DollarsOff: 'Save {amount}',
      PercentOff: 'Save {percent}%',
      BuyGetDollarsOff: 'Buy {buyQty}, save {amount}',
      BuyGetFree: 'Buy {buyQty}, get one free',
      BuyGetPercentOff: 'Buy One, Get One {percent}% Off',
      SpendGetFree: 'Spend {spend}, get one free',
      SpendGetDollarsOff: 'Spend {spend}, get one for {amount} off',
      SpendGetPercentOff: 'Spend {spend}, get one for {percent}% off',
      // Tiers are a list, so this one takes a function. t.qty / t.price are display-ready.
      QuantityForDeal: ({ tiers }) =>
        tiers.map((t) => `${t.qty} for ${t.price}`).join(' · '),
    },

    // Per-SKU. "*" = all types; named keys = that type only.
    // NOTE: keys are compared as strings. Quote SKUs that have leading zeros
    // or non-numeric characters ('00123', 'ABC-1'), otherwise JS will mangle them.
    // skus: {
    //   2079187: {
    //     '*': 'Clearance - see cart for savings',
    //   },
    //   2079186: {
    //     BuyGetPercentOff: '🔥 Buy one, get {percent}% off',
    //     '*': '{original}',
    //   },
    // },
  };

  // Where the script finds items in the DOM. One entry per page layout; all
  // layouts are tried on every page (the item selectors are distinct, so nothing
  // double-matches). Add a layout here if promos appear somewhere new.
  //
  //   item:  one element per product
  //   sku:   element INSIDE item whose text is the SKU
  //   promo: element INSIDE item whose text is the promo message
  const DOM_LAYOUTS = [
    {
      name: 'MerchList',
      item: 'div.merchItem',
      sku: '.merchSKU',
      promo: '.merch-value--gm',
    },
    {
      name: 'MerchDetail',
      item: 'div.mainItem',
      sku: '.merch-value--sku',
      promo: '.merch-value--gm',
    },
    {
      name: 'MerchDetail modal',
      item: 'div.oneItem',
      sku: '.merch-value--sku',
      promo: '.merch-value--gm',
    },
  ];

  const DOM = {
    originalAttribute: 'data-gmpromo-original', // where we stash the untouched default text (namespaced)
    observe: true, // re-run for lazily-loaded items / the add-to-cart modal
  };

  // ---------------------------------------------------------------------------
  // 2. PARSING — default text -> { type, values }
  // ---------------------------------------------------------------------------

  // Money as it appears in the default copy: "10.99", "1,000.00". Commas stripped in toNum().
  const MONEY = '([\\d,]*\\.?\\d+)';
  const INT = '(\\d+)';

  // Order only matters for readability; the ^...$ anchors keep patterns from colliding.
  // Each parser: [type, regex, (match, fullString) => values]. Regexes are case-insensitive
  // and the input is whitespace-normalised before matching, so minor copy drift is tolerated.
  const PARSERS = [
    [
      'BuyGetDollarsOff',
      new RegExp(`^Buy ${INT} Get \\$${MONEY} Off$`, 'i'),
      (m) => ({ buyQty: toNum(m[1]), amount: toNum(m[2]) }),
    ],
    [
      'BuyGetPercentOff',
      new RegExp(`^Buy ${INT} Get ${INT} Percent Off$`, 'i'),
      (m) => ({ buyQty: toNum(m[1]), percent: toNum(m[2]) }),
    ],
    [
      'BuyGetFree',
      new RegExp(`^Buy ${INT} Get ${INT} Free$`, 'i'),
      (m) => ({ buyQty: toNum(m[1]), getQty: toNum(m[2]) }),
    ],
    [
      'SpendGetDollarsOff',
      new RegExp(`^Spend \\$${MONEY} Get 1 for \\$${MONEY} Off$`, 'i'),
      (m) => ({ spend: toNum(m[1]), amount: toNum(m[2]) }),
    ],
    [
      'SpendGetPercentOff',
      new RegExp(`^Spend \\$${MONEY} Get 1 for ${INT}% Off$`, 'i'),
      (m) => ({ spend: toNum(m[1]), percent: toNum(m[2]) }),
    ],
    [
      'SpendGetFree',
      new RegExp(`^Spend \\$${MONEY} Get 1 Free$`, 'i'),
      (m) => ({ spend: toNum(m[1]) }),
    ],
    [
      'DollarsOff',
      new RegExp(`^\\$${MONEY} Off$`, 'i'),
      (m) => ({ amount: toNum(m[1]) }),
    ],
    [
      'PercentOff',
      new RegExp(`^${INT} Percent Off$`, 'i'),
      (m) => ({ percent: toNum(m[1]) }),
    ],
    [
      'QuantityForDeal',
      new RegExp(
        `^Buy ${INT} For \\$${MONEY}(?:, Buy ${INT} For \\$${MONEY})*$`,
        'i',
      ),
      (m, s) => ({
        tiers: [
          ...s.matchAll(new RegExp(`Buy ${INT} For \\$${MONEY}`, 'gi')),
        ].map((t) => ({
          qty: toNum(t[1]),
          price: toNum(t[2]),
        })),
      }),
    ],
  ];

  const KNOWN_TYPES = new Set(PARSERS.map(([type]) => type));

  function toNum(str) {
    return Number(String(str).replace(/,/g, ''));
  }

  /**
   * Classify a default promo string.
   * @returns {{ type: string, values: object } | null}  null if no parser matches.
   */
  function parse(text) {
    const normalised = String(text ?? '')
      .replace(/\s+/g, ' ')
      .trim();
    for (const [type, regex, extract] of PARSERS) {
      const m = normalised.match(regex);
      if (m) return { type, values: extract(m, normalised) };
    }
    return null;
  }

  // ---------------------------------------------------------------------------
  // 3. CONTEXT — parsed values -> display-ready placeholders (+ raw numbers)
  // ---------------------------------------------------------------------------

  const money = (n) => `$${n.toFixed(2)}`;

  // Which raw keys are money vs plain numbers. Anything not listed is String()-ed.
  const MONEY_KEYS = new Set(['amount', 'spend']);

  /**
   * Build the object handed to templates/functions.
   * Top-level keys are strings (safe to drop into copy); ctx.raw holds the numbers.
   */
  function buildContext({ type, values }, original, sku) {
    const ctx = { original, sku: String(sku), type, raw: values };

    for (const [key, val] of Object.entries(values)) {
      if (key === 'tiers') {
        ctx.tiers = val.map((t) => ({
          qty: String(t.qty),
          price: money(t.price),
        }));
      } else {
        ctx[key] = MONEY_KEYS.has(key) ? money(val) : String(val);
      }
    }
    return ctx;
  }

  // ---------------------------------------------------------------------------
  // 4. RESOLUTION — pick the override, render it
  // ---------------------------------------------------------------------------

  /**
   * Candidate selectors, most specific first. The first one that returns a
   * truthy override wins. Reorder to change the hierarchy.
   */
  const RESOLUTION_ORDER = [
    (perSku, type, global) => perSku[type], // per-SKU, per-type
    (perSku, type, global) => perSku['*'], // per-SKU, all types
    (perSku, type, global) => global[type], // global, per-type
  ];

  class RenderError extends Error {}

  /**
   * Render a template string or function against ctx.
   * Throws RenderError on a missing placeholder or non-string result so the
   * caller can fall back to the original text.
   */
  function render(override, ctx) {
    if (typeof override === 'function') {
      const out = override(ctx);
      if (typeof out !== 'string')
        throw new RenderError(`function override returned ${typeof out}`);
      return out;
    }

    return String(override).replace(/\{(\w+)\}/g, (_, key) => {
      const val = ctx[key];
      if (typeof val !== 'string') {
        throw new RenderError(
          `placeholder {${key}} is not available for type ${ctx.type}`,
        );
      }
      return val;
    });
  }

  /**
   * Main entry point: given a SKU and the site's default promo text, return the
   * text that should be displayed. Never throws; returns `original` on any problem.
   */
  function resolvePromoMessage(sku, original, config = customPromoMessages) {
    const parsed = parse(original);
    if (!parsed) {
      warn(`unrecognised promo text for sku ${sku}: "${original}"`);
      return original;
    }

    const perSku = (config.skus && config.skus[String(sku)]) || {};
    const global = config.global || {};
    const override = RESOLUTION_ORDER.map((pick) =>
      pick(perSku, parsed.type, global),
    ).find(Boolean);
    if (!override) return original;

    try {
      return render(override, buildContext(parsed, original, sku));
    } catch (err) {
      warn(
        `override failed for sku ${sku} (${parsed.type}); using default. ${err.message}`,
      );
      return original;
    }
  }

  // ---------------------------------------------------------------------------
  // 5. VALIDATION — catch config typos at load time instead of silently no-op'ing
  // ---------------------------------------------------------------------------

  function validateConfig(config = customPromoMessages) {
    const problems = [];
    const checkKeys = (obj, where) => {
      for (const key of Object.keys(obj || {})) {
        if (key !== '*' && !KNOWN_TYPES.has(key)) {
          problems.push(
            `${where}: unknown message type "${key}" (known: ${[...KNOWN_TYPES].join(', ')})`,
          );
        }
        const val = obj[key];
        if (typeof val !== 'string' && typeof val !== 'function') {
          problems.push(
            `${where}.${key}: override must be a string or function, got ${typeof val}`,
          );
        }
      }
    };

    checkKeys(config.global, 'global');
    if (config.global && '*' in config.global)
      problems.push('global: "*" is not supported at the global level');

    for (const [sku, perSku] of Object.entries(config.skus || {})) {
      checkKeys(perSku, `skus[${sku}]`);
      // With '*'-wins ordering, per-type entries alongside '*' would be dead config.
      // Under the default specific-wins ordering this is fine, so only flag it if reordered.
      const starWins =
        RESOLUTION_ORDER[0]({ '*': 'x', T: 'y' }, 'T', {}) === 'x';
      if (starWins && '*' in perSku && Object.keys(perSku).length > 1) {
        problems.push(
          `skus[${sku}]: per-type entries are ignored because "*" takes precedence`,
        );
      }
    }

    problems.forEach((p) => warn(`config: ${p}`));
    return problems;
  }

  function warn(msg) {
    if (DEBUG && typeof console !== 'undefined')
      console.warn(`[${NAMESPACE}] ${msg}`);
  }

  // ---------------------------------------------------------------------------
  // 6. DOM HOOKUP — apply to the page (browser only)
  // ---------------------------------------------------------------------------

  /**
   * Rewrite every promo message under `root`. Idempotent: the untouched default
   * text is stashed in DOM.originalAttribute the first time, and re-runs always
   * re-parse from that, so re-rendering never compounds overrides.
   */
  function applyPromoOverrides(scope = document) {
    // Union of all item selectors, used to make sure a sku/promo element found
    // inside an item actually belongs to it and not to a nested item (e.g. the
    // add-to-cart modal rendered inside the detail page's main item).
    const anyItem = DOM_LAYOUTS.map((l) => l.item).join(', ');
    const ownChild = (item, selector) =>
      [...item.querySelectorAll(selector)].find(
        (el) => el.closest(anyItem) === item,
      );

    for (const layout of DOM_LAYOUTS) {
      for (const item of scope.querySelectorAll(layout.item)) {
        const skuEl = ownChild(item, layout.sku);
        const el = ownChild(item, layout.promo);
        const sku = skuEl && skuEl.textContent.trim();
        if (!sku || !el) continue;

        let original = el.getAttribute(DOM.originalAttribute);
        if (original === null) {
          original = el.textContent;
          el.setAttribute(DOM.originalAttribute, original);
        }

        const next = resolvePromoMessage(sku, original);
        if (el.textContent !== next) el.textContent = next;
      }
    }
  }

  function initPromoOverrides() {
    validateConfig();
    applyPromoOverrides();

    if (DOM.observe && typeof MutationObserver !== 'undefined') {
      // Debounced so a burst of DOM insertions (infinite scroll, framework re-render)
      // triggers one pass, not hundreds. setTimeout rather than requestAnimationFrame:
      // rAF is frozen entirely in background tabs, setTimeout is only throttled.
      let scheduled = false;
      const observer = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = true;
        setTimeout(() => {
          scheduled = false;
          applyPromoOverrides();
        }, 0);
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 7. PUBLIC SURFACE — the one thing exposed outside this closure
  // ---------------------------------------------------------------------------

  // Frozen so nothing on the page can swap our functions out from under us.
  // `config` is exposed for inspection in the console; edits to it at runtime
  // take effect on the next apply(), which is handy for testing copy live.
  const api = Object.freeze({
    resolve: resolvePromoMessage, // (sku, defaultText) -> displayed text
    apply: applyPromoOverrides, // (scopeElement?) -> rewrites promos in the DOM
    parse, // (defaultText) -> { type, values } | null
    validateConfig, // (config?) -> string[] of problems
    config: customPromoMessages,
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api; // Node / bundlers, e.g. for unit tests
  } else if (root) {
    Object.defineProperty(root, NAMESPACE, {
      value: api,
      writable: false,
      configurable: false,
      enumerable: false,
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPromoOverrides);
    } else {
      initPromoOverrides();
    }
  }
})(
  typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
      ? globalThis
      : null,
);
