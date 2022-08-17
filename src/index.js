import './css/styles.css';

const inputEl = document.querySelector('#search-box');
const ulEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v2/name/{name}')
  .then(response => {
    return response.json();
  })
  .then(fetchCountries => console.log(fetchCountries))
  .catch(error => {
    console.log(error);
  });
