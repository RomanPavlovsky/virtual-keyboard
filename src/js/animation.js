import { state } from './shiftCaps.js';

const animation = () => {
  const keys = document.querySelectorAll('.key');
  const caps = document.querySelector('#CapsLock');
  const mouse = document.querySelector('.mouse__left');
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
  document.addEventListener('mousedown', (event) => {
    event.preventDefault();
    mouse.classList.add('mouse__left_active');
    if (event.target.closest('.key')) {
      event.target.classList.add('key_up');
      mouseActiveKey = event.target;
    }
  });

  document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keys.forEach((key) => {
      if (event.code === key.id && event.code !== 'CapsLock') {
        key.classList.remove('key_up');
      } else if (event.code === 'CapsLock' && state.isCaps === false) {
        key.classList.remove('key_up');
      }
    });
  });
  document.addEventListener('mouseup', (event) => {
    mouse.classList.remove('mouse__left_active');
    event.preventDefault();
    if (mouseActiveKey !== undefined && mouseActiveKey.id !== 'CapsLock') {
      mouseActiveKey.classList.remove('key_up');
    } else if (event.target.id === 'CapsLock' && state.isCaps === false) {
      caps.classList.remove('key_up');
    }
  });
};
export default animation;
