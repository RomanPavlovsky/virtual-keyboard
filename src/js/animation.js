const keys = document.querySelectorAll(".key");
const keyboard = document.querySelector(".keyboard");

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
      if (event.code === key.dataset.index) {
        key.classList.remove("key_up");
      }
    }
  });
  document.addEventListener("mouseup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (mouseActiveKey !== undefined) {
      mouseActiveKey.classList.remove("key_up");
    }
  });
};
animation();
