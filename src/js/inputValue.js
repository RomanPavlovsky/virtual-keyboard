import { state } from './shiftCaps.js';

const inputValue = () => {
  const textArea = document.querySelector('.textarea');
  const keyboard = document.querySelector('.keyboard__wrapper');
  const keys = document.querySelectorAll(
    '[data-type="letters"], [data-type="multi-letters"], [data-type="multi-symbols"], [data-type="symbols"]',
  );
  const inputSymbols = (symbol) => {
    textArea.focus();
    const { selectionStart, selectionEnd } = textArea;
    textArea.value = textArea.value.slice(0, selectionStart)
      + symbol
      + textArea.value.slice(selectionEnd);
    textArea.selectionEnd = selectionStart + symbol.length;
    textArea.selectionStart = textArea.selectionEnd;
  };
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Tab') {
      inputSymbols('\t');
    } else if (event.code === 'Backspace') {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (event.code === 'Delete') {
      const { selectionStart, selectionEnd } = textArea;
      textArea.setRangeText('', selectionStart, selectionEnd + 1, 'end');
    } else if (event.code === 'Space') {
      inputSymbols(' ');
    } else if (event.code === 'Enter') {
      inputSymbols('\n');
    } else if (event.code === 'ArrowUp') {
      inputSymbols('↑');
    } else if (event.code === 'ArrowLeft') {
      inputSymbols('←');
    } else if (event.code === 'ArrowRight') {
      inputSymbols('→');
    } else if (event.code === 'ArrowDown') {
      inputSymbols('↓');
    } else {
      keys.forEach((key) => {
        if (event.code === key.id) {
          if (state.isShift === true) {
            inputSymbols(key.firstElementChild.innerText);
          } else if (state.isShift === false) {
            inputSymbols(key.lastElementChild.innerText);
          }
        }
      });
    }
  });
  keyboard.addEventListener('mousedown', (event) => {
   if (event.target.closest('.key')){
    if (event.target.closest('.key').id === 'Tab') {
      inputSymbols('\t');
    } else if (event.target.closest('.key').id === 'Backspace') {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (event.target.closest('.key').id === 'Delete') {
      const { selectionStart, selectionEnd } = textArea;
      textArea.setRangeText('', selectionStart, selectionEnd + 1, 'end');
    } else if (event.target.closest('.key').id === 'Space') {
      inputSymbols(' ');
    } else if (event.target.closest('.key').id === 'Enter') {
      inputSymbols('\n');
    } else if (event.target.closest('.key').id === 'ArrowUp') {
      inputSymbols('↑');
    } else if (event.target.closest('.key').id === 'ArrowLeft') {
      inputSymbols('←');
    } else if (event.target.closest('.key').id === 'ArrowRight') {
      inputSymbols('→');
    } else if (event.target.closest('.key').id === 'ArrowDown') {
      inputSymbols('↓');
    } else if (event.target.closest('.key').dataset.type) {
      inputSymbols(event.target.closest('.key').lastElementChild.innerText);
    }
   }
  });
};
export default inputValue;
