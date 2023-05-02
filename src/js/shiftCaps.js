const lettersKeys = document.querySelectorAll(`[data-type="letters"]`);
const keyboard = document.querySelector(".keyboard");
export let isCaps = false;
export let isShift = false;
export const renderCaps = () => {
  console.log(isCaps);
  if (isCaps === true) {
    for (const key of lettersKeys) {
      key.lastChild.innerText = key.innerText.toUpperCase();
    }
  } else if (isCaps === false) {
    for (const key of lettersKeys) {
      key.lastChild.innerText = key.innerText.toLowerCase();
    }
  }
};
export const upCase = () => {
  document.addEventListener("keydown", (event) => {
    if (event.code === "CapsLock" && isCaps === false) {
      isCaps = true;
      renderCaps();
    } else if (event.code === "CapsLock" && isCaps === true) {
      isCaps = false;
      renderCaps();
    }
  });

  keyboard.addEventListener("mousedown", (event) => {
    if (
      event.target.closest(".key").dataset.index === "CapsLock" &&
      isCaps === false
    ) {
      isCaps = true;
      renderCaps();
    } else if (
      event.target.closest(".key").dataset.index === "CapsLock" &&
      isCaps === true
    ) {
      isCaps = false;
      renderCaps();
    }
  });

  // document.addEventListener("mouseup", (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (mouseActiveKey !== undefined) {
  //     mouseActiveKey.classList.remove("key_up");
  //   }
  // });
};
upCase();
