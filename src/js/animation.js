import { state } from './shiftCaps.js';

const animation = () => {
  const keys = document.querySelectorAll('.key');
  const keyboard = document.querySelector('.keyboard');
  const caps = document.querySelector('#CapsLock');
  let mouseActiveKey;
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    keys.forEach((key) => {
      if (event.code === key.id) {
        key.classList.add('key_up');
      }
    });
  });
  keyboard.addEventListener('mousedown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.closest('.key')) {
      event.target.classList.add('key_up');
      mouseActiveKey = event.target;
    }
  });
  document.addEventListener('keyup', (event) => {
    event.preventDefault();
    event.stopPropagation();
    keys.forEach((key) => {
      if (event.code === key.id && event.code !== 'CapsLock') {
        key.classList.remove('key_up');
      } else if (event.code === 'CapsLock' && state.isCaps === false) {
        key.classList.remove('key_up');
      }
    });
  });
  document.addEventListener('mouseup', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (mouseActiveKey !== undefined && mouseActiveKey !== 'CapsLock') {
      mouseActiveKey.classList.remove('key_up');
    } else if (event.target.id === 'CapsLock' && state.isCaps === false) {
      caps.classList.remove('key_up');
    }
  });
};
export default animation;
