const textarea = document.querySelector(".textarea");
const lettersKeys = document.querySelectorAll(`[data-type="letters"]`);
const multiSymbolsKeys = document.querySelectorAll(
  `[data-type="multi-symbols"]`
);
const multiLettersKeys = document.querySelectorAll(
  `[data-type="multi-letters"]`
);

export const action = () => {
  textarea.focus();

  document.addEventListener("keydown", (event) => {
    for (const key of lettersKeys) {
      if (event.code === key.dataset.index) {
        // textarea.setSelectionRange(
        //   textarea.value.length,
        //   textarea.value.length
        // );
        // textarea.setRangeText(key.children[0].innerText);
        // textarea.selectionStart = textarea.selectionStart;
        // console.log(textarea.selectionStart);

        // console.log(textarea.value[0]);
        textarea.value += key.children[0].innerText;
      }
    }
  });

  document.addEventListener("click", () => {});
};
action();
