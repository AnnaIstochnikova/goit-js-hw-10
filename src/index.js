'use strict';

const btn = document.querySelector('.button');
const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key =
  'live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10';

breedSelect.addEventListener('change', function handleChange(event) {
  localStorage.setItem('CHOSEN_CAT', event.target.value);
  fetch(getUrl)
    .then(cat => renderCatBox(cat))
    .catch(error => console.log(error));
});
let cnnn = '';
const chosenCat = localStorage.getItem('CHOSEN_CAT');
console.log(chosenCat);

cnnn = chosenCat;
console.log(cnnn);

const getUrl = catName =>
  `live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10`;

// btn.addEventListener('click', () => {
//   fetch(getUrl)
//     .then(cat => renderCatBox(cat))
//     .catch(error => console.log(error));
// });

fetch(url, {
  headers: {
    'x-api-key': api_key,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    catInfo.append(...data.map(renderCatBox));
  });

function renderCatBox(cat) {
  console.log(cat);
  const addCat = `<div class="box__cat"><img
  class="cat__image"
  src="${cat.image.url}"
  alt="${cat.name}"
/>
<div class="box__description"><h2>${cat.name}</h2>
<p>${cat.description}</p>
<p><h3>Temperament:</h3> ${cat.temperament}</p>
</div>
</>
</div>`;
  catInfo.insertAdjacentHTML('afterbegin', addCat);

  const addNameToSelect = `<option value="${cat.name}">${cat.name}</option>`;
  breedSelect.insertAdjacentHTML('afterbegin', addNameToSelect);
  console.log(addCat);
}
