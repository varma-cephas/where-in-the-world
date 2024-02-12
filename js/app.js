
const darkModeButton = document.querySelector(".darkModeIcon")
const countryOneFlage = document.querySelector("#countryOneFlag");
const countryOneName = document.querySelector("#countryOneName");
const countryOnePopulationAmount = document.querySelector("#countryOnePopulationAmount");
const countryOneRegion = document.querySelector("#countryOneRegion");
const countryOneCapital = document.querySelector("#countryOneCapital");


darkModeButton.addEventListener("click",()=>{
    console.log('clicked')
})

fetch('./data.json')
    .then((response)=>response.json())
    .then((data)=>{
        countryOneFlage.setAttribute("src", data[0].flags.svg)
        countryOneName.textContent =  data[0].name
        countryOnePopulationAmount.textContent = data[0].population
        countryOneRegion.textContent = data[0].region;
        countryOneCapital.textContent = data[0].capital
    })