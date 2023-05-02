const keys = [
  {
    code: 'Backquote',
    type: 'multi-letters',
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
  { code: 'Digit1', type: 'symbols', name: { 1: '!', 2: '1' } },
  {
    code: 'Digit2',
    type: 'multi-symbols',
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
    type: 'multi-symbols',
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
    type: 'multi-symbols',
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
  { code: 'Digit5', type: 'symbols', name: { 1: '%', 2: '5' } },
  {
    code: 'Digit6',
    type: 'multi-symbols',
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
    type: 'multi-symbols',
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
  { code: 'Digit8', type: 'symbols', name: { 1: '*', 2: '8' } },
  { code: 'Digit9', type: 'symbols', name: { 1: '(', 2: '9' } },
  { code: 'Digit0', type: 'symbols', name: { 1: ')', 2: '0' } },
  { code: 'Minus', type: 'symbols', name: { 1: '_', 2: '-' } },
  { code: 'Equal', type: 'symbols', name: { 1: '+', 2: '=' } },
  { code: 'Backspace', type: 'backspace', name: 'Backspace' },
  { code: 'Tab', type: 'tab', name: 'Tab' },
  { code: 'KeyQ', type: 'letters', name: { en: 'q', ru: 'й' } },
  { code: 'KeyW', type: 'letters', name: { en: 'w', ru: 'ц' } },
  { code: 'KeyE', type: 'letters', name: { en: 'e', ru: 'у' } },
  { code: 'KeyR', type: 'letters', name: { en: 'r', ru: 'к' } },
  { code: 'KeyT', type: 'letters', name: { en: 't', ru: 'е' } },
  { code: 'KeyY', type: 'letters', name: { en: 'y', ru: 'н' } },
  { code: 'KeyU', type: 'letters', name: { en: 'u', ru: 'г' } },
  { code: 'KeyI', type: 'letters', name: { en: 'i', ru: 'ш' } },
  { code: 'KeyO', type: 'letters', name: { en: 'o', ru: 'щ' } },
  { code: 'KeyP', type: 'letters', name: { en: 'p', ru: 'з' } },

  {
    code: 'BracketLeft',
    type: 'multi-letters',
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
    type: 'multi-letters',
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
    type: 'multi-symbols',
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
  { code: 'KeyA', type: 'letters', name: { en: 'a', ru: 'ф' } },
  { code: 'KeyS', type: 'letters', name: { en: 's', ru: 'ы' } },
  { code: 'KeyD', type: 'letters', name: { en: 'd', ru: 'в' } },
  { code: 'KeyF', type: 'letters', name: { en: 'f', ru: 'а' } },
  { code: 'KeyG', type: 'letters', name: { en: 'g', ru: 'п' } },
  { code: 'KeyH', type: 'letters', name: { en: 'h', ru: 'р' } },
  { code: 'KeyJ', type: 'letters', name: { en: 'j', ru: 'о' } },
  { code: 'KeyK', type: 'letters', name: { en: 'k', ru: 'л' } },
  { code: 'KeyL', type: 'letters', name: { en: 'l', ru: 'д' } },

  {
    code: 'Semicolon',
    type: 'multi-letters',
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
    type: 'multi-letters',
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
  { code: 'KeyZ', type: 'letters', name: { en: 'z', ru: 'я' } },
  { code: 'KeyX', type: 'letters', name: { en: 'x', ru: 'ч' } },
  { code: 'KeyC', type: 'letters', name: { en: 'c', ru: 'с' } },
  { code: 'KeyV', type: 'letters', name: { en: 'v', ru: 'м' } },
  { code: 'KeyB', type: 'letters', name: { en: 'b', ru: 'и' } },
  { code: 'KeyN', type: 'letters', name: { en: 'n', ru: 'т' } },
  { code: 'KeyM', type: 'letters', name: { en: 'm', ru: 'ь' } },
  {
    code: 'Comma',
    type: 'multi-letters',
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
    type: 'multi-letters',
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
    type: 'multi-symbols',
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