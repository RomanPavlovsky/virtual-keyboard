export default class Controller {
  constructor(layoutView, keyboardView, soundView, screenView) {
    this.layoutView = layoutView;
    this.keyboardView = keyboardView;
    this.soundView = soundView;
    this.screenView = screenView;
    this.speakerButton = document.querySelector('.speakers__power');
    this.keyboard = document.querySelector('.keyboard__wrapper');
    this.state = {
      isCaps: false,
      isShift: false,
    };
    this.shortcutKeys = {
      ControlLeft: '.ctrl-left',
      ControlRight: '.ctrl-right',
      AltLeft: '.alt-left',
      AltRight: '.alt-right',
    };
    this.shortcut = new Set();
    this.keyboard.addEventListener('mousedown', (e) => {
      if (e.button !== 2) {
        this.mouseDown(e);
      }
    });
    document.addEventListener('keydown', (e) => {
      this.keyDown(e);
    });
    document.addEventListener('keyup', (e) => {
      this.keyUp(e);
    });
    this.speakerButton.addEventListener('click', () => {
      this.soundView.toggleSound();
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.keyboardView.inactiveKeys(this.state);
      }
    });
  }

  mouseDown(e) {
    e.preventDefault();
    this.layoutView.toggleMouse();
    let lastTarget = null;
    const changeTarget = (e) => {
      if (e.relatedTarget.closest('.key')) {
        lastTarget = e.relatedTarget;
        if (e.relatedTarget.id === 'MetaLeft') {
          this.toggleLanguage();
        }
      }
      if (e.target !== lastTarget) {
        this.soundView.play();
        console.log('lastTarget', lastTarget.id);
        console.log('current target', e.target.id);
        if (e.target.id === 'ShiftRight' || e.target.id === 'ShiftLeft') {
          console.log('shift');
          this.toggleShift();
        }
        if (e.target.id === 'CapsLock') {
          this.toggleCaps();
        }
        if (e.target.closest('.key')) {
          console.log('+');
          console.log(this.state);
          this.keyboardView.activeKey(e.target.id);
          this.screenView.inputValue(e.target.id, this.state);
          this.keyboardView.inactiveKey(lastTarget.id, this.state);
        }
      }
      if (!e.target.closest('.keyboard__wrapper')) {
        document.removeEventListener('mouseover', changeTarget);
        this.keyboardView.inactiveKey(lastTarget.id, this.state);
      }
    };
    const mouseUp = (e) => {
      if (e.target.closest('.key')) {
        e.preventDefault();
        this.soundView.play();
        this.keyboardView.inactiveKey(e.target.id, this.state);
        if (e.target.id === 'MetaLeft') {
          this.toggleLanguage();
        }
      }
      this.layoutView.toggleMouse();
      document.removeEventListener('mouseover', changeTarget);
      document.removeEventListener('mouseup', mouseUp);
    };
    if (e.target.closest('.key')) {
      this.keyboardView.activeKey(e.target.id);
      this.screenView.inputValue(e.target.id, this.state);
      document.addEventListener('mouseover', changeTarget);
      if (e.target.id === 'ShiftRight' || e.target.id === 'ShiftLeft') {
        this.toggleShift();
      }
      if (e.target.id === 'CapsLock') {
        this.toggleCaps();
      }
    }
    document.addEventListener('mouseup', mouseUp);
  }
  keyDown(e) {
    e.preventDefault();
    this.keyboardView.activeKey(e.code);
    this.screenView.inputValue(e.code, this.state);
    if (e.code === 'CapsLock') {
      if (!e.repeat) {
        this.toggleCaps();
      }
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (!e.repeat) {
        this.toggleShift();
      }
    }
    for (const key in this.shortcutKeys) {
      if (e.code === `${key}`) {
        this.shortcut.add(key);
      }
    }
  }
  keyUp(e) {
    console.log(this.state);
    this.checkShortcut();
    e.preventDefault();
    if (this.state.isShift) {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.toggleShift();
      }
    }
    if (!this.state.isCaps) {
      this.soundView.play();
    }
    this.keyboardView.inactiveKey(e.code, this.state);
    this.clearShortcut();
  }
  toggleShift() {
    if (!this.state.isShift) {
      this.state.isShift = true;
    } else {
      this.state.isShift = false;
    }
    this.keyboardView.changeCase(this.state.isShift, this.state.isCaps);
  }
  toggleCaps() {
    if (!this.state.isCaps) {
      this.state.isCaps = true;
    } else {
      this.state.isCaps = false;
    }
    this.keyboardView.changeCase(this.state.isShift, this.state.isCaps);
  }
  toggleLanguage() {
    const lang = localStorage.getItem('lang');
    if (lang === null || lang === 'en') {
      localStorage.setItem('lang', 'ru');
      this.keyboardView.changeLanguage('ru');
    } else {
      localStorage.setItem('lang', 'en');
      this.keyboardView.changeLanguage('en');
    }
  }
  checkShortcut() {
    if (
      (this.shortcut.has('ControlLeft') || this.shortcut.has('ControlRight')) &&
      (this.shortcut.has('AltLeft') || this.shortcut.has('AltRight'))
    ) {
      this.toggleLanguage();
    }
  }
  clearShortcut() {
    for (const key in this.shortcutKeys) {
      const element = document.querySelector(`${this.shortcutKeys[key]}`);
      if (!element.classList.contains('key_up')) {
        this.shortcut.delete(key);
      }
    }
  }
}
