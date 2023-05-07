import './main.scss';
// import pressAudio from './assets/audio/pressKey.mp3';

import render from './js/render.js';
import animation from './js/animation.js';
import multiLang from './js/multiLang.js';
import inputValue from './js/inputValue.js';
import registerCapsShift from './js/shiftCaps.js';
import audioClick from './js/audioClick.js';

// export const keyAudio = pressAudio;

render();
audioClick();
registerCapsShift();
animation();
multiLang();
inputValue();
