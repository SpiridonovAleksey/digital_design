'use strict';
let form = document.querySelector(".form");
let password = document.querySelector(".form__input--password");
let passwordRepeat = document.querySelector(".form__input--repeat-password");

passwordRepeat.addEventListener('input', (evt) => {
  if (passwordRepeat.value !== password.value) {
    evt.preventDefault();
    passwordRepeat.setCustomValidity('повтор пароля не соответствует заданному ранее паролю');

  } else {
    passwordRepeat.setCustomValidity('');
  }
  passwordRepeat.reportValidity();
});
