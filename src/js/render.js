import { keys } from "./keys";

export const render = () => {
  document.body.innerHTML = `<div class="screen">
  <div class="screen__wrapper">
    <textarea class="textarea" cols="10" rows="5"></textarea>
  </div>
</div>
  <div class="keyboard"><div class="keyboard__wrapper"></div></div>`;
  const keyBoard = document.querySelector(".keyboard__wrapper");
  class KeyBtn {
    constructor(obj) {
      this.name = obj.name;
      this.type = obj.type;
      this.code = obj.code;
    }
    createElement(lang) {
      if (lang === "en" || lang === null) {
        if (this.type === "multi-symbols") {
          return `<div class="key" data-index="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name.en[1]}</span><span class="key__name2">${this.name.en[2]}</span></div>`;
        } else if (this.type === "multi-letters") {
          return `<div class="key" data-index="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name.en[1]}</span><span class="key__name2">${this.name.en[2]}</span></div>`;
        } else if (this.type === "symbols") {
          return ` <div class="key" data-index="${this.code}"><span class="key__name1">${this.name[1]}</span><span class="key__name2">${this.name[2]}</span></div>`;
        } else if (this.type === "letters") {
          return ` <div class="key" data-index="${this.code}" data-type="${this.type}"><span class="key__letter">${this.name.en}</span></div>`;
        } else {
          return `<div class="key ${this.type}" data-index="${this.code}"><span class="key__action">${this.name}</span></div>`;
        }
      }
      if (lang === "ru") {
        if (this.type === "multi-symbols") {
          return `<div class="key" data-index="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name.ru[1]}</span><span class="key__name2">${this.name.ru[2]}</span></div>`;
        } else if (this.type === "multi-letters") {
          return `<div class="key" data-index="${this.code}" data-type="${this.type}"><span class="key__name1">${this.name.ru[1]}</span><span class="key__name2">${this.name.ru[2]}</span></div>`;
        } else if (this.type === "symbols") {
          return ` <div class="key" data-index="${this.code}"><span class="key__name1">${this.name[1]}</span><span class="key__name2">${this.name[2]}</span></div>`;
        } else if (this.type === "letters") {
          return ` <div class="key" data-index="${this.code}" data-type="${this.type}"><span class="key__letter">${this.name.ru}</span></div>`;
        } else {
          return `<div class="key ${this.type}" data-index="${this.code}"><span class="key__action">${this.name}</span></div>`;
        }
      }
    }
  }

  for (const key of keys) {
    const element = new KeyBtn(key);
    let elem = element.createElement(localStorage.getItem("lang"));
    keyBoard.insertAdjacentHTML("beforeend", elem);
  }
};
render();
