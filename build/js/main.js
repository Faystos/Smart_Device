'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dropdown = /*#__PURE__*/function () {
  function Dropdown(_btn, block1, block2, drop) {
    _classCallCheck(this, Dropdown);

    _defineProperty(this, "toggleBtn", function (btns, classBtn, target) {
      var btn = target.querySelector(".".concat(classBtn));

      if (btn.classList.contains("".concat(classBtn, "--open"))) {
        btn.classList.remove("".concat(classBtn, "--open"));
      } else {
        btns.forEach(function (el) {
          el.classList.remove("".concat(classBtn, "--open"));
          btn.classList.add("".concat(classBtn, "--open"));
        });
      }
    });

    _defineProperty(this, "toggleBlock", function (blockOpen, blockClose, classBlockOpen, classBlockClose) {
      if (blockClose.classList.contains("".concat(classBlockClose, "--open"))) blockClose.classList.remove("".concat(classBlockClose, "--open"));
      blockOpen.classList.toggle("".concat(classBlockOpen, "--open"));
    });

    this.btn = document.querySelectorAll(".".concat(_btn));
    this.btnArr = Array.prototype.slice.call(this.btn);
    this.drop = document.querySelectorAll(".".concat(drop));
    this.dropArr = Array.prototype.slice.call(this.drop);
    this.classBtn = _btn;
    this.classDrop = drop;
    this.block1 = document.querySelector(".".concat(block1));
    this.classBlock1 = block1;
    this.block2 = document.querySelector(".".concat(block2));
    this.classBlock2 = block2;
    this.initDropdown();
  }

  _createClass(Dropdown, [{
    key: "initDropdown",
    value: function initDropdown() {
      var _this = this;

      var classBtn = this.classBtn;
      var block1 = this.block1;
      var block2 = this.block2;
      var classBlock1 = this.classBlock1;
      block1.classList.remove("".concat(classBlock1, "--nojs"));
      var classBlock2 = this.classBlock2;
      block2.classList.remove("".concat(classBlock2, "--nojs"));
      var classDrop = this.classDrop;
      this.dropArr.forEach(function (el) {
        el.addEventListener('click', function (evt) {
          _this.toggleBtn(_this.btnArr, classBtn, el);

          if (evt.target.closest(".".concat(classDrop)).dataset.block === classBlock1) _this.toggleBlock(block1, block2, classBlock1, classBlock2);
          if (evt.target.closest(".".concat(classDrop)).dataset.block === classBlock2) _this.toggleBlock(block2, block1, classBlock2, classBlock1);
        });
      });
    }
  }]);

  return Dropdown;
}();

new Dropdown('footer__btn', 'footer__section_link', 'footer__addres_text', "dropdown");
'use strict';

var MaskTel = /*#__PURE__*/function () {
  function MaskTel() {
    var _this2 = this;

    _classCallCheck(this, MaskTel);

    _defineProperty(this, "handlerMaskInp", function () {
      _this2.inputsTelArr.forEach(function (el) {
        var mask = IMask(el, {
          mask: '+{7}(000)000-00-00'
        });
        el.addEventListener('focus', function () {
          el.value = '+7(';
        });
        el.addEventListener('blur', function () {
          if (el.value.length <= 2) el.value = '';
        });
      });
    });

    this.inputsTel = document.querySelectorAll('input[type="tel"]');
    this.inputsTelArr = Array.prototype.slice.call(this.inputsTel);
    this.maskInit();
  }

  _createClass(MaskTel, [{
    key: "maskInit",
    value: function maskInit() {
      this.handlerMaskInp();
    }
  }]);

  return MaskTel;
}();

new MaskTel();
'use strict';

var Popup = /*#__PURE__*/function () {
  function Popup(btn, blockModal) {
    var _this3 = this;

    _classCallCheck(this, Popup);

    _defineProperty(this, "openModal", function () {
      _this3.blockModal.classList.add('popup--open');

      _this3.body.style.overflow = 'hidden';

      _this3.inpName.focus();

      document.addEventListener('keydown', _this3.closeModalBtnEsc);
    });

    _defineProperty(this, "closeModal", function (evt) {
      _this3.blockModal.classList.remove('popup--open');

      _this3.inpName.blur();

      _this3.body.style.overflow = 'auto';
    });

    _defineProperty(this, "handlerBlockForm", function (evt) {
      evt.stopPropagation();
      if (evt.target === _this3.btnClose) _this3.closeModal();
    });

    _defineProperty(this, "closeModalBtnEsc", function (evt) {
      if (evt.keyCode === 27) {
        _this3.closeModal();

        document.removeEventListener('keydown', _this3.closeModalBtnEsc);
      } else {
        return;
      }
    });

    this.btn = document.querySelector(".".concat(btn));
    this.blockModal = document.querySelector(".".concat(blockModal));
    this.blockForm = this.blockModal.querySelector(".".concat(blockModal, "__block_form"));
    this.btnClose = this.blockForm.querySelector(".".concat(blockModal, "__close"));
    this.inpName = this.blockForm.querySelector(".".concat(blockModal, "__input-name"));
    this.body = document.querySelector('body');
    this.modalInit();
  }

  _createClass(Popup, [{
    key: "modalInit",
    value: function modalInit() {
      this.btn.addEventListener('click', this.openModal);
      this.blockModal.addEventListener('click', this.closeModal);
      this.blockForm.addEventListener('click', this.handlerBlockForm);
    }
  }]);

  return Popup;
}();

var modal = new Popup('nav__phone_btn', 'popup');

var Scrolling = /*#__PURE__*/function () {
  function Scrolling() {
    _classCallCheck(this, Scrolling);

    this.linkNav = document.querySelectorAll('[href^="#"]');
    this.linkNavArr = Array.prototype.slice.call(this.linkNav);
    this.speed = 1;
    this.scrollInit();
  }

  _createClass(Scrolling, [{
    key: "scrollInit",
    value: function scrollInit() {
      var _this4 = this;

      this.linkNavArr.forEach(function (el) {
        el.addEventListener('click', function (evt) {
          evt.preventDefault();
          var speed = _this4.speed;
          var w = window.pageYOffset;
          var hash = evt.target.href.replace(/[^#]*(.*)/, '$1');
          var t = document.querySelector(hash).getBoundingClientRect().top;
          var start = null;
          requestAnimationFrame(step);

          function step(time) {
            if (start === null) start = time;
            var progress = time - start;
            var r = t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t);
            window.scrollTo(0, r);

            if (r != w + t) {
              requestAnimationFrame(step);
            } else {
              location.hash = hash;
            }
          }
        }, false);
      });
    }
  }]);

  return Scrolling;
}();

new Scrolling();
'use strict';

var FormValidation = /*#__PURE__*/function () {
  function FormValidation(formSelector) {
    var _this5 = this;

    _classCallCheck(this, FormValidation);

    _defineProperty(this, "handlerForm", function (evt) {
      if (!_this5.inputsValidation()) {
        return;
      }

      evt.preventDefault();
      if (!_this5.inputCheck.checked) return;

      _this5.handlerDataSubmit();
    });

    _defineProperty(this, "inputNameValidation", function (input) {
      if (!input.value.length) {
        input.setCustomValidity('Введите имя');
        return false;
      } else if (input.value.length <= 3) {
        input.setCustomValidity('Слишком короткое имя');
        return false;
      }

      return true;
    });

    _defineProperty(this, "inputTelValidation", function (input) {
      if (!input.value.length === 2) {
        input.setCustomValidity('Введите номер телефона');
        return false;
      } else if (input.value.length >= 3 && input.value.length < 16) {
        input.setCustomValidity('Введите корректный номер телефона');
        return false;
      }

      return true;
    });

    _defineProperty(this, "initTextValidation", function (input) {
      if (!input.value.length) {
        input.setCustomValidity('Напишите ваш вопрос.');
        return false;
      } else if (input.value.length <= 5) {
        input.setCustomValidity('Ваш вопрос должен быть больше 5 символов.');
        return false;
      }

      return true;
    });

    _defineProperty(this, "inputCheckValidation", function (input) {
      if (!input.checked) {
        input.setCustomValidity('Для того, что-бы задать вопрос, необходимо согласиться с условиями.');
        return false;
      }

      return true;
    });

    _defineProperty(this, "inputsValidation", function () {
      if (_this5.inputName.value.length) {
        var chekInput = _this5.inputNameValidation(_this5.inputName);

        if (!chekInput) {
          return false;
        }
      }

      if (_this5.inputName.value.length) {
        var _chekInput = _this5.inputTelValidation(_this5.inputTel);

        if (!_chekInput) {
          return false;
        }
      }

      if (_this5.inputName.value.length) {
        var _chekInput2 = _this5.initTextValidation(_this5.inputText);

        if (!_chekInput2) {
          return false;
        }
      }

      _this5.inputCheckValidation(_this5.inputCheck);

      if (!_this5.inputName.validationMessage && !_this5.inputTel.validationMessage && !_this5.inputText.validationMessage && !_this5.inputCheck.validationMessage) {
        return true;
      }
    });

    _defineProperty(this, "handlerDataSubmit", function () {
      var data = {
        name: _this5.inputName.value,
        tel: _this5.inputTel.value,
        question: _this5.inputText.value
      };
      localStorage.setItem('data', JSON.stringify(data));

      _this5.formSubmit.reset();
    });

    this.formSubmit = document.querySelector(".".concat(formSelector, "__form"));
    this.formSelector = formSelector;
    this.submitBtn = this.formSubmit.querySelector(".".concat(formSelector, "__submit"));
    this.inputName = this.formSubmit.querySelector(".".concat(formSelector, "__input-name"));
    this.inputTel = this.formSubmit.querySelector(".".concat(formSelector, "__input-tel"));
    this.inputText = this.formSubmit.querySelector(".".concat(formSelector, "__input-text"));
    this.inputCheck = this.formSubmit.querySelector(".".concat(formSelector, "__check"));
    this.initValidation();
  }

  _createClass(FormValidation, [{
    key: "initValidation",
    value: function initValidation() {
      var _this6 = this;

      this.submitBtn.addEventListener('click', this.handlerForm);
      this.inputName.addEventListener('input', function () {
        _this6.inputName.setCustomValidity('');
      });
      this.inputTel.addEventListener('input', function () {
        _this6.inputTel.setCustomValidity('');
      });
      this.inputText.addEventListener('input', function () {
        _this6.inputText.setCustomValidity('');
      });
      this.inputCheck.addEventListener('input', function () {
        _this6.inputCheck.setCustomValidity('');
      });
    }
  }]);

  return FormValidation;
}();

new FormValidation('feedback');
new FormValidation('popup');