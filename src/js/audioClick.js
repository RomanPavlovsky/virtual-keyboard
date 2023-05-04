import { keyAudio } from '..';

const audioClick = () => {
  const keyboard = document.querySelector('.keyboard__wrapper');
  let audio = new Audio();
  audio.src = keyAudio;
  const play = async () => {
    if (audio.play() !== undefined) {
      await audio.play();
    }
  };
  const audioButton = document.querySelector('.speakers__power');
  const speakerLight = document.querySelector('.speakers__light');
  let isAudio = true;
  audioButton.addEventListener('click', () => {
    if (isAudio === false) {
      isAudio = true;
      audio.muted = false;
      audioButton.classList.remove('speakers__power_inactive');
      audioButton.classList.add('speakers__power_active');
      speakerLight.classList.remove('speakers__light_inactive');
      speakerLight.classList.add('speakers__light_active');
    } else {
      isAudio = false;
      audio.muted = true;
      audioButton.classList.remove('speakers__power_active');
      audioButton.classList.add('speakers__power_inactive');
      speakerLight.classList.remove('speakers__light_active');
      speakerLight.classList.add('speakers__light_inactive');
    }
  });
  keyboard.addEventListener('mouseup', (event) => {
    if (event.target.closest('.key')) {
      play();
    }
  });
  document.addEventListener('keyup', () => {
    play();
  });
};
export default audioClick;
