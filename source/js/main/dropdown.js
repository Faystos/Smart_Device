'use strict';
class Dropdown {
  constructor(btn, block1, block2, drop) {
    this.btn = document.querySelectorAll(`.${btn}`);
    this.btnArr = Array.prototype.slice.call(this.btn);
    this.drop = document.querySelectorAll(`.${drop}`);
    this.dropArr = Array.prototype.slice.call(this.drop);
    this.classBtn = btn;
    this.classDrop = drop;
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
    block1.classList.remove(`${classBlock1}--nojs`);
    let classBlock2 = this.classBlock2;
    block2.classList.remove(`${classBlock2}--nojs`);
    let classDrop = this.classDrop;
    this.dropArr.forEach(el => {
      el.addEventListener('click', evt => {
        this.toggleBtn(this.btnArr, classBtn, el);
        if (evt.target.closest(`.${classDrop}`).dataset.block === classBlock1) this.toggleBlock(block1, block2, classBlock1, classBlock2);
        if (evt.target.closest(`.${classDrop}`).dataset.block === classBlock2) this.toggleBlock(block2, block1, classBlock2, classBlock1);
      });
    });
  }

  toggleBtn = (btns, classBtn, target) => {
    let btn = target.querySelector(`.${classBtn}`);
    if (btn.classList.contains(`${classBtn}--open`)) {
      btn.classList.remove(`${classBtn}--open`);
    } else {
      btns.forEach(el => {
        el.classList.remove((`${classBtn}--open`));
        btn.classList.add(`${classBtn}--open`);
      });
    }
  }

  toggleBlock = (blockOpen, blockClose, classBlockOpen, classBlockClose) => {
    if (blockClose.classList.contains(`${classBlockClose}--open`))blockClose.classList.remove(`${classBlockClose}--open`);
    blockOpen.classList.toggle(`${classBlockOpen}--open`);
  }
}

new Dropdown('footer__btn', 'footer__section_link', 'footer__addres_text', "dropdown");
