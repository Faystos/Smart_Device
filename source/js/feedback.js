'use strict';

class Feedback {
  constructor (form) {
    this.form = document.querySelector(`.${form}__form`);
    this.inpName = this.form.querySelector(`.${form}__inp-name`);
    this.inpTel = this.form.querySelector(`.${form}__inp-tel`);
    this.inpQuestion =this.form.querySelector(`.${form}__inp-question`);
    this.intCheck = this.form.querySelector(`.${form}__check`);
    this.btnSubmit = this.form.querySelector(`.${form}__submit`);
    this.initSubmit();
  }

  initSubmit() {
    this.btnSubmit.addEventListener('click', this.heandlerSubmitBtn)
  }

  heandlerSubmitBtn = (evt) => {
    evt.preventDefault();
    if (!this.intCheck.checked) return;
    const data = {
      name: this.inpName.value,
      tel: this.inpTel.value,
      question: this.inpQuestion.value
    };
    localStorage.setItem('data', JSON.stringify(data));
    this.form.reset();    
  }  
}

const feedbackForm = new Feedback('feedback');
const popupForm = new Feedback('popup');