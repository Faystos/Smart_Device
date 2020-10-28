'use strict';

class FormValidation {
  constructor(formSelector) {
    this.formSubmit = document.querySelector(`.${formSelector}__form`);
    this.formSelector = formSelector;
    this.submitBtn =  this.formSubmit.querySelector(`.${formSelector}__submit`);
    this.inputName = this.formSubmit.querySelector(`.${formSelector}__input-name`);
    this.inputTel = this.formSubmit.querySelector(`.${formSelector}__input-tel`);
    this.inputText = this.formSubmit.querySelector(`.${formSelector}__input-text`);
    this.inputCheck = this.formSubmit.querySelector(`.${formSelector}__check`)
    this.initValidation();
  }

  initValidation () {
    this.submitBtn.addEventListener('click', this.handlerForm);

    this.inputName.addEventListener('input', () => {
      this.inputName.setCustomValidity('');
    });

    this.inputTel.addEventListener('input', () => {
      this.inputTel.setCustomValidity('');
    });

    this.inputText.addEventListener('input', () => {
      this.inputText.setCustomValidity('');
    });

    this.inputCheck.addEventListener('input', () => {
      this.inputCheck.setCustomValidity('');
    });
  }

  handlerForm = evt => {
    if(!this.inputsValidation()) {
      return;
    }
    evt.preventDefault();
    if (!this.inputCheck.checked) return;
    this.handlerDataSubmit();
  }

  inputNameValidation = input => {
    if(!input.value.length) {
      input.setCustomValidity('Введите имя');
      return false;
    } else if(input.value.length <= 3) {
      input.setCustomValidity('Слишком короткое имя');
      return false;
    }

    return true;
  }

  inputTelValidation = input => {
    if(!input.value.length === 2) {
      input.setCustomValidity('Введите номер телефона');
      return false;
    } else if (input.value.length >= 3 && input.value.length < 16) {
      input.setCustomValidity('Введите корректный номер телефона');
      return false;
    }

    return true;
  }

  initTextValidation = input => {
    if (!input.value.length) {
      input.setCustomValidity('Напишите ваш вопрос.');
      return false;
    } else if(input.value.length <= 5) {
      input.setCustomValidity('Ваш вопрос должен быть больше 5 символов.');
      return false;
    }

    return true;
  }

  inputCheckValidation = input => {
    if (!input.checked) {
      input.setCustomValidity('Для того, что-бы задать вопрос, необходимо согласиться с условиями.');
      return false;
    }
    return true;
  }

  inputsValidation = () => {
    if (this.inputName.value.length) {
      let chekInput = this.inputNameValidation(this.inputName);
      if (!chekInput) {
        return false;
      }
    }

    if (this.inputName.value.length) {
      let chekInput = this.inputTelValidation(this.inputTel);
      if (!chekInput) {
        return false;
      }
    }

    if (this.inputName.value.length) {
      let chekInput = this.initTextValidation(this.inputText);
      if (!chekInput) {
        return false;
      }
    }

    this.inputCheckValidation(this.inputCheck);

    if(!this.inputName.validationMessage && !this.inputTel.validationMessage && !this.inputText.validationMessage && !this.inputCheck.validationMessage) {
      return true;
    }
  }



  handlerDataSubmit = () => {
    const data = {
      name: this.inputName.value,
      tel: this.inputTel.value,
      question: this.inputText.value
    };
    localStorage.setItem('data', JSON.stringify(data));
    this.formSubmit.reset();
  }
}

new FormValidation('feedback');
new FormValidation('popup');
