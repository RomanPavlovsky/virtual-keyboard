import keys from './keys.js';

const render = () => {
  document.body.innerHTML = `<section class="section-up">
  <div class="speakers">
    
    <div class="speakers__panel">
    </div>
    <div class="speakers__footer"></div>
  </div>
  <div class="screen">
    <div class="screen__wrapper">
      <div class="screen__container">
        <textarea class="textarea" cols="15" rows="10"></textarea>
        <div class="screen_off"></div><div class="screen_load"></div>
        <div class="os-info">
          Windows OS
        </div>
        <div class="screen__light screen__light_active"></div>
        <div class="screen__button-wrapper">
          <div class="screen__button"></div>
        </div>
      </div>
    </div>
    <div class="screen__footer"></div>
  </div>
  <div class="speakers">
    <div class="speakers__panel">
      <div class="speakers__light speakers__light_inactive"></div>
      <div class="speakers__power speakers__power_inactive"></div>
    </div>
    <div class="speakers__footer"></div>
  </div>
</section>
<section class="section-down">
  <div class="keyboard">
    <div class="keyboard__wrapper"></div>
  </div>
  <div class="mouse">
    <div class="mouse__buttons">
      <div class="mouse__left"></div>
      <div class="mouse__middle"></div>
      <div class="mouse__right"></div>
    </div>
  </div>
</section>`;

  const keyBoard = document.querySelector('.keyboard__wrapper');
  class KeyBtn {
    constructor(obj) {
      this.name = obj.name;
      this.type = obj.type;
      this.code = obj.code;
    }

    createElement(lang) {
      if (lang === 'en' || lang === null) {
        if (this.type === 'multi-symbols') {
          return `<div class="key" id="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name.en[1]}</span><span class="key__name2">${this.name.en[2]}</span></div>`;
        }
        if (this.type === 'multi-letters') {
          return `<div class="key" id="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name.en[1]}</span><span class="key__name2">${this.name.en[2]}</span></div>`;
        }
        if (this.type === 'symbols') {
          return ` <div class="key" id="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name[1]}</span><span class="key__name2">${this.name[2]}</span></div>`;
        }
        if (this.type === 'letters') {
          return ` <div class="key" id="${this.code}" data-type="${this.type}"><span class="key__letter">${this.name.en}</span></div>`;
        }
        return `<div class="key ${this.type}" id="${this.code}"><span class="key__action">${this.name}</span></div>`;
      }
      if (lang === 'ru') {
        if (this.type === 'multi-symbols') {
          return `<div class="key" id="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name.ru[1]}</span><span class="key__name2">${this.name.ru[2]}</span></div>`;
        }
        if (this.type === 'multi-letters') {
          return `<div class="key" id="${this.code}" data-type="${this.type}"><span class="key__letter">${this.name.ru[1]}</span></div>`;
        }
        if (this.type === 'symbols') {
          return ` <div class="key" id="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name[1]}</span><span class="key__name2">${this.name[2]}</span></div>`;
        }
        if (this.type === 'letters') {
          return ` <div class="key" id="${this.code}" data-type="${this.type}"><span class="key__letter">${this.name.ru}</span></div>`;
        }
        return `<div class="key ${this.type}" id="${this.code}"><span class="key__action">${this.name}</span></div>`;
      }
      return false;
    }
  }
  keys.forEach((key) => {
    const element = new KeyBtn(key);
    const elem = element.createElement(localStorage.getItem('lang'));
    keyBoard.insertAdjacentHTML('beforeend', elem);
  });
};
export default render;
