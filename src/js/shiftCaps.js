export const state = {
  isShift: false,
  isCaps: false,
};

const registerCapsShift = () => {
  const keyboard = document.querySelector('.keyboard__wrapper');
  setInterval(() => {
    const lettersKeys = document.querySelectorAll('.key__letter');
    if (state.isShift === true && state.isCaps === false) {
      lettersKeys.forEach((element) => {
        const key = element;
        key.innerText = key.innerText.toUpperCase();
      });
    } else if (state.isShift === true && state.isCaps === true) {
      lettersKeys.forEach((element) => {
        const key = element;
        key.innerText = key.innerText.toLowerCase();
      });
    } else if (state.isShift === false && state.isCaps === true) {
      lettersKeys.forEach((element) => {
        const key = element;
        key.innerText = key.innerText.toUpperCase();
      });
    } else {
      lettersKeys.forEach((element) => {
        const key = element;
        key.innerText = key.innerText.toLowerCase();
      });
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock' && state.isCaps === false) {
      state.isCaps = true;
    } else if (event.code === 'CapsLock' && state.isCaps === true) {
      state.isCaps = false;
    } else if (event.key === 'Shift' && state.isShift === false) {
      state.isShift = true;
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift' && state.isShift === true) {
      state.isShift = false;
    }
  });

  keyboard.addEventListener('mousedown', (event) => {
    if (event.target.closest('.key')) {
      if (event.target.closest('.key').id === 'CapsLock' && state.isCaps === false) {
        state.isCaps = true;
      } else if (event.target.closest('.key').id === 'CapsLock' && state.isCaps === true) {
        state.isCaps = false;
      } else if (
        (event.target.closest('.key').id === 'ShiftLeft'
      || event.target.closest('.key').id === 'ShiftRight')
      && state.isShift === false
      ) {
        state.isShift = true;
      }
    }
  });

  document.addEventListener('mouseup', () => {
    if (state.isShift === true) {
      state.isShift = false;
    }
  });
};
export default registerCapsShift;
