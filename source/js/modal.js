'use strict';

class Popup {
  constructor (btn, blockModal) {
    this.btn = document.querySelector(`.${btn}`);
    this.blockModal = document.querySelector(`.${blockModal}`);
    this.blockForm = this.blockModal.querySelector(`.${blockModal}__block_form`);    
    this.btnClose = this.blockForm.querySelector(`.${blockModal}__close`);
    this.inpName = this.blockForm.querySelector(`.${blockModal}__inp-name`);
    this.body = document.querySelector('body');
    this.modalInit();
  }

  modalInit() {
    this.btn.addEventListener('click', this.openModal);
    this.blockModal.addEventListener('click', this.closeModal);
    this.blockForm.addEventListener('click', this.hendlerBlockForm);    
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
    this.body.style.overflow = 'auto';
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
}

const modal = new Popup('nav__phone_btn', 'popup');