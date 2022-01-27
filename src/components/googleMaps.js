import data from '../data/content.js';
import { getValue } from './selectGetValue.js';
import museumIcon from '../images/marker/museum.png';

const modalLeft = document.querySelector('.modal');
const buttonExit = document.querySelector('.button');

const googleDefined = callback =>
  typeof google !== 'undefined' ? callback() : setTimeout(() => googleDefined(callback), 100);

let map;

const center = { lat: 59.943045859495875, lng: 30.31369587130237 };
const zoom = 15;
const icon = museumIcon;

googleDefined(() => {
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: zoom,
  });

  data.forEach(item => {
    const marker = new google.maps.Marker({
      position: item.coordinates,
      map: map,
      icon: icon,
      zIndex: item.id,
    });

    marker.addListener('click', () => {
      const defaultObj = {
        id: item.id,
        coordinates: item.coordinates,
        site: item.site,
        image: item.image,
        phone: item.phone,
        language: item.language,
      };
      getValue(defaultObj);
      modalLeft.classList.add('is-open');
    });

    map.addListener('click', e => {
      if (e.target === e.currentTarget) {
        modalLeft.classList.remove('is-open');
      }
    });
  });
});

buttonExit.addEventListener('click', () => {
  modalLeft.classList.remove('is-open');
});
