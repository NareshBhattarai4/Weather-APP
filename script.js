const Apikey = "450a40029cefc22563492cf0584fedbc";
const city = document.querySelector("input");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".huminidy");
const windSpeed = document.querySelector(".wind-speed");
const img = document.querySelector(".img");
const cloud ="./images/clouds.png";
const clear ="./images/clear.png";
const drizzle ="./images/drizzle.png";
const mist ="./images/mist.png";
const rain ="./images/rain.png";




const fetchApi = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${Apikey}`);
    const result = await data.json();
    const dats = result;
    console.log(dats);

    dats.weather.forEach(e => {
        if (e.main == "Clouds") {
            img.src = cloud;

        }else if(e.main == "Clear"){
            img.src = clear;
        }else if(e.main == "Drizzle"){
            img.src = drizzle;
        }else if(e.main == "Mist"){
            img.src = mist;
        }else if(e.main == "Rain"){
            img.src = rain;
        }
    });

    if (dats.message) {
        temp.innerText = dats.message;
        cityName.innerText = "";
        humidity.innerText = "00%";
        windSpeed.innerText = "00km/h";

    } else {
        temp.innerText = `${dats.main.temp}°C`;
        cityName.innerText = dats.name;
        humidity.innerText = dats.main.humidity + "%";
        windSpeed.innerText = dats.wind.speed + "km/h";


    }

}


