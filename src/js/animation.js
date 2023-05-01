const keys = document.querySelectorAll(".key");

export const animation = () => {
  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    for (const key of keys) {
      if (event.code === key.dataset.index) {
        key.classList.add("key_up");
      }
    }
  });
  document.addEventListener("keyup", (event) => {
    event.preventDefault();
    for (const key of keys) {
      if (event.code === key.dataset.index) {
        key.classList.remove("key_up");
      }
    }
  });
};
animation();
