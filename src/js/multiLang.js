import keys from './keys.js';

const multiLang = () => {
  const keyboard = document.querySelector('.keyboard');
  const lettersKeys = document.querySelectorAll('[data-type="letters"]');
  const multiSymbolsKeys = document.querySelectorAll(
    '[data-type="multi-symbols"]',
  );
  const multiLettersKeys = document.querySelectorAll(
    '[data-type="multi-letters"]',
  );
  let keysCombination = [];
  const reRender = (language) => {
    lettersKeys.forEach((element) => {
      const letterKey = element;
      keys.forEach((key) => {
        if (letterKey.id === key.code) {
          if (language === 'en') {
            letterKey.firstElementChild.textContent = `${key.name.en}`;
          } else {
            letterKey.firstElementChild.textContent = `${key.name.ru}`;
          }
        }
      });
    });
    multiSymbolsKeys.forEach((element) => {
      const multiSymbolsKey = element;
      keys.forEach((key) => {
        if (multiSymbolsKey.id === key.code) {
          if (language === 'en') {
            multiSymbolsKey.firstElementChild.textContent = `${key.name.en[1]}`;
            multiSymbolsKey.lastElementChild.textContent = `${key.name.en[2]}`;
          } else {
            multiSymbolsKey.firstElementChild.textContent = `${key.name.ru[1]}`;
            multiSymbolsKey.lastElementChild.textContent = `${key.name.ru[2]}`;
          }
        }
      });
    });
    multiLettersKeys.forEach((element) => {
      const multiLettersKey = element;
      keys.forEach((key) => {
        if (multiLettersKey.id === key.code) {
          if (language === 'en') {
            multiLettersKey.innerHTML = `<span class="key__name1">${key.name.en[1]}</span><span class="key__name2">${key.name.en[2]}</span>`;
          } else {
            multiLettersKey.innerHTML = `<span class="key__letter">${key.name.ru[1]}</span>`;
          }
        }
      });
    });
  };
  const swapLang = () => {
    const lang = localStorage.getItem('lang');
    if (lang === null || lang === 'en') {
      localStorage.setItem('lang', 'ru');
      reRender('ru');
    } else {
      localStorage.setItem('lang', 'en');
      reRender('en');
    }
  };
  const checkCombination = () => {
    if (keysCombination.length === 2) {
      if ((keysCombination.includes('ControlLeft') && keysCombination.includes('AltLeft'))
        || (keysCombination.includes('ControlLeft') && keysCombination.includes('AltRight'))) {
        return true;
      }
      if ((keysCombination.includes('ControlRight') && keysCombination.includes('AltLeft'))
        || (keysCombination.includes('ControlRight') && keysCombination.includes('AltRight'))) {
        return true;
      }
      return false;
    }
    return false;
  };
  const clearCombination = () => {
    setTimeout(() => {
      if (document.querySelector('.ctrl-left').classList.contains('key_up')) {
        keysCombination = keysCombination.filter(
          (elem) => elem === 'ControlLeft',
        );
      }
      if (document.querySelector('.alt-left').classList.contains('key_up')) {
        keysCombination = keysCombination.filter((elem) => elem === 'AltLeft');
      }
      if (document.querySelector('.ctrl-right').classList.contains('key_up')) {
        keysCombination = keysCombination.filter(
          (elem) => elem === 'ControlRight',
        );
      }
      if (document.querySelector('.alt-right').classList.contains('key_up')) {
        keysCombination = keysCombination.filter((elem) => elem === 'AltRight');
      }
      if (
        document.querySelector('.ctrl-left').classList.contains('key_up')
          === false
        && document.querySelector('.alt-left').classList.contains('key_up')
          === false
        && document.querySelector('.ctrl-right').classList.contains('key_up')
          === false
        && document.querySelector('.alt-right').classList.contains('key_up')
          === false
      ) {
        keysCombination = [];
      }
    });
  };
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.code === 'ControlLeft'
      || event.code === 'ControlRight'
      || event.code === 'AltRight'
      || event.code === 'AltLeft'
    ) {
      keysCombination.push(event.code);
    }
  });
  document.addEventListener('keyup', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (checkCombination()) {
      swapLang();
    }
    clearCombination();
  });
  keyboard.addEventListener('mousedown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.closest('.ctrl-left')) {
      keysCombination.push('ControlLeft');
    }
    if (event.target.closest('.alt-left')) {
      keysCombination.push('AltLeft');
    }
    if (event.target.closest('.ctrl-right')) {
      keysCombination.push('ControlRight');
    }
    if (event.target.closest('.alt-right')) {
      keysCombination.push('AltRight');
    }
  });
  document.addEventListener('mouseup', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (checkCombination()) {
      swapLang();
    }
    clearCombination();
  });
};
export default multiLang;
