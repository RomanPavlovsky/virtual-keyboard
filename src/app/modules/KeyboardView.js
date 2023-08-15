export default class KeyboardView {
  constructor(typeKeys) {
    this.typeKeys = typeKeys;
    this.keyboard = document.querySelector('.keyboard__wrapper');
  }
  renderKeys() {
    this.typeKeys.forEach((key) => {
      this.keyboard.insertAdjacentHTML('beforeend', this.createKey(key));
    });
    this.keys = document.querySelectorAll('.key');
    this.simpleLetter = document.querySelectorAll('[data-type="simpleLetter"]');
    this.mixLetter = document.querySelectorAll('[data-type="mixLetter"]');
    this.mixSymbol = document.querySelectorAll('[data-type="mixSymbol"]');
  }
  createKey(key) {
    if (localStorage.getItem('lang') === 'ru') {
      if (key.type === 'mixSymbol') {
        return `<div class="key" id="${key.code}" data-type="${key.type}"><span class="key__name1">${key.name.ru[1]}</span><span class="key__name2">${key.name.ru[2]}</span></div>`;
      }
      if (key.type === 'mixLetter') {
        return `<div class="key" id="${key.code}" data-type="${key.type}"><span class="key__letter">${key.name.ru[1]}</span></div>`;
      }
      if (key.type === 'symbol') {
        return ` <div class="key" id="${key.code}" data-type="${key.type}"><span class="key__name1">${key.name[1]}</span><span class="key__name2">${key.name[2]}</span></div>`;
      }
      if (key.type === 'simpleLetter') {
        return ` <div class="key" id="${key.code}" data-type="${key.type}"><span class="key__letter">${key.name.ru}</span></div>`;
      }
      return `<div class="key ${key.type}" id="${key.code}"><span class="key__action">${key.name}</span></div>`;
    } else {
      if (key.type === 'mixSymbol') {
        return `<div class="key" id="${key.code}" data-type="${key.type}"><span class="key__name1">${key.name.en[1]}</span><span class="key__name2">${key.name.en[2]}</span></div>`;
      }
      if (key.type === 'mixLetter') {
        return `<div class="key" id="${key.code}" data-type="${key.type}"><span class="key__name1">${key.name.en[1]}</span><span class="key__name2">${key.name.en[2]}</span></div>`;
      }
      if (key.type === 'symbol') {
        return ` <div class="key" id="${key.code}" data-type="${key.type}"><span class="key__name1">${key.name[1]}</span><span class="key__name2">${key.name[2]}</span></div>`;
      }
      if (key.type === 'simpleLetter') {
        return ` <div class="key" id="${key.code}" data-type="${key.type}"><span class="key__letter">${key.name.en}</span></div>`;
      }
      return `<div class="key ${key.type}" id="${key.code}"><span class="key__action">${key.name}</span></div>`;
    }
  }
  activeKey(key) {
    for (let i = 0; i < this.keys.length; i++) {
      if (key === this.keys[i].id) {
        this.keys[i].classList.add('key_up');
        break;
      }
    }
  }
  inactiveKeys(state) {
    for (let i = 0; i < this.keys.length; i++) {
      const key = this.keys[i];
      if (state.isCaps && state.isShift) {
        if (
          key.id !== 'ShiftLeft' &&
          key.id !== 'ShiftRight' &&
          key.id !== 'CapsLock'
        ) {
          key.classList.remove('key_up');
        }
      } else if (state.isCaps) {
        if (key.id !== 'CapsLock') {
          key.classList.remove('key_up');
        }
      } else if (state.isShift) {
        if (key.id !== 'ShiftLeft' && key.id !== 'ShiftRight') {
          key.classList.remove('key_up');
        }
      } else {
        key.classList.remove('key_up');
      }
    }
  }
  inactiveKey(key, state) {
    for (let i = 0; i < this.typeKeys.length; i++) {
      if (key === this.typeKeys[i].code) {
        if (state.isCaps && state.isShift) {
          if (
            key !== 'ShiftLeft' &&
            key !== 'ShiftRight' &&
            key !== 'CapsLock'
          ) {
            document.getElementById(`${key}`).classList.remove('key_up');
          }
        } else if (state.isCaps) {
          if (key !== 'CapsLock') {
            document.getElementById(`${key}`).classList.remove('key_up');
            document.getElementById(`ShiftRight`).classList.remove('key_up');
            document.getElementById(`ShiftLeft`).classList.remove('key_up');
          }
        } else if (state.isShift) {
          if (key !== 'ShiftLeft' && key !== 'ShiftRight') {
            document.getElementById(`${key}`).classList.remove('key_up');
          }
        } else {
          document.getElementById(`${key}`).classList.remove('key_up');
          document.getElementById(`ShiftRight`).classList.remove('key_up');
          document.getElementById(`ShiftLeft`).classList.remove('key_up');
        }
      }
    }
  }

  changeCase(shift, caps) {
    const letterKeys = document.querySelectorAll('.key__letter');
    if (shift && !caps) {
      letterKeys.forEach((key) => {
        key.innerText = key.innerText.toUpperCase();
      });
    } else if (shift && caps) {
      letterKeys.forEach((key) => {
        key.innerText = key.innerText.toLowerCase();
      });
    } else if (!shift && caps) {
      letterKeys.forEach((key) => {
        key.innerText = key.innerText.toUpperCase();
      });
    } else {
      letterKeys.forEach((key) => {
        key.innerText = key.innerText.toLowerCase();
      });
    }
  }
  changeLanguage(lang) {
    this.simpleLetter.forEach((key) => {
      this.typeKeys.forEach((type) => {
        if (key.id === type.code) {
          if (lang === 'en') {
            key.firstElementChild.textContent = `${type.name.en}`;
          } else {
            key.firstElementChild.textContent = `${type.name.ru}`;
          }
        }
      });
    });
    this.mixSymbol.forEach((key) => {
      this.typeKeys.forEach((type) => {
        if (key.id === type.code) {
          if (lang === 'en') {
            key.firstElementChild.textContent = `${type.name.en[1]}`;
            key.lastElementChild.textContent = `${type.name.en[2]}`;
          } else {
            key.firstElementChild.textContent = `${type.name.ru[1]}`;
            key.lastElementChild.textContent = `${type.name.ru[2]}`;
          }
        }
      });
    });
    this.mixLetter.forEach((key) => {
      this.typeKeys.forEach((type) => {
        if (key.id === type.code) {
          if (lang === 'en') {
            key.innerHTML = `<span class="key__name1">${type.name.en[1]}</span><span class="key__name2">${type.name.en[2]}</span>`;
          } else {
            key.innerHTML = `<span class="key__letter">${type.name.ru[1]}</span>`;
          }
        }
      });
    });
  }
}
