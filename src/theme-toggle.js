(function ubsThemeKit() {
  ('use strict');

  /* ======================================================================
       UTILITIES
       ====================================================================== */

  function emit(el, name, detail) {
    el.dispatchEvent(
      new CustomEvent('ubs:' + name, { bubbles: true, detail: detail || {} }),
    );
  }

  /* ======================================================================
       Theme Toggle
       ====================================================================== */
  let ThemeToggle = {
    init: function () {
      const btn = document.getElementById('theme-toggle');
      const root = document.documentElement;
      const key = 'light-dark';
      const saved = localStorage.getItem(key);
      if (saved) root.setAttribute('data-theme', saved);

      if (btn) {
        btn.addEventListener('click', function () {
          const next =
            root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
          root.setAttribute('data-theme', next);
          localStorage.setItem(key, next);
          emit(root, 'theme:change', { theme: next });
        });
      }
    },
  };

  function boot() {
    ThemeToggle.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
