const modalLeft = document.querySelector('.modal');
const buttonExit = document.querySelector('.button__exit');
const buttonPlay = document.querySelector('.button__play_close');
const buttonBuy = document.querySelector('.button__buy');
const buttonPause = document.querySelector('.button__pause');

function getAudio() {
  return document.querySelector('.audio_controls');
}

let firstClick = false;
buttonPlay.addEventListener('click', () => {
  if (!firstClick) buttonBuy.classList.add('is-open');
  else {
    getAudio().play();
    buttonPause.classList.add('is-open');
  }

  buttonPlay.classList.add('is-close');
  firstClick = true;
});

buttonBuy.addEventListener('click', () => {
  getAudio().play();
  buttonPause.classList.add('is-open');
  buttonBuy.classList.add('delete');
});

buttonPause.addEventListener('click', () => {
  getAudio().pause();
  buttonPause.classList.remove('is-open');
  buttonPlay.classList.remove('is-close');
});

buttonExit.addEventListener('click', () => {
  modalLeft.classList.remove('is-open');
});
