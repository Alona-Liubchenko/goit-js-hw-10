import './css/styles.css';
import API from './fetchCountries';
const inputEl = document.querySelector('#search-box');
const ulEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

inputEl.addEventListener('input', onSearch);

const DEBOUNCE_DELAY = 300;

function onSearch(e) {
  e.preventDefault();
  const input = e.currentTarget;
  console.log(input.elements);
  const searchInput = inputEl.value.trim();

  API.fetchCountries(searchInput)
    .then(renderCauntrysCard)
    .catch(error => console.log(error));
}
function cauntryList() {
  return `<div>
<h1>${fetchCountries(name)}</h1>
</div>`;
}

function renderCauntrysCard(cauntry) {
  const markup = cauntryList(cauntry);
  console.log(markup);
  divEl.innerHTML = markup;
}

function onFetchError(error) {
  alert('Oops, there is no country with that name');
}
