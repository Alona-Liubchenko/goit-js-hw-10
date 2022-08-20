const e=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");e.addEventListener("input",(function(e){e.preventDefault();const t=e.target.value.trim();console.log(t),function(e){fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>e.json())).then()}(t)}));
//# sourceMappingURL=index.de4ae761.js.map
