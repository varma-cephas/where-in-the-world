
const darkModeButton = document.querySelector(".darkModeIcon")
const regionFilter = document.querySelector("#region-filter")
const filterAfrica = document.querySelector("#filterAfrica")
const allCountryContainer = document.querySelector(".allCountries")

const countryOneFlag = document.querySelector("#countryOneFlag");
const countryOneName = document.querySelector("#countryOneName");
const countryOnePopulationAmount = document.querySelector("#countryOnePopulationAmount");
const countryOneRegion = document.querySelector("#countryOneRegion");
const countryOneCapital = document.querySelector("#countryOneCapital");

const countryTwoFlag = document.querySelector("#countryTwoFlag");
const countryTwoName = document.querySelector("#countryTwoName");
const countryTwoPopulationAmount = document.querySelector("#countryTwoPopulationAmount");
const countryTwoRegion = document.querySelector("#countryTwoRegion");
const countryTwoCapital = document.querySelector("#countryTwoCapital");

const countryThreeFlag = document.querySelector("#countryThreeFlag");
const countryThreeName = document.querySelector("#countryThreeName");
const countryThreePopulationAmount = document.querySelector("#countryThreePopulationAmount");
const countryThreeRegion = document.querySelector("#countryThreeRegion");
const countryThreeCapital = document.querySelector("#countryThreeCapital");


const countryFourFlag = document.querySelector("#countryFourFlag");
const countryFourName = document.querySelector("#countryFourName");
const countryFourPopulationAmount = document.querySelector("#countryFourPopulationAmount");
const countryFourRegion = document.querySelector("#countryFourRegion");
const countryFourCapital = document.querySelector("#countryFourCapital");

const countryFiveFlag = document.querySelector("#countryFiveFlag");
const countryFiveName = document.querySelector("#countryFiveName");
const countryFiveopulationAmount = document.querySelector("#countryFivePopulationAmount");
const countryFiveRegion = document.querySelector("#countryFiveRegion");
const countryFiveCapital = document.querySelector("#countryFiveCapital");

const countrySixFlag = document.querySelector("#countrySixFlag");
const countrySixName = document.querySelector("#countrySixName");
const countrySixpulationAmount = document.querySelector("#countrySixPopulationAmount");
const countrySixRegion = document.querySelector("#countrySixRegion");
const countrySixCapital = document.querySelector("#countrySixCapital");

const countrySevenFlag = document.querySelector("#countrySevenFlag");
const countrySevenName = document.querySelector("#countrySevenName");
const countrySevenopulationAmount = document.querySelector("#countrySevenPopulationAmount");
const countrySevenRegion = document.querySelector("#countrySevenRegion");
const countrySevenCapital = document.querySelector("#countrySevenCapital");

const countryEightFlag = document.querySelector("#countryEightFlag");
const countryEightName = document.querySelector("#countryEightName");
const countrEightPopulationAmount = document.querySelector("#countryEightPopulationAmount");
const countryEightRegion = document.querySelector("#countryEightRegion");
const countryEightCapital = document.querySelector("#countryEightCapital");

const countryNineFlag = document.querySelector("#countryNineFlag");
const countryNineName = document.querySelector("#countryNineName");
const countrNinePopulationAmount = document.querySelector("#countryNinePopulationAmount");
const countryNineRegion = document.querySelector("#countryNineRegion");
const countryNineCapital = document.querySelector("#countryNineCapital");

const countryTenFlag = document.querySelector("#countryTenFlag");
const countryTenName = document.querySelector("#countryTenName");
const countryTenPopulationAmount = document.querySelector("#countryTenPopulationAmount");
const countryTenRegion = document.querySelector("#countryTenRegion");
const countryTenCapital = document.querySelector("#countryTenCapital");

fetch('./data.json')
    .then((response)=>response.json())
    .then((data)=>{
        countryOneFlag.setAttribute("src", data[0].flags.svg)
        countryOneName.textContent =  data[0].name
        countryOnePopulationAmount.textContent = data[0].population
        countryOneRegion.textContent = data[0].region;
        countryOneCapital.textContent = data[0].capital

        countryTwoFlag.setAttribute("src", data[1].flags.svg)
        countryTwoName.textContent =  data[1].name
        countryTwoPopulationAmount.textContent = data[1].population
        countryTwoRegion.textContent = data[1].region;
        countryTwoCapital.textContent = data[1].capital

        countryThreeFlag.setAttribute("src", data[2].flags.svg)
        countryThreeName.textContent =  data[2].name
        countryThreePopulationAmount.textContent = data[2].population
        countryThreeRegion.textContent = data[2].region;
        countryThreeCapital.textContent = data[2].capital

        countryFourFlag.setAttribute("src", data[3].flags.svg)
        countryFourName.textContent =  data[3].name
        countryFourPopulationAmount.textContent = data[3].population
        countryFourRegion.textContent = data[3].region;
        countryFourCapital.textContent = data[3].capital

        countryFiveFlag.setAttribute("src", data[4].flags.svg)
        countryFiveName.textContent =  data[4].name
        countryFivePopulationAmount.textContent = data[4].population
        countryFiveRegion.textContent = data[4].region;
        countryFiveCapital.textContent = data[4].capital

        countrySixFlag.setAttribute("src", data[5].flags.png)
        countrySixName.textContent =  data[5].name
        countrySixPopulationAmount.textContent = data[5].population
        countrySixRegion.textContent = data[5].region;
        countrySixCapital.textContent = data[5].capital

        countrySevenFlag.setAttribute("src", data[6].flags.png)
        countrySevenName.textContent =  data[6].name
        countrySevenPopulationAmount.textContent = data[6].population
        countrySevenRegion.textContent = data[6].region;
        countrySevenCapital.textContent = data[6].capital

        countryEightFlag.setAttribute("src", data[7].flags.png)
        countryEightName.textContent =  data[7].name
        countryEightPopulationAmount.textContent = data[7].population
        countryEightRegion.textContent = data[7].region;
        countryEightCapital.textContent = data[7].capital

        countryNineFlag.setAttribute("src", data[8].flags.png)
        countryNineName.textContent =  data[8].name
        countryNinePopulationAmount.textContent = data[7].population
        countryNineRegion.textContent = data[8].region;
        countryNineCapital.textContent = "None";

        countryTenFlag.setAttribute("src", data[9].flags.png)
        countryTenName.textContent =  data[9].name
        countryTenPopulationAmount.textContent = data[9].population
        countryTenRegion.textContent = data[9].region;
        countryTenCapital.textContent = data[9].capital
    })

filterAfrica.addEventListener("click",()=>{
    allCountryContainer.style.display = "none"
    fetch("./data.json")
    .then((response)=> response.json())
    .then((data)=>{
        for(let i = 0; i < data.length; i++){
            if(data[i].region === 'Africa'){
                
            }
        }
    })
})

darkModeButton.addEventListener("click",()=>{
    document.body.classList.toggle("changeBackgroundColor")
})


