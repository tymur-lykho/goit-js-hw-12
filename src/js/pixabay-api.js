import axios from 'axios';

const API_KEY = '13611713-3ff341a8136eabd4453734908';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export default async function getPhotos(query, limit, page) {
  const result = await axios.get('', {
    params: {
      q: query,
      per_page: limit,
      page: page,
    },
  });

  return result.data;
}
