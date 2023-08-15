const keys = [
  {
    code: 'Backquote',
    type: 'mixLetter',
    name: {
      en: {
        1: '~',
        2: '`',
      },
      ru: {
        1: 'ё',
        2: '',
      },
    },
  },
  { code: 'Digit1', type: 'symbol', name: { 1: '!', 2: '1' } },
  {
    code: 'Digit2',
    type: 'mixSymbol',
    name: {
      en: {
        1: '@',
        2: '2',
      },
      ru: {
        1: '"',
        2: '2',
      },
    },
  },
  {
    code: 'Digit3',
    type: 'mixSymbol',
    name: {
      en: {
        1: '#',
        2: '3',
      },
      ru: {
        1: '№',
        2: '3',
      },
    },
  },
  {
    code: 'Digit4',
    type: 'mixSymbol',
    name: {
      en: {
        1: '$',
        2: '4',
      },
      ru: {
        1: ';',
        2: '4',
      },
    },
  },
  { code: 'Digit5', type: 'symbol', name: { 1: '%', 2: '5' } },
  {
    code: 'Digit6',
    type: 'mixSymbol',
    name: {
      en: {
        1: '^',
        2: '6',
      },
      ru: {
        1: ':',
        2: '6',
      },
    },
  },
  {
    code: 'Digit7',
    type: 'mixSymbol',
    name: {
      en: {
        1: '&',
        2: '7',
      },
      ru: {
        1: '?',
        2: '7',
      },
    },
  },
  { code: 'Digit8', type: 'symbol', name: { 1: '*', 2: '8' } },
  { code: 'Digit9', type: 'symbol', name: { 1: '(', 2: '9' } },
  { code: 'Digit0', type: 'symbol', name: { 1: ')', 2: '0' } },
  { code: 'Minus', type: 'symbol', name: { 1: '_', 2: '-' } },
  { code: 'Equal', type: 'symbol', name: { 1: '+', 2: '=' } },
  { code: 'Backspace', type: 'backspace', name: 'Backspace' },
  { code: 'Tab', type: 'tab', name: 'Tab' },
  { code: 'KeyQ', type: 'simpleLetter', name: { en: 'q', ru: 'й' } },
  { code: 'KeyW', type: 'simpleLetter', name: { en: 'w', ru: 'ц' } },
  { code: 'KeyE', type: 'simpleLetter', name: { en: 'e', ru: 'у' } },
  { code: 'KeyR', type: 'simpleLetter', name: { en: 'r', ru: 'к' } },
  { code: 'KeyT', type: 'simpleLetter', name: { en: 't', ru: 'е' } },
  { code: 'KeyY', type: 'simpleLetter', name: { en: 'y', ru: 'н' } },
  { code: 'KeyU', type: 'simpleLetter', name: { en: 'u', ru: 'г' } },
  { code: 'KeyI', type: 'simpleLetter', name: { en: 'i', ru: 'ш' } },
  { code: 'KeyO', type: 'simpleLetter', name: { en: 'o', ru: 'щ' } },
  { code: 'KeyP', type: 'simpleLetter', name: { en: 'p', ru: 'з' } },

  {
    code: 'BracketLeft',
    type: 'mixLetter',
    name: {
      en: {
        1: '{',
        2: '[',
      },
      ru: {
        1: 'х',
        2: '',
      },
    },
  },

  {
    code: 'BracketRight',
    type: 'mixLetter',
    name: {
      en: {
        1: '}',
        2: ']',
      },
      ru: {
        1: 'ъ',
        2: '',
      },
    },
  },
  {
    code: 'Backslash',
    type: 'mixSymbol',
    name: {
      en: {
        1: '|',
        2: '\\',
      },
      ru: {
        1: '/',
        2: '\\',
      },
    },
  },
  { code: 'Delete', type: 'del', name: 'Del' },
  { code: 'CapsLock', type: 'caps', name: 'CapsLock' },
  { code: 'KeyA', type: 'simpleLetter', name: { en: 'a', ru: 'ф' } },
  { code: 'KeyS', type: 'simpleLetter', name: { en: 's', ru: 'ы' } },
  { code: 'KeyD', type: 'simpleLetter', name: { en: 'd', ru: 'в' } },
  { code: 'KeyF', type: 'simpleLetter', name: { en: 'f', ru: 'а' } },
  { code: 'KeyG', type: 'simpleLetter', name: { en: 'g', ru: 'п' } },
  { code: 'KeyH', type: 'simpleLetter', name: { en: 'h', ru: 'р' } },
  { code: 'KeyJ', type: 'simpleLetter', name: { en: 'j', ru: 'о' } },
  { code: 'KeyK', type: 'simpleLetter', name: { en: 'k', ru: 'л' } },
  { code: 'KeyL', type: 'simpleLetter', name: { en: 'l', ru: 'д' } },

  {
    code: 'Semicolon',
    type: 'mixLetter',
    name: {
      en: {
        1: ':',
        2: ';',
      },
      ru: {
        1: 'ж',
        2: '',
      },
    },
  },
  {
    code: 'Quote',
    type: 'mixLetter',
    name: {
      en: {
        1: '"',
        2: "'",
      },
      ru: {
        1: 'э',
        2: '',
      },
    },
  },

  { code: 'Enter', type: 'enter', name: 'Enter' },
  { code: 'ShiftLeft', type: 'shift-left', name: 'Shift' },
  { code: 'KeyZ', type: 'simpleLetter', name: { en: 'z', ru: 'я' } },
  { code: 'KeyX', type: 'simpleLetter', name: { en: 'x', ru: 'ч' } },
  { code: 'KeyC', type: 'simpleLetter', name: { en: 'c', ru: 'с' } },
  { code: 'KeyV', type: 'simpleLetter', name: { en: 'v', ru: 'м' } },
  { code: 'KeyB', type: 'simpleLetter', name: { en: 'b', ru: 'и' } },
  { code: 'KeyN', type: 'simpleLetter', name: { en: 'n', ru: 'т' } },
  { code: 'KeyM', type: 'simpleLetter', name: { en: 'm', ru: 'ь' } },
  {
    code: 'Comma',
    type: 'mixLetter',
    name: {
      en: {
        1: '<',
        2: ',',
      },
      ru: {
        1: 'б',
        2: '',
      },
    },
  },
  {
    code: 'Period',
    type: 'mixLetter',
    name: {
      en: {
        1: '>',
        2: '.',
      },
      ru: {
        1: 'ю',
        2: '',
      },
    },
  },
  {
    code: 'Slash',
    type: 'mixSymbol',
    name: {
      en: {
        1: '?',
        2: '/',
      },
      ru: {
        1: ',',
        2: '.',
      },
    },
  },
  { code: 'ArrowUp', type: 'up', name: '' },
  { code: 'ShiftRight', type: 'shift-right', name: 'Shift' },
  { code: 'ControlLeft', type: 'ctrl-left', name: 'Ctrl' },
  { code: 'MetaLeft', type: 'win', name: '' },
  { code: 'AltLeft', type: 'alt-left', name: 'Alt' },
  { code: 'Space', type: 'space', name: '' },
  { code: 'AltRight', type: 'alt-right', name: 'Alt' },
  { code: 'ArrowLeft', type: 'left', name: '' },
  { code: 'ArrowDown', type: 'down', name: '' },
  { code: 'ArrowRight', type: 'right', name: '' },
  { code: 'ControlRight', type: 'ctrl-right', name: 'Ctrl' },
];
export default keys;
