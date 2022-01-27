import data from '../data/content.js';
import { getValue } from './selectGetValue.js';
import { getLanguage } from './selectGetValue.js';
import museumIcon from '../images/marker/museum.png';
import template from '../../src/templates/leftModal.handlebars';

const modalLeft = document.querySelector('.modal');
const panorama = document.querySelector('.panorama');
const buttonPanorama = document.querySelector('.button__panorama');
const body = document.querySelector('.select__body');
const current = document.querySelector('.select__current');
const content = document.querySelector('.content');

const center = [59.943045859495875, 30.31369587130237];
const cathedral = [59.9501872470237, 30.31593150993791];
const torture = [59.949001294958, 30.31648974831176];
const prison = [59.94872, 30.3135968];
const faberge = [59.936376, 30.343389];
const hermitage = [59.939954, 30.314508];
const spit = [59.944245, 30.3071301];
const zoom = 15;
const icon = museumIcon;

ymaps.ready(init);
function init() {
  let map = new ymaps.Map('yandexMaps', {
    center: center,
    zoom: zoom,
    controls: ['fullscreenControl'],
  });

  const multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      referencePoints: [cathedral, torture, prison, faberge, hermitage, spit],
      params: {
        routingMode: 'pedestrian',
        reverseGeocoding: false,
      },
    },
    {
      editorDrawOver: false,
      wayPointVisible: false,
      routeActiveMarkerVisible: false,
    },
  );
  map.geoObjects.add(multiRoute);

  let lat;
  let lng;
  buttonPanorama.addEventListener('click', () => {
    getPanorama(lat, lng);
    panorama.classList.add('is-open');
  });

  let defaultObj;
  body.addEventListener('click', () => {
    let text = current.textContent;
    let value;
    value = getLanguage(value, text);
    console.log(value, text);
    const selectObj = {
      ...defaultObj,
      language: defaultObj.language[value],
    };
    content.innerHTML = template(selectObj);
  });

  data.forEach(item => {
    const marker = new ymaps.Placemark(
      [item.coordinates.lat, item.coordinates.lng],
      {},
      {
        zIndex: 10000,
        interactiveZIndex: true,
        iconLayout: 'default#image',
        iconImageHref: icon,
        iconImageSize: [30, 30],
        iconImageOffset: [-6, 0],
      },
    );
    map.geoObjects.add(marker);

    marker.events.add('click', e => {
      lat = item.coordinates.lat;
      lng = item.coordinates.lng;
      defaultObj = {
        id: item.id,
        coordinates: item.coordinates,
        site: item.site,
        image: item.image,
        phone: item.phone,
        panorama: item.panorama,
        language: item.language,
      };
      getValue(defaultObj);
      modalLeft.classList.add('is-open');
    });
  });
}

function getPanorama(lat, lng) {
  const locateRequest = ymaps.panorama.locate([lat, lng]);
  locateRequest.then(function (panoramas) {
    console.log(panoramas[0]);
    if (panoramas.length) {
      let player = new ymaps.panorama.Player('panorama', panoramas[0], {
        controls: ['panoramaName', 'closeControl'],
        hotkeysEnabled: true,
        suppressMapOpenBlock: true,
        direction: [0, 0],
      });

      player.events.add('destroy', function () {
        panorama.classList.remove('is-open');
      });
    } else {
      console.log('В заданной точке нет панорам.');
    }
  });
}
