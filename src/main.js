import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getPhotos from './js/pixabay-api';
import renderContent from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

const gallery = document.querySelector('.gallery');

loader.classList.add('hidden');

iziToast.settings({
  position: 'topRight',
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.querySelector('.form-input').value;

  if (query.trim() === '') {
    iziToast.error({
      message: 'Query is not valid!',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');
  console.log(loader.classList);

  getPhotos(query)
    .then(data => {
      if (data) {
        renderContent(data);
      }
    })
    .catch(e => {
      iziToast.error({
        message: e.message,
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
      form.reset();
    });
});
