'use strict';

class Dropdown {
  constructor(btn, block1, block2) {
    this.btn = document.querySelectorAll(`.${btn}`);
    this.classBtn = btn;
    this.block1 = document.querySelector(`.${block1}`);
    this.classBlock1 = block1;
    this.block2 = document.querySelector(`.${block2}`);
    this.classBlock2 = block2;
    this.initDropdown();
  }

  initDropdown () {    
    let classBtn = this.classBtn;
    let block1 = this.block1;
    let block2 = this.block2;
    let classBlock1 = this.classBlock1;
    let classBlock2 = this.classBlock2;
    this.btn.forEach((el, i, arr) => {
      el.addEventListener('click', evt => {
        this.toggleBtn(arr, el, classBtn); 
        if (evt.target.dataset.block === classBlock1) this.toggleBlock(block1, block2, classBlock1, classBlock2);
        if (evt.target.dataset.block === classBlock2) this.toggleBlock(block2, block1, classBlock2, classBlock1);                          
      });      
    });
  }

  toggleBtn = (btns, target, classBtn) => {  
    if (target.classList.contains(`${classBtn}--open`)) {
      target.classList.remove(`${classBtn}--open`);
    } else {
        btns.forEach(btn => {      
            btn.classList.remove((`${classBtn}--open`));
            target.classList.add(`${classBtn}--open`);    
        });  
    }  
  }  

  toggleBlock = (blockOpen, blockClose, classBlockOpen, classBlockClose) => {
    if (blockClose.classList.contains(`${classBlockClose}--open`))blockClose.classList.remove(`${classBlockClose}--open`); 
    blockOpen.classList.toggle(`${classBlockOpen}--open`);
  }  
}

new Dropdown('footer__btn', 'footer__sesection_link', 'footer__addres_text');