export default class ScreenView {
  constructor() {
    this.textarea = document.querySelector('.textarea');
    this.selection = window.getSelection();
  }
  showValue(value) {
    this.textarea.focus();
    this.textarea.setRangeText(value, this.start, this.end);
    this.toRight();
  }
  inputValue(inputKey, state) {
    this.value = this.textarea.value;
    this.start = this.textarea.selectionStart;
    this.end = this.textarea.selectionEnd;
    const keys = document.querySelectorAll(
      '[data-type="simpleLetter"], [data-type="mixLetter"], [data-type="symbol"], [data-type="mixSymbol"]'
    );

    if (inputKey === 'Backspace') {
      if (this.start !== this.end) {
        this.deleteSelect();
      } else {
        this.backspace();
      }
    } else if (inputKey === 'Delete') {
      if (this.start !== this.end) {
        this.deleteSelect();
      } else {
        this.textarea.setRangeText('', this.start, this.end + 1);
      }
    } else if (inputKey === 'ArrowUp') {
      this.toUp();
    } else if (inputKey === 'ArrowLeft') {
      this.toLeft();
    } else if (inputKey === 'ArrowRight') {
      this.toRight();
    } else if (inputKey === 'ArrowDown') {
      this.toDown();
    } else if (inputKey === 'Tab') {
      this.showValue('\t');
    } else if (inputKey === 'Space') {
      this.showValue(' ');
    } else if (inputKey === 'Enter') {
      this.showValue('\n');
    } else {
      keys.forEach((key) => {
        if (inputKey === key.id) {
          if (state.isShift) {
            this.showValue(key.firstElementChild.innerText);
          } else {
            this.showValue(key.lastElementChild.innerText);
          }
        }
      });
    }
  }
  deleteSelect() {
    this.textarea.setRangeText('', this.start, this.end);
  }
  backspace() {
    if (this.start !== 0) {
      this.textarea.setRangeText('', this.start - 1, this.start);
      this.toLeft();
    }
  }
  toLeft() {
    if (this.start !== 0) {
      this.textarea.selectionEnd = this.start - 1;
      this.textarea.selectionStart = this.textarea.selectionEnd;
    }
  }
  toRight() {
    this.textarea.selectionEnd = this.start + 1;
    this.textarea.selectionStart = this.textarea.selectionEnd;
  }
  toDown() {
    this.selection.modify('move', 'forward', 'line');
  }
  toUp() {
    this.selection.modify('move', 'backward', 'line');
  }
}
