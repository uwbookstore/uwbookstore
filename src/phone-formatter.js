function formatPhoneInputWithCursor(input) {
  input.addEventListener('input', function (e) {
    const start = input.selectionStart;
    const oldValue = input.value;
    const digits = oldValue.replace(/\D/g, '');

    let formatted = '';
    if (digits.length > 0) {
      formatted += '(' + digits.substring(0, Math.min(3, digits.length));
    }
    if (digits.length >= 3) {
      formatted += ') ';
      formatted += digits.substring(3, Math.min(6, digits.length));
    }
    if (digits.length >= 6) {
      formatted += '-' + digits.substring(6, 10);
    }

    if (formatted !== oldValue) {
      const newCursorPos = getNewCursorPos(start, oldValue, formatted);
      input.value = formatted;
      input.setSelectionRange(newCursorPos, newCursorPos);
    }
  });

  function getNewCursorPos(oldPos, oldStr, newStr) {
    const digitsBefore = oldStr.slice(0, oldPos).replace(/\D/g, '').length;
    let count = 0,
      pos = 0;
    while (count < digitsBefore && pos < newStr.length) {
      if (/\d/.test(newStr[pos])) count++;
      pos++;
    }
    return pos;
  }
}

function applyPhoneFormatToInputs(...inputIds) {
  const inputs = [];

  inputIds.forEach((id) => {
    const input = document.getElementById(id);
    if (input) {
      formatPhoneInputWithCursor(input);
      inputs.push(input);
    } else {
      console.warn(`No input found with ID "${id}"`);
    }
  });

  // Avoid attaching multiple submit listeners to the same form
  const formsHandled = new WeakSet();

  inputs.forEach((input) => {
    const form = input.closest('form');
    if (form && !formsHandled.has(form)) {
      form.addEventListener('submit', () => {
        inputs.forEach((i) => {
          i.value = i.value.replace(/\D/g, ''); // Strip all non-digit chars
        });
      });
      formsHandled.add(form);
    }
  });
}

// Apply to your inputs
applyPhoneFormatToInputs('custBillPhone', 'custShipPhone');
