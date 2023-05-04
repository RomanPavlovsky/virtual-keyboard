import { state } from './shiftCaps.js';

const animation = () => {
  const keys = document.querySelectorAll('.key');
  const caps = document.querySelector('#CapsLock');
  const mouse = document.querySelector('.mouse__left');
  const screenButton = document.querySelector('.screen__button-wrapper');
  const screenLight = document.querySelector('.screen__light');
  const screenOff = document.querySelector('.screen_off');
  const screenLoad = document.querySelector('.screen_load');
  let mouseActiveKey;
  let isScreen = true;

  const turnOnScreen = () => {
    if (isScreen === false) {
      screenButton.removeEventListener('click', turnOnScreen);
      isScreen = true;
      screenLight.classList.remove('screen__light_inactive');
      screenLight.classList.add('screen__light_active');
      screenLoad.style.display = 'block';
      setTimeout(() => {
        screenButton.addEventListener('click', turnOnScreen);
        screenOff.style.display = 'none';
        screenLoad.style.display = 'none';
      }, 3000);
    } else {
      isScreen = false;
      screenLight.classList.remove('screen__light_active');
      screenLight.classList.add('screen__light_inactive');
      screenOff.style.display = 'block';
    }
  };
  screenButton.addEventListener('click', turnOnScreen);
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
    mouse.classList.add('mouse__left_active');
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
