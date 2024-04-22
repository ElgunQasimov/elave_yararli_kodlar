const baseUrl = "https://restcountries.com/v3.1/all";
const searchInp = document.querySelector(".search");
const cards = document.querySelector(".cards");

function getAllData() {
  fetch(`${baseUrl}`)
    .then((res) => res.json())
    .then((data) => {
      renderUI(data);
    });
}

getAllData();

function renderUI(data) {
    let innerHTML = "";
    data.forEach((element) => {
      innerHTML += `
        <div class="card col-md-4 col-lg-3" style="width: 24%;">
          <img src="${element.flags.png}" class="card-img-top" alt="">
          <div class="card-body">
            <h5>${element.name.common}</h5>
            <p class="card-text"><b>Population:</b> ${element.population}</p> 
            <p class="card-text"><b>Region:</b> ${element.region}</p> 
            <p class="card-text"><b>Capital:</b> ${element.capital}</p> 
          </div>
        </div>`;
    });
    cards.innerHTML = innerHTML;
  }



searchInp.addEventListener("keyup", (e) => {
    let searchValue = e.target.value.toLowerCase().trim();
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((data) => {
        let filteredData = data.filter((country) =>
          country.name.common.toLowerCase().includes(searchValue)
        );
        cards.innerHTML = ""; 
        renderUI(filteredData);
      });
  });


