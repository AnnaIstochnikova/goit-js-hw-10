'use strict';

const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');
// import SlimSelect from 'slim-select';
// new SlimSelect({
//   select: breedSelect,
// });

const url = `https://api.thecatapi.com/v1/images/search?breed_ids=`;
const api_key =
  'live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10';

let selectedOption = [];

breedSelect.addEventListener('change', function handleChange(event) {
  const selectedBreed = event.target.value;
  //localStorage.setItem('CHOSEN_CAT', selectedBreed);
  selectedOption.push(selectedBreed);

  console.log(selectedOption);
  console.log(selectedOption[0]);
  //console.log(renderCatBox(selectedOption[0]));
  //renderSelect();
  fetchCats()
    .then(cats => renderSelect(cats))
    .catch(error => console.log(error));
});
breedSelect.dispatchEvent(new Event('change'));
// const getUrl = catName =>
//   `live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10`;
//console.log(`${url}beng`);
function fetchCats(catId) {
  return fetch(`${url}${selectedOption[0]}`, {
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
      catInfo.append(...data.map(renderSelect));
    });
}
function renderSelect(cat) {
  const addNameToSelect = `<option value="${cat.name}">${cat.name}</option>`;
  breedSelect.insertAdjacentHTML('afterbegin', addNameToSelect);

  function renderCatBox(cat) {
    //cat.name = selectedOption[0];
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
  renderCatBox(cat);
}
console.log(selectedOption[0]);
// function renderCatBox(cat) {
//   //cat.name = selectedOption[0];
//   console.log(cat);
//   const addCat = `<div class="box__cat"><img
//   class="cat__image"
//   src="${cat.image.url}"
//   alt="${cat.name}"
// />
// <div class="box__description"><h2>${cat.name}</h2>
// <p>${cat.description}</p>
// <p><h3>Temperament:</h3> ${cat.temperament}</p>
// </div>
// </>
// </div>`;
//   catInfo.insertAdjacentHTML('afterbegin', addCat);

//   const addNameToSelect = `<option value="${cat.name}">${cat.name}</option>`;
//   breedSelect.insertAdjacentHTML('afterbegin', addNameToSelect);
//   console.log(addCat);
// }
