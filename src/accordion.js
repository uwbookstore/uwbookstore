/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */

Array.prototype.slice
  .call(document.querySelectorAll('.Accordion'))
  .forEach((accordion) => {
    // Allow for multiple accordion sections to be expanded at the same time
    const allowMultiple = accordion.hasAttribute('data-allow-multiple');
    // Allow for each toggle to both open and close individually
    const allowToggle = allowMultiple
      ? allowMultiple
      : accordion.hasAttribute('data-allow-toggle');

    // Create the array of toggle elements for the accordion group
    const triggers = Array.prototype.slice.call(
      accordion.querySelectorAll('.Accordion-trigger')
    );
    const panels = Array.prototype.slice.call(
      accordion.querySelectorAll('.Accordion-panel')
    );

    accordion.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('Accordion-trigger')) {
        // Check if the current toggle is expanded.
        const isExpanded = target.getAttribute('aria-expanded') === 'true';
        const active = accordion.querySelector('[aria-expanded="true"]');

        // without allowMultiple, close the open accordion
        if (!allowMultiple && active && active !== target) {
          // Set the expanded state on the triggering element
          active.setAttribute('aria-expanded', 'false');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document
            .getElementById(active.getAttribute('aria-controls'))
            .setAttribute('hidden', '');

          // When toggling is not allowed, clean up disabled state
          if (!allowToggle) {
            active.removeAttribute('aria-disabled');
          }
        }

        if (!isExpanded) {
          // Set the expanded state on the triggering element
          target.setAttribute('aria-expanded', 'true');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document
            .getElementById(target.getAttribute('aria-controls'))
            .removeAttribute('hidden');

          // If toggling is not allowed, set disabled state on trigger
          if (!allowToggle) {
            target.setAttribute('aria-disabled', 'true');
          }
        } else if (allowToggle && isExpanded) {
          // Set the expanded state on the triggering element
          target.setAttribute('aria-expanded', 'false');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document
            .getElementById(target.getAttribute('aria-controls'))
            .setAttribute('hidden', '');
        }

        event.preventDefault();
      }
    });

    // Bind keyboard behaviors on the main accordion container
    accordion.addEventListener('keydown', (event) => {
      const { target } = event;
      const key = event.which.toString();

      const isExpanded = target.getAttribute('aria-expanded') === 'true';
      let allowToggle = allowMultiple
        ? allowMultiple
        : accordion.hasAttribute('data-allow-toggle');

      // 33 = Page Up, 34 = Page Down
      const ctrlModifier = event.ctrlKey && key.match(/33|34/);

      // Is this coming from an accordion header?
      if (target.classList.contains('Accordion-trigger')) {
        // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
        // 38 = Up, 40 = Down
        if (key.match(/38|40/) || ctrlModifier) {
          const index = triggers.indexOf(target);
          const direction = key.match(/34|40/) ? 1 : -1;
          const { length } = triggers;
          const newIndex = (index + length + direction) % length;

          triggers[newIndex].focus();

          event.preventDefault();
        } else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              triggers[0].focus();
              break;
            // Go to last accordion
            case '35':
              triggers[triggers.length - 1].focus();
              break;
            default:
              break;
          }
          event.preventDefault();
        }
      }
    });

    // These are used to style the accordion when one of the buttons has focus
    accordion.querySelectorAll('.Accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('focus', () => {
        accordion.classList.add('focus');
      });

      trigger.addEventListener('blur', () => {
        accordion.classList.remove('focus');
      });
    });

    // Minor setup: will set disabled state, via aria-disabled, to an
    // expanded/ active accordion which is not allowed to be toggled close
    if (!allowToggle) {
      // Get the first expanded/ active accordion
      const expanded = accordion.querySelector('[aria-expanded="true"]');

      // If an expanded/ active accordion is found, disable
      if (expanded) {
        expanded.setAttribute('aria-disabled', 'true');
      }
    }
  });
