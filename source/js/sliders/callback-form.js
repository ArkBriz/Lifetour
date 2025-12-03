const callbackForm = document.querySelector('.callback form');
const phoneField = callbackForm.querySelector('#phone');
const emailField = callbackForm.querySelector('#email');

const defaultPlaceholder = 'Телефон';
const focusPlaceholder = '+7 (000)-000-00-00';
const allowedChars = /^[\d\s()+-]+$/;

phoneField.addEventListener('focus', (evt) => {
  if (evt.target.value === '') {
    evt.target.placeholder = focusPlaceholder;
  }
});

phoneField.addEventListener('blur', (evt) => {
  if (evt.target.value === '') {
    evt.target.placeholder = defaultPlaceholder;
  }
});

const validatePhoneField = () => {
  const value = phoneField.value.trim();

  if (value === '') {
    phoneField.setCustomValidity('Введите телефон');
    return false;
  }

  if (!allowedChars.test(value)) {
    phoneField.setCustomValidity('Телефон может содержать только цифры и символы + - и ()');
    return false;
  }

  phoneField.setCustomValidity('');
  return true;
};

const updateFieldState = (field) => {
  if (!field.validity.valid) {
    field.classList.add('field--error');
  } else {
    field.classList.remove('field--error');
  }
};

phoneField.addEventListener('input', () => {
  phoneField.setCustomValidity('');
  validatePhoneField();
  updateFieldState(phoneField);
});

emailField.addEventListener('input', () => {
  updateFieldState(emailField);
});

callbackForm.addEventListener('submit', (evt) => {
  updateFieldState(phoneField);
  updateFieldState(emailField);

  if (!callbackForm.checkValidity() || !validatePhoneField()) {
    evt.preventDefault();
    callbackForm.reportValidity();
  }
});
