import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getPhotos from './js/pixabay-api';
import { renderContent } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more-btn');

let limit = 15;
let page = 1;
let lastQuery;
let totalCountOfResult;

loadBtn.classList.add('hidden');

iziToast.settings({
  position: 'topRight',
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';

  const query = form.querySelector('.form-input').value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Query is not valid!',
    });
    return;
  }

  if (query !== lastQuery) {
    lastQuery = query;
    page = 1;
  }

  loader.classList.add('start');

  try {
    const data = await getPhotos(query, limit, page);
    totalCountOfResult = data.totalHits;
    if (data) {
      renderContent(data.hits);
    }
    if (data.hits.length < limit) {
      loadBtn.classList.add('hidden');
    } else {
      loadBtn.classList.remove('hidden');
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
    });
  }

  loader.classList.remove('start');

  form.reset();
});

loadBtn.addEventListener('click', async () => {
  loadBtn.classList.add('hidden');
  loader.classList.add('start');

  page += 1;

  try {
    const data = await getPhotos(lastQuery, limit, page);
    if (data) {
      renderContent(data.hits);
      scrollDown('.img-card', 3);
    }

    if (data.hits.length < limit) {
      loadBtn.classList.add('hidden');
    } else {
      loadBtn.classList.remove('hidden');
    }

    if (page > Math.ceil(totalCountOfResult / limit)) {
      loader.classList.remove('start');

      return iziToast.error({
        message: "We're sorry, there are no more posts to load",
      });
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
    });
  }

  loader.classList.remove('start');
});

function scrollDown(itemSelector, countOfItem) {
  const item = document.querySelector(itemSelector);
  const itemHeight = item.getBoundingClientRect().height;
  window.scrollBy({
    top: itemHeight * countOfItem,
    behavior: 'smooth',
  });
}
