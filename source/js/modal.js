'use strict';

class Popup {
  constructor (btn, blockModal) {
    this.btn = document.querySelector(`.${btn}`);
    this.blockModal = document.querySelector(`.${blockModal}`);
    this.blockForm = this.blockModal.querySelector(`.${blockModal}__block_form`);
    this.form = this.blockForm.querySelector(`.${blockModal}__form`);
    this.btnClose = this.blockForm.querySelector(`.${blockModal}__close`);
    this.inpName = this.form.querySelector(`.${blockModal}__inp-name`);
    this.inpTel = this.form.querySelector(`.${blockModal}__inp-tel`);
    this.inpQuestion =this.form.querySelector(`.${blockModal}__inp-question`);
    this.btnSubmit = this.form.querySelector(`.${blockModal}__submit`);
    this.intCheck = this.form.querySelector(`.${blockModal}__check`);
    this.body = document.querySelector('body');
    this.modalInit();
  }

  modalInit() {
    this.btn.addEventListener('click', this.openModal);
    this.blockModal.addEventListener('click', this.closeModal);
    this.blockForm.addEventListener('click', this.hendlerBlockForm);
    this.btnSubmit.addEventListener('click', this.submitData);
    
  }

  openModal = () => {
    this.blockModal.classList.add('popup--open');    
    this.body.style.overflow = 'hidden';
    this.inpName.focus();
    document.addEventListener('keydown', this.hendlerBtnEsc);
  }

  closeModal = (evt) => {    
    this.blockModal.classList.remove('popup--open');
    this.inpName.blur();
    this.body.style = '';
  }

  hendlerBlockForm = (evt) => {
    evt.stopPropagation();
    if (evt.target === this.btnClose) this.closeModal();    
  }

  hendlerBtnEsc = (evt) => {
    if (evt.keyCode === 27) {      
      this.closeModal();
      document.removeEventListener('keydown', this.hendlerBtnEsc);
    } else {
      return;
    }
  }

  submitData = (evt) => {
    evt.preventDefault();
    if (!this.intCheck.checked) return;
    const data = {
      name: this.inpName.value,
      tel: this.inpTel.value,
      question: this.inpQuestion.value
    };
    localStorage.setItem('data', JSON.stringify(data));
    this.form.reset();
    this.closeModal();
  }
}

const modal = new Popup('nav__phone_btn', 'popup');