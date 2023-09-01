'use strict';
import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '400px',
  position: 'center-center',
  failure: {
    background: '#913f3f',
    textColor: '#fff',
  },
});
const options = {};
const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');
const loaderAnimation = document.querySelector('.loader');
const loaderInfo = document.querySelector('.loader__text');

axios.defaults.headers.common['x-api-key'] =
  'live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10';
axios
  .get('https://api.thecatapi.com/v1/breeds', options)
  .then(response => {
    if (response.status === 200) {
      return response.data;
    } else {
      Notiflix.Notify.failure(
        `Oops! Something went wrong! Try reloading the page!`
      );
    }
  })
  .then(data => {
    loaderAnimation.classList.add('hidden');
    loaderInfo.classList.add('hidden');
    breedSelect.classList.remove('hidden');
    renderSelect(data.reverse());
  })
  .catch(error => {
    loaderAnimation.classList.add('hidden');
    loaderInfo.classList.add('hidden');
    breedSelect.classList.add('hidden');
    Notiflix.Notify.failure(
      `Oops! Something went wrong! Try reloading the page!`
    );
  });

function renderSelect(cats) {
  cats.forEach(cat => {
    const addNameToSelect = `<option value="${cat.id}">${cat.name}</option>`;
    breedSelect.insertAdjacentHTML('afterbegin', addNameToSelect);
  });

  new SlimSelect({
    settings: {
      contentLocation: breedSelect,
    },
  });

  breedSelect.addEventListener('change', function handleChange(event) {
    const selectedBreed = event.target.value;
    catInfo.innerHTML = '';
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`,
        options
      )
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          Notiflix.Notify.failure(
            `Oops! Something went wrong! Try reloading the page!`
          );
        }
      })
      .then(cat => {
        const chosenCat = cat[0];
        return renderCatBox(chosenCat);
      });
  });
}

function renderCatBox(cat) {
  const addCat = `<div class="box__cat"><img
    class="cat__image"
    src="${cat.url}"
    alt="${cat.breeds[0].name}"
  />
  <div class="box__description"><h2>${cat.breeds[0].name}</h2>
  <p>${cat.breeds[0].description}</p>
  <p><h3>Temperament:</h3> ${cat.breeds[0].temperament}</p>
  </div>
  </>
  </div>`;
  const makePromise = () => {
    return new Promise(resolve => {
      loaderAnimation.classList.remove('hidden'),
        loaderInfo.classList.remove('hidden');
      setTimeout(() => resolve(), 1000);
    });
  };

  makePromise()
    .then(() => {
      catInfo.insertAdjacentHTML('afterbegin', addCat);
      loaderAnimation.classList.add('hidden');
      loaderInfo.classList.add('hidden');
    })
    .catch(error => console.error(error));
}
