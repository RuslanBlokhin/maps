import template from '../../src/templates/leftModal.handlebars';
import Glide from '@glidejs/glide';

const content = document.querySelector('.content');
const current = document.querySelector('.select__current');

export function getValue(filteredObj) {
  let value = 'rus';
  let text = current.textContent;
  value = getLanguage(value, text);
  const selectedObj = {
    ...filteredObj,
    language: filteredObj.language[value],
  };
  content.innerHTML = template(selectedObj);

  const glide = new Glide('.glide');
  glide.update({
    autoplay: 3000,
    hoverpause: true,
  });
  glide.mount();
}

export function getLanguage(value, text) {
  if (text === 'Русский') return (value = 'rus');
  else if (text === 'English') return (value = 'eng');
  else if (text === 'Deutsch') return (value = 'deu');
  else if (text === 'Español') return (value = 'esp');
  else if (text === 'Italiano') return (value = 'ita');
  else if (text === 'Français') return (value = 'fra');
  else if (text === 'Український') return (value = 'ukr');
  else return (value = 'rus');
}
