import './css/styles.css';
// import { fetchCountries } from './fetchCountries';

const inputEl = document.querySelector('#search-box');
const ulEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

inputEl.addEventListener('input', onSearch);

const DEBOUNCE_DELAY = 300;

function onSearch(e) {
  e.preventDefault();
  const name = e.target.value.trim();
  console.log(name);
  fetchCountries(name);
}

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then();
}
