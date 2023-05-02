const textArea = document.querySelector(".textarea");
const keyboard = document.querySelector(".keyboard");
const keys = document.querySelectorAll(
  `[data-type="letters"], [data-type="multi-letters"], [data-type="multi-symbols"], [data-type="symbols"]`
);

export const inputValue = () => {
  textArea.focus();
  const inputSymbols = (symbol) => {
    const { selectionStart, selectionEnd } = textArea;
    textArea.value =
      textArea.value.slice(0, selectionStart) +
      symbol +
      textArea.value.slice(selectionEnd);
    textArea.selectionEnd = selectionStart + symbol.length;
    textArea.selectionStart = textArea.selectionEnd;
  };
  document.addEventListener("keydown", (event) => {
    for (const key of keys) {
      if (event.code === key.dataset.index) {
        inputSymbols(key.lastElementChild.innerText);
      }
    }
  });
  keyboard.addEventListener("mousedown", (event) => {
    let key = event.target.closest(".key");
    if (!!event.target.closest(".key").dataset.type) {
      inputSymbols(event.target.closest(".key").lastElementChild.innerText);
    }
  });
};
inputValue();
