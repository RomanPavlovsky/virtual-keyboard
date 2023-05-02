const keyboard = document.querySelector(".keyboard");
export let isCaps = false;
export let isShift = false;

export const upCase = () => {
  setInterval(() => {
    const lettersKeys = document.querySelectorAll(`.key__letter`);
    if (isShift === true && isCaps === false) {
      for (const key of lettersKeys) {
        key.innerText = key.innerText.toUpperCase();
      }
    } else if (isShift === true && isCaps === true) {
      for (const key of lettersKeys) {
        key.innerText = key.innerText.toLowerCase();
      }
    } else if (isShift === false && isCaps === true) {
      for (const key of lettersKeys) {
        key.innerText = key.innerText.toUpperCase();
      }
    } else {
      for (const key of lettersKeys) {
        key.innerText = key.innerText.toLowerCase();
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.code === "CapsLock" && isCaps === false) {
      isCaps = true;
    } else if (event.code === "CapsLock" && isCaps === true) {
      isCaps = false;
    } else if (event.key === "Shift" && isShift === false) {
      isShift = true;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Shift" && isShift === true) {
      isShift = false;
    }
  });

  keyboard.addEventListener("mousedown", (event) => {
    if (
      event.target.closest(".key").dataset.index === "CapsLock" &&
      isCaps === false
    ) {
      isCaps = true;
    } else if (
      event.target.closest(".key").dataset.index === "CapsLock" &&
      isCaps === true
    ) {
      isCaps = false;
    } else if (
      (event.target.closest(".key").dataset.index === "ShiftLeft" ||
        event.target.closest(".key").dataset.index === "ShiftRight") &&
      isShift === false
    ) {
      isShift = true;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isShift === true) {
      isShift = false;
    }
  });
};
upCase();
