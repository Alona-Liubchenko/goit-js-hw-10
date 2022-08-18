import './css/styles.css';

const inputEl = document.querySelector('#search-box');
const ulEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

const onInputSearch = e => {
  e.preventDefault();
  const form = e.currentTarget;

  let queryEl = form.elements.query.value;
  console.log(queryEl);
};
inputEl.addEventListener('input', onInputSearch);
