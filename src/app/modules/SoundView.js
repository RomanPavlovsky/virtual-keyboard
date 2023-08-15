import audioSrc from '../../assets/audio/pressKey.mp3';

export default class SoundView {
  constructor() {
    this.audio = new Audio();
    this.audio.src = audioSrc;
    this.audio.muted = true;
    this.speakerButton = document.querySelector('.speakers__power');
    this.speakerLight = document.querySelector('.speakers__light');
  }
  play() {
    this.audio.play();
  }
  toggleSound() {
    if (this.audio.muted) {
      this.audio.muted = false;
      this.speakerButton.classList.replace(
        'speakers__power_inactive',
        'speakers__power_active'
      );
      this.speakerLight.classList.replace(
        'speakers__light_inactive',
        'speakers__light_active'
      );
    } else {
      this.audio.muted = true;
      this.speakerButton.classList.replace(
        'speakers__power_active',
        'speakers__power_inactive'
      );
      this.speakerLight.classList.replace(
        'speakers__light_active',
        'speakers__light_inactive'
      );
    }
  }
}
