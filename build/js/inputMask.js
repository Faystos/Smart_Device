class MaskTel {
  constructor() {
    this.inputsTel = document.querySelectorAll('input[type="tel"]');
    this.maskInit();
  }

  maskInit() {
    this.handlerMaskInp();
  }

  handlerMaskInp =() => {
    this.inputsTel.forEach(el => {
      const mask = IMask(el, {mask: '+{7}(000)000-00-00'});
      el.addEventListener('focus', ()=>{
        el.value = `+7(`;
      });
    
      el.addEventListener('blur', ()=>{
        el.value = '';
      });      
    });
  }
}
new MaskTel();

