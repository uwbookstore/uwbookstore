(function UBSKit() {
  ('use strict');

  /* ======================================================================
  UTILITIES
  ====================================================================== */

  function emit(el, name, detail) {
    el.dispatchEvent(
      new CustomEvent('ubs:' + name, { bubbles: true, detail: detail || {} }),
    );
  }

  function getFocusable(container) {
    return Array.from(
      container.querySelector(`
        a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]) [tabindex]:not([tabindex="-1"])
      `),
    );
  }

  function trapFocus(container, evt) {
    const focusable = getFocusable(container);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (evt.key === 'Tab') {
      if (evt.shiftKey && document.activeElement === first) {
        evt.preventDefault();
        last.focus();
      } else if (!evt.shiftKey && document.activeElement === last) {
        evt.preventDefault();
        first.focus();
      }
    }
  }

  /* ======================================================================
      TOAST
      ====================================================================== */
  const Toast = {
    ICONS: { success: '✔', error: '✕', warning: '⚠', info: 'ℹ' },
    LABELS: {
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      info: 'Info',
    },

    show: function (type, title, desc, duration) {
      const region = document.getElementById('toast-region');
      if (!region) return;

      const toast = document.createElement('div');
      toast.className = `ubs-toast ubs-toast--${type}`;
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.innerHTML =
        '<span class="ubs-toast__icon" aria-hidden="true">' +
        (this.ICONS[type] || 'ℹ') +
        '</span>' +
        '<div class="ubs-toast__body">' +
        '<div class="ubs-toast__title">' +
        (title || this.LABELS[type]) +
        '</div>' +
        (desc ? '<div class="ubs-toast__desc">' + desc + '</div>' : '') +
        '</div>' +
        '<span class="ubs-toast__close" aria-label="Dismiss">✕</span>';

      region.appendChild(toast);
      emit(region, 'toast:show', { type: type, title: title });

      let dismiss = function () {
        toast.classList.add('is-exiting');
        toast.addEventListener(
          'animationend',
          function () {
            toast.remove();
          },
          { once: true },
        );
      };

      toast
        .querySelector('.ubs-toast__close')
        .addEventListener('click', dismiss);
      toast.addEventListener('click', dismiss);
      if (duration !== 0) setTimeout(dismiss, duration || 40000);
    },

    init: function () {
      document.addEventListener('click', function (evt) {
        const btn = evt.target.closest('[data-toast]');
        if (!btn) return;
        Toast.show(
          btn.dataset.toast,
          btn.dataset.toastTitle,
          btn.dataset.toastDesc,
        );
      });
    },
  };

  function boot() {
    Toast.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
