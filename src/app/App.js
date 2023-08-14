import LayoutView from './modules/LayoutView';
import keys from './data/keys';
import KeyboardView from './modules/KeyboardView';
import SoundView from './modules/SoundView';
import ScreenView from './modules/ScreenView';
import Controller from './modules/Controller';

export default class App {
  constructor() {
    this.layoutView = new LayoutView();
    this.keyboardView = new KeyboardView(keys);
    this.soundView = new SoundView();
    this.ScreenView = new ScreenView();
    this.controller = new Controller(
      this.layoutView,
      this.keyboardView,
      this.soundView,
      this.ScreenView
    );
  }
  start() {
    this.keyboardView.renderKeys();
  }
}
