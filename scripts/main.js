let api = `https://api.openweathermap.org/data/2.5/weather?q=bordeaux&units=metric&appid=bb0fe6f6fb5c73b69aca71deaa0c5da2&lang=fr`
//recuperation donnees api
function fetchData() {
    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      
  }

// attribution des données dans des constantes
  function weatherDetails(info) {

      const city = info.name;
      const country = info.sys.country;
      const { description, id , icon} = info.weather[0];
      const { temp, feels_like, humidity , pressure } = info.main;
      const {speed, deg} = info.wind;
      const sunrise = info.sys.sunrise;
      const sunset = info.sys.sunset;

      console.log("lever: ", sunrise , "coucher: ", sunset)
      console.log("vitesse vent: ",speed, "degré: ",deg)
      console.log("temperature", temp, "humiditée: ", humidity)
      console.log("description: ", description ,"id: ",id,"feels like: ", feels_like)
      console.log("pression: ",pressure,"ville: ", city , country, "icon: ",icon)
    const temp5 = document.querySelector(".numb");
    temp5.innerText = Math.floor(temp);
    const ville5 = document.querySelector(".location span");
    ville5.innerText = `${city}, ${country}`;
    const humidity5 = document.querySelector(".test") ;
    humidity5.innerText = humidity + " %";
    const weather5 = document.querySelector(".weather");
    weather5.innerText = description;
    const feels_like5 = document.querySelector(".numb-2");
    feels_like5.innerText = Math.floor(feels_like);
    const sun5 = document.querySelector(".sun");
    sun5.innerText = `${convertirDate(sunrise)} / ${convertirDate(sunset)}`
   const wind5 = document.querySelector(".vent2");
   wind5.innerText = `${speed} m/s`;
   const hhe5 = document.getElementById("directionVent");
   hhe5.style.transform = `rotate(${deg}deg)`;
   hhe5.style.visibility = "visible";
   const pressure5 = document.querySelector(".pres");
   pressure5.innerText = pressure;
   const icon5 = document.querySelector(".weather-part img")
   icon5.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
     fetchData()
     

      // pour recuperer les donnees du conf.json
     // fetchVille()
     setInterval(() => {
      fetchData()
     console.log("test interval")
    }, 1000000)
function convertirDate(num){
    let unix = num;
let date = new Date(unix*1000);
let heures = date.getHours();
let minutes = date.getMinutes()
console.log(`${heures}:${minutes}`)
return `${heures}:${minutes}`}