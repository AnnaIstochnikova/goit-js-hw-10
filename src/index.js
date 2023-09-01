'use strict';

import axios from 'axios';
//import SlimSelect from 'slim-select';

const options = {};
const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');
// new SlimSelect({
//   select: breedSelect,
// });

axios.defaults.headers.common['x-api-key'] =
  'live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10';
axios
  .get('https://api.thecatapi.com/v1/breeds', options)
  .then(response => {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.status);
    }
  })
  .then(data => {
    console.log(data);
    renderSelect(data);
  })
  .catch(error => {
    console.log(error);
  });

function renderSelect(cats) {
  console.log(cats);
  cats.forEach(cat => {
    const addNameToSelect = `<option value="${cat.id}">${cat.name}</option>`;
    breedSelect.insertAdjacentHTML('afterbegin', addNameToSelect);
    // console.log(cat.name);
  });

  breedSelect.addEventListener('change', function handleChange(event) {
    const selectedBreed = event.target.value;

    cats.forEach(cat => {
      if (selectedBreed !== null || selectedBreed === cat.name) {
        console.log(cat.name);
      }
    });
  });
}
