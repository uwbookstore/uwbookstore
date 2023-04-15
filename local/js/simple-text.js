(function joinWebForm(
  win,
  doc,
  webFormId,
  formFields,
  DUPLICATE_PHONE_EXCEPTION,
  DUPLICATE_EMAIL_EXCEPTION,
  CUSTOM_FIELDS_VALIDATION_EXCEPTION
) {
  const XHR =
    'onload' in new win.XMLHttpRequest()
      ? win.XMLHttpRequest
      : win.XDomainRequest;

  const fieldErrorClassName = 'st-signupform-validation-error';

  function getFormServerErrorMessage(form) {
    return form.querySelector('.st-signupform-server-error-message');
  }

  function getFormTermsAgreedError(form) {
    return form.querySelector('.st-signupform-terms-agreed-error');
  }

  function getSubmitButton(form) {
    return form.querySelector('#subscribeNow');
  }

  function setServerErrorMessage(form, message) {
    const formServerErrorMessage = getFormServerErrorMessage(form);
    formServerErrorMessage.innerText = message;

    if (message) {
      formServerErrorMessage.classList.add('st-hidden');
    } else {
      formServerErrorMessage.classList.remove('st-hidden');
    }
  }

  function isTermsAgreedAccepted(form) {
    return form.querySelector('input[name="terms-agreed"]').checked;
  }
  function showTermsAgreedError(form) {
    const submitButton = getSubmitButton(form);
    const formTermsAgreedError = getFormTermsAgreedError(form);
    submitButton.disabled = false;
    formTermsAgreedError.classList.remove('st-hidden');
  }
  function hideTermsAgreedError(form) {
    const formTermsAgreedError = getFormTermsAgreedError(form);
    formTermsAgreedError.classList.add('st-hidden');
  }

  function clearFormErrors(form) {
    const fields = form.querySelectorAll(`.${fieldErrorClassName}`);

    fields.forEach(function (field) {
      field.classList.remove(fieldErrorClassName);
      const fieldError = form.querySelector(`#js-error-${field.name}`);
      fieldError.innerText = '';
    });

    setServerErrorMessage(form, '');
    hideTermsAgreedError(form);
  }

  function collectFormData(form) {
    const formData = new FormData(form);

    const data = {
      webFormId,
      fieldValues: {},
      listIds: [],
    };

    formData.forEach(function (value, name) {
      if (name === 'list') {
        data.listIds.push(value);
      } else if (name === 'phone') {
        data.fieldValues[name] = value.replace(/\D/g, '');
      } else if (!['terms-agreed', 'webFormId', 'country'].includes(name)) {
        data.fieldValues[name] = value;
      }
    });

    return data;
  }

  function convertServerErrorMessage(fieldName, errorMessage) {
    const field = formFields.find((formField) => formField.name === fieldName);

    if (errorMessage === 'Required field value is empty') {
      return `${field.label} is required`;
    } else {
      if (field.type === 'phone') {
        return `${field.label} is required in (XXX) XXX-XXXX format`;
      } else if (field.type === 'date') {
        return `${field.label} is required in MM/DD/YYYY format`;
      } else if (field.type === 'zipCode') {
        if (field.format === 'US') {
          return `${field.label} is required in XXXXX format`;
        } else {
          return `${field.label} is required in XXX-XXX format`;
        }
      } else if (field.type === 'url') {
        return `${field.label} is required in http(s)://xxxxxx.xx format`;
      } else if (field.type === 'gender') {
        return `${field.label} is required in M, m, F, f, Male, Female, male, female format`;
      } else if (field.type === 'number') {
        return `${field.label} is required in number format`;
      } else if (field.name === 'birthday') {
        return `${field.label} is required in MM/DD/YYYY format`;
      }

      return errorMessage;
    }
  }

  function parseServerValidationError(response) {
    let results;

    try {
      const error = win.JSON.parse(response);

      if (error.code === DUPLICATE_PHONE_EXCEPTION) {
        results = [
          {
            fieldName: 'phone',
            errorMessage: 'Phone number already exists.',
          },
        ];
      } else if (error.code === DUPLICATE_EMAIL_EXCEPTION) {
        results = [
          {
            fieldName: 'email',
            errorMessage: 'Email already exists.',
          },
        ];
      } else if (error.code === CUSTOM_FIELDS_VALIDATION_EXCEPTION) {
        results = Object.entries(error.reasons).map(([key, value]) => ({
          fieldName: key,
          errorMessage: convertServerErrorMessage(key, value),
        }));
      } else {
        results = [
          {
            fieldName: error.invalidValueName,
            errorMessage: convertServerErrorMessage(key, error.reason),
          },
        ];
      }
    } catch (error) {
      results = [
        {
          fieldName: '',
          errorMessage: 'Validation error.',
        },
      ];
    }

    return results;
  }

  function handleLoadForm(form) {
    const submitButton = getSubmitButton(form);
    if (this.status === 200) {
      const formData = new FormData(form);
      const confirmationTextEl = form.querySelector('.step2-confirmationText');
      confirmationTextEl.innerText = confirmationTextEl.innerText.replace(
        '%%phone%%',
        formData.get('phone')
      );

      form.querySelector('.step1-form').style.display = 'none';
      confirmationTextEl.style.display = 'block';

      form.reset();
    } else if (this.status === 418) {
      submitButton.disabled = false;
      const validations = parseServerValidationError(this.responseText);

      if (validations.length > 0) {
        if (validations[0].fieldName) {
          validations.forEach((validation) => {
            const fields = form.querySelectorAll(
              `input[name="${validation.fieldName}"], textarea[name="${validation.fieldName}"]`
            );
            fields.forEach((field) => {
              field.classList.add(fieldErrorClassName);
            });
            const fieldError = form.querySelector(
              `#js-error-${validation.fieldName}`
            );
            fieldError.innerText = validation.errorMessage;
          });
        } else {
          setServerErrorMessage(form, validations[0].errorMessage);
        }
      } else {
        setServerErrorMessage(form, 'Internal Error. Please, try later.');
      }
    } else {
      submitButton.disabled = false;
      setServerErrorMessage(form, 'Internal Error. Please, try later.');
    }
  }

  function handleErrorForm(form) {
    const submitButton = getSubmitButton(form);
    submitButton.disabled = false;
    setServerErrorMessage(form, 'Internal Error. Please, try later.');
  }

  function sendForm(form) {
    const data = collectFormData(form);
    const url = `${form.action}?r=${Date.now()}`;
    const request = new XHR();

    request.open(form.method, url);

    request.onload = function () {
      handleLoadForm.call(this, form);
    };
    request.onerror = function () {
      handleErrorForm.call(this, form);
    };
    request.ontimeout = function () {
      handleErrorForm.call(this, form);
    };

    try {
      request.setRequestHeader(
        'Content-Type',
        'application/json; charset=UTF-8'
      );
    } catch (_) {
      /* ignore if we can't set headers */
    }

    request.send(win.JSON.stringify(data));
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = getSubmitButton(form);

    try {
      submitButton.disabled = true;
      clearFormErrors(form);

      if (!isTermsAgreedAccepted(form)) {
        showTermsAgreedError(form);
      } else {
        sendForm(form);
      }
    } catch (e) {
      console.error(e);
      setServerErrorMessage(form, 'Internal Error. Please, try later.');
      submitButton.disabled = false;
    }
  }

  function formatPhone(value) {
    const numbers = value.replace(/\D/g, '');
    const firstPart = numbers.substring(0, 3);
    const secondPart = numbers.substring(3, 6);
    const thirdPart = numbers.substring(6, 10);
    let result = '';

    if (firstPart) {
      result += `(${firstPart}`;
    }

    if (secondPart) {
      result += `) ${secondPart}`;
    }

    if (thirdPart) {
      result += `-${thirdPart}`;
    }

    return result;
  }

  function handleChangePhoneField(event) {
    const field = event.currentTarget;
    field.value = formatPhone(field.value);
  }

  function handleChangeDateField(event) {
    const field = event.currentTarget;
    const numbers = field.value.replace(/\D/g, '');
    const month = numbers.substr(0, 2);
    const day = numbers.substr(2, 2);
    const year = numbers.substr(4, 4);
    field.value = `${month}${day ? `/${day}` : ''}${year ? `/${year}` : ''}`;
  }

  function handleChangeZipCodeField(event) {
    const field = event.currentTarget;
    field.value = field.value.replace(/\D/g, '').substr(0, 5);
  }

  function handleChangePostalCodeField(event) {
    const field = event.currentTarget;
    const numbers = field.value.replace(/([^a-zA-Z0-9])/g, '');
    const code1 = numbers.substr(0, 3);
    const code2 = numbers.substr(3, 3);
    field.value = `${code1}${code2 ? `-${code2}` : ''}`;
  }

  function handleChangeNumberField(event) {
    const field = event.currentTarget;
    field.value = field.value.replace(/[^0-9,.]/g, '');
  }

  function handleLoad() {
    const forms = doc.querySelectorAll(`#st-join-web-form-${webFormId}`);

    for (let i = 0; i < forms.length; i++) {
      const form = forms[i];

      if (!form.hasAttribute('data-form-initialized')) {
        form.setAttribute('data-form-initialized', true);
        form.addEventListener('submit', handleSubmitForm);

        const phoneFields = form.querySelectorAll('input[data-type="phone"]');
        phoneFields.forEach(function (field) {
          field.addEventListener('input', handleChangePhoneField);
        });

        const dateFields = form.querySelectorAll('input[data-type="date"]');
        dateFields.forEach(function (field) {
          field.addEventListener('input', handleChangeDateField);
        });

        const postalCodeFields = form.querySelectorAll(
          'input[data-type="zipCode"][data-format="CA"]'
        );
        postalCodeFields.forEach(function (field) {
          field.addEventListener('input', handleChangePostalCodeField);
        });

        const zipCodeFields = form.querySelectorAll(
          'input[data-type="zipCode"][data-format="US"]'
        );
        zipCodeFields.forEach(function (field) {
          field.addEventListener('input', handleChangeZipCodeField);
        });

        const numberFields = form.querySelectorAll('input[data-type="number"]');
        numberFields.forEach(function (field) {
          field.addEventListener('input', handleChangeNumberField);
        });

        const agreedFields = form.querySelector(
          `#terms-agreed-checkbox-${webFormId}`
        );
        agreedFields.id += `-${i.toString(10)}`;
        const agreedTerms = form.querySelector('.st-terms-and-conditions-text');
        agreedTerms.setAttribute('for', agreedFields.id);
      }
    }
  }

  win.addEventListener('load', handleLoad);
})(
  window,
  document,
  '6169bec6364c0110e869a076',
  [
    {
      name: 'phone',
      label: 'Phone',
      placeholder: '(XXX) XXX-XXXX',
      type: 'phone',
      value: '',
      required: true,
    },
    {
      name: 'firstname',
      label: 'Contact first name',
      placeholder: 'John',
      type: 'text',
      value: '',
      required: false,
    },
    {
      name: 'lastname',
      label: 'Contact last name',
      placeholder: 'Smith',
      type: 'text',
      value: '',
      required: false,
    },
    {
      name: 'birthday',
      label: 'Birthday',
      placeholder: 'mm/dd/yyyy (example: 06/15/2022)',
      type: 'date',
      value: '',
      required: true,
    },
    {
      name: 'zip_code',
      format: 'US',
      label: 'Zip code',
      placeholder: 'XXXXX (USA)',
      type: 'zipCode',
      value: '',
      required: false,
    },
  ],
  'DuplicateContactEmailException',
  'DuplicateContactPhoneException',
  'CustomFieldsValidationException'
);
