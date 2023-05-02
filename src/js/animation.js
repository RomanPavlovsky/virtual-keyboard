import { isCaps } from "./shiftCaps";
const keys = document.querySelectorAll(".key");
const keyboard = document.querySelector(".keyboard");
const caps = document.querySelector(`[data-index="CapsLock"]`);

export const animation = () => {
  let mouseActiveKey;
  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    for (const key of keys) {
      if (event.code === key.dataset.index) {
        key.classList.add("key_up");
      }
    }
  });
  keyboard.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.closest(".key")) {
      event.target.classList.add("key_up");
      mouseActiveKey = event.target;
    }
  });
  document.addEventListener("keyup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    for (const key of keys) {
      if (event.code === key.dataset.index && event.code !== "CapsLock") {
        key.classList.remove("key_up");
      } else if (event.code === "CapsLock" && isCaps === false) {
        key.classList.remove("key_up");
      }
    }
  });
  document.addEventListener("mouseup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      mouseActiveKey !== undefined &&
      mouseActiveKey.dataset.index !== "CapsLock"
    ) {
      mouseActiveKey.classList.remove("key_up");
    } else if (event.target.dataset.index === "CapsLock" && isCaps === false) {
      caps.classList.remove("key_up");
    }
  });
};
animation();
