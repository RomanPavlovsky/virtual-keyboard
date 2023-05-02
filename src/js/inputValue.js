import { isCaps } from "./shiftCaps";
import { isShift } from "./shiftCaps";
const textArea = document.querySelector(".textarea");
const keyboard = document.querySelector(".keyboard");
const keys = document.querySelectorAll(
  `[data-type="letters"], [data-type="multi-letters"], [data-type="multi-symbols"], [data-type="symbols"]`
);

export const inputValue = () => {
  const inputSymbols = (symbol) => {
    textArea.focus();
    const { selectionStart, selectionEnd } = textArea;
    textArea.value =
      textArea.value.slice(0, selectionStart) +
      symbol +
      textArea.value.slice(selectionEnd);
    textArea.selectionEnd = selectionStart + symbol.length;
    textArea.selectionStart = textArea.selectionEnd;
  };
  document.addEventListener("keydown", (event) => {
    if (event.code === "Tab") {
      inputSymbols(`\t`);
    } else if (event.code === "Backspace") {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (event.code === "Delete") {
      const { selectionStart, selectionEnd } = textArea;
      textArea.setRangeText("", selectionStart, selectionEnd + 1, "end");
    } else if (event.code === "Space") {
      inputSymbols(" ");
    } else if (event.code === "Enter") {
      inputSymbols(`\n`);
    } else if (event.code === "ArrowUp") {
      inputSymbols(`↑`);
    } else if (event.code === "ArrowLeft") {
      inputSymbols(`←`);
    } else if (event.code === "ArrowRight") {
      inputSymbols(`→`);
    } else if (event.code === "ArrowDown") {
      inputSymbols(`↓`);
    } else {
      for (const key of keys) {
        if (event.code === key.dataset.index) {
          if (isShift === true) {
            inputSymbols(key.firstElementChild.innerText);
          } else if (isShift === false) {
            inputSymbols(key.lastElementChild.innerText);
          }
        }
      }
    }
  });
  keyboard.addEventListener("mousedown", (event) => {
    if (event.target.closest(".key").dataset.index === "Tab") {
      inputSymbols(`\t`);
    } else if (event.target.closest(".key").dataset.index === "Backspace") {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (event.target.closest(".key").dataset.index === "Delete") {
      const { selectionStart, selectionEnd } = textArea;
      textArea.setRangeText("", selectionStart, selectionEnd + 1, "end");
    } else if (event.target.closest(".key").dataset.index === "Space") {
      inputSymbols(" ");
    } else if (event.target.closest(".key").dataset.index === "Enter") {
      inputSymbols(`\n`);
    } else if (event.target.closest(".key").dataset.index === "ArrowUp") {
      inputSymbols(`↑`);
    } else if (event.target.closest(".key").dataset.index === "ArrowLeft") {
      inputSymbols(`←`);
    } else if (event.target.closest(".key").dataset.index === "ArrowRight") {
      inputSymbols(`→`);
    } else if (event.target.closest(".key").dataset.index === "ArrowDown") {
      inputSymbols(`↓`);
    } else if (!!event.target.closest(".key").dataset.type) {
      inputSymbols(event.target.closest(".key").lastElementChild.innerText);
    }
  });
};
inputValue();
