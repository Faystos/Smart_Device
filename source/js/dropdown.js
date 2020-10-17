'use strict';

class Dropdown {
  constructor(btn, block1, block2) {
    this.btn = document.querySelectorAll(`.${btn}`);
    this.classBtn = btn;
    this.block1 = document.querySelectorAll(`.${block1}`);
    this.classBlock1 = block1;
    this.block2 = document.querySelectorAll(`.${block2}`);
    this.classBlock2 = block2;
    this.initDropdown();
  }

  initDropdown () {
    let classBtn = this.classBtn;
    let block1 = this.block1;
    let block2 = this.block2;
    let classBlock1 = this.classBlock1;
    let classBlock2 = this.classBlock2;
    this.btn.forEach(el => {
      el.addEventListener('click', evt => {       
      this.toggleClass(evt.target, classBtn);
      this.closeBlock(block2, classBlock2);
      });
    });
  }

  toggleClass = (el, classEl) => {
    el.classList.toggle(`${classEl}--open`);
    el.classList.toggle(`${classEl}--close`);
  }

  closeBlock(block, blockClass) {
    if(block.classList.contains(`${blockClass}--open`)) {
      block.classList.remove(`${blockClass}--open`);
      block.classList.add(`${blockClass}--close`);
    }

  }
}

new Dropdown('footer__btn', 'footer__sesection_link', 'footer__addres_text');