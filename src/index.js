import './main.scss';
import pressAudio from './assets/audio/pressKey.mp3';

export const keyAudio = pressAudio;

import render from './js/render.js';
import animation from './js/animation.js';
import multiLang from './js/multiLang.js';
import inputValue from './js/inputValue.js';
import registerCapsShift from './js/shiftCaps.js';
import audioClick from './js/audioClick.js';

render();
audioClick();
registerCapsShift();
animation();
multiLang();
inputValue();
