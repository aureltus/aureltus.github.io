//requete au serveur api
function fetchData() {

    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      .catch(() => {textError("Problème avec la requête api")});
}
//traitement des donnees et affectation
function weatherDetails(info) {

//creation des constantes avec le json
    const city = info.name;
    const country = info.sys.country;
    const { description, id, icon} = info.weather[0];
    const { temp, feels_like, humidity , pressure } = info.main;
    const sunrise = info.sys.sunrise;
    const sunset = info.sys.sunset;
    const {speed, deg} = info.wind;

//affichage des constantes sur la page web 
    //icone
    const iconEdit = document.getElementById("weatherIcon");
    iconEdit.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    //temperature
    const tempEdit = document.querySelector(".temp");
    tempEdit.innerText = `${Math.floor(temp)} °C`;
    //descrition temps
    const descriptionEdit = document.querySelector(".weather");
    descriptionEdit.innerText = description;
    //localisation
    const cityEdit = document.querySelector(".location");
    cityEdit.innerText = `${city}, ${country}`;
    //temperature ressentie
    const feels_likeEdit = document.querySelector(".temp-2");
    feels_likeEdit.innerText = `${Math.floor(feels_like)} °C`;
    //pression
    const pressureEdit = document.querySelector(".pressure");
    pressureEdit.innerText = `${pressure} hPa`;
    //humidite
    const humidityEdit = document.querySelector(".humidity") ;
    humidityEdit.innerText = `${humidity} %`;
    //lever et coucher de soleil
    const sunEdit = document.querySelector(".sun");
    sunEdit.innerText = `${convertirDate(sunrise)} / ${convertirDate(sunset)}`;
    //vitesse du vent et fleche pour le sens du vent
    const windEdit = document.querySelector(".wind");
    windEdit.innerText = `${speed} m/s`;
    const windArrow = document.getElementById("windArrow");
    windArrow.style.transform = `rotate(${deg}deg)`;
    windArrow.style.visibility = "visible";

    //lancement de la fonction avec le parametre id
    wallpaper(id)
    
    ombre(sunrise,sunset)
}
//convertion de sunrise et sunset en date, puis recuperation de l'heure uniquement
function convertirDate(num){

    let unix = num;
    let date = new Date(unix*1000);
    let heures = date.getHours();
    let minutes = date.getMinutes();
    console.log(`${heures}:${minutes}`);
    return `${heures}:${minutes}`;
}
//wallpaper en fonction de l'id climat recu, 
function wallpaper(id) {

    const wallpaper = document.querySelector("body")
    if (id == 800) {
        wallpaper.style.background = "url(images/clear.jpg)" ;
    } else if (id >= 200 && id <= 232) {
        wallpaper.style.background = "url(images/storm.jpg)";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
        wallpaper.style.background = "url(images/rain.jpg)";
    } else if (id >= 600 && id <= 622) {
        wallpaper.style.background = "url(images/snow.jpg)";
    } else if (id >= 701 && id <= 781) {
        wallpaper.style.background = "url(images/haze.jpg)";
    } else if (id >= 801 && id <= 804) {
        wallpaper.style.background = "url(images/cloud.jpg)";
    }
    wallpaper.style.backgroundRepeat = "no-repeat";
    wallpaper.style.backgroundPosition = "center";

}

function textError(message){

    const error = document.querySelector(".error")
    error.style.display = "block"
    error.innerText = message
}

function ombre (sunrise,sunset){

    const jour = (sunset - sunrise)/12
    const time = Math.floor(Date.now() / 1000)//heure actuelle en Unix
    
    // boucle pour divisier la journee en 12 partie
    for (let i = 0; i < 12; i++) {
        if(time + jour/2 < sunrise || time - jour/2 > sunset){moon(0);break}//nuit
        else if(time < sunrise){moon(1);break}//aurore
        else if(time >= sunset){moon(2); break;}//crepuscule
        else if(time >= i*jour + sunrise && time < (i+1)*jour + sunrise){shadow(i*10)}
    }
 }
// ajoute une ombre a weatherIcon en fonction de l'heure
function shadow(i) {

    const pixel = (i-55)
    console.log("valeur A= ",i ,"valeur de B= ",pixel)
    const weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.style.boxShadow = `${pixel}px 25px 8px 5px #16161780`;
}
// ajoute une lueur autour de weatherIcon
  function moon(a) {
      
    const lum = a
    if (lum == 0){b = "#ffffff90"}
    else if(lum == 1){b = "#d76e4590"}
    else if (lum == 2){b = "#5c0a04d9"}    

    const weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.style.boxShadow = `0px 0px 90px 10px ${b}` ;
}
  
