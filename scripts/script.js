function fetchData() {

    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      
    }

function weatherDetails(info) {

    const city = info.name;
    const country = info.sys.country;
    let { description, id, icon} = info.weather[0];
    const { temp, feels_like, humidity , pressure } = info.main;
    const sunrise = info.sys.sunrise;
    const sunset = info.sys.sunset;
    const {speed, deg} = info.wind;

    console.log("lever: ", sunrise , "coucher: ", sunset)
    console.log("vitesse vent: ",speed, "degré: ",deg)
    console.log("temperature", temp, "humiditée: ", humidity)
    console.log("description: ", description ,"id: ", id,"feels like: ", feels_like)
    console.log("pression: ",pressure,"ville: ", city , country, "icon: ",icon)

    const iconEdit = document.querySelector(".weather-part1 img");
    iconEdit.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const tempEdit = document.querySelector(".temp");
    tempEdit.innerText = `${Math.floor(temp)} °C`;

    const descriptionEdit = document.querySelector(".weather");
    descriptionEdit.innerText = description;

    const cityEdit = document.querySelector(".location");
    cityEdit.innerText = `${city}, ${country}`;

    const feels_likeEdit = document.querySelector(".temp-2");
    feels_likeEdit.innerText = `${Math.floor(feels_like)} °C`;

    const pressureEdit = document.querySelector(".pressure");
    pressureEdit.innerText = `${pressure} hPa`;

    const humidityEdit = document.querySelector(".humidity") ;
    humidityEdit.innerText = `${humidity} %`;

    const sunEdit = document.querySelector(".sun");
    sunEdit.innerText = `${convertirDate(sunrise)} / ${convertirDate(sunset)}`;

    const windEdit = document.querySelector(".wind");
    windEdit.innerText = `${speed} m/s`;
    const windArrow = document.getElementById("windArrow");
    windArrow.style.transform = `rotate(${deg}deg)`;
    windArrow.style.visibility = "visible";

    //id = 505
    wallpaper(id)

    }

function convertirDate(num){

    let unix = num;
    let date = new Date(unix*1000);
    let heures = date.getHours();
    let minutes = date.getMinutes();
    console.log(`${heures}:${minutes}`);
    return `${heures}:${minutes}`;
    }

function wallpaper(id) {
    const fond = document.querySelector("body")
    if (id == 800) {
        fond.style.background = "url(images/clear.jpg)" ;
    } else if (id >= 200 && id <= 232) {
        fond.style.background = "url(images/storm.jpg)";
    } else if (id >= 600 && id <= 622) {
        fond.style.background = "url(images/snow.jpg)";
    } else if (id >= 701 && id <= 781) {
        fond.style.background = "url(images/haze.jpg)";
    } else if (id >= 801 && id <= 804) {
        fond.style.background = "url(images/cloud.jpg)";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
        fond.style.background = "url(images/rain.jpg)";
    }
    fond.style.backgroundRepeat = "no-repeat";
    fond.style.backgroundSize = "cover";
    
      }