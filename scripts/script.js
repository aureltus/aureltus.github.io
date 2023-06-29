//requete au serveur api
function fetchData() {

    fetch(api)
        .catch(() => {textError("Problème avec la requête api")})
        .then((res) => res.json())
        .then((result) => weatherDetails(result))
      
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
    sunEdit.innerText = `${convertDate(sunrise)} / ${convertDate(sunset)}`;
    
    //vitesse du vent et fleche pour le sens du vent
    const windEdit = document.querySelector(".wind");
    windEdit.innerText = `${speed} m/s`;
    const windArrow = document.getElementById("windArrow");
    windArrow.style.transform = `rotate(${deg}deg)`;
    windArrow.style.visibility = "visible";

    //lancement de la fonction avec le parametre id
    wallpaper(id)
    calcShadow(sunrise,sunset)
}

//convertion de sunrise et sunset en date, puis recuperation de l'heure uniquement
function convertDate(num){

    let unix = num;
    let date = new Date(unix*1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}

//wallpaper en fonction de l'id climat recu, 
function wallpaper(id) {

    const wallpaper = document.querySelector("body");
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

    const error = document.querySelector(".error");
    error.style.display = "block";
    error.innerText = message;
}

function calcShadow (sunrise,sunset){

    const day = (sunset - sunrise)/12;
    const time = Math.floor(Date.now() / 1000); //heure actuelle en Unix

    //boucle pour divisier la journee en 12 parties
    for (let i = 0; i < 12; i++) {
        if(time + day/2 < sunrise || time - day/2 > sunset){moon(0);break}//nuit
        else if(time < sunrise){moon(1);break}//aurore
        else if(time >= sunset){moon(2); break;}//crepuscule
        else if(time >= i*day + sunrise && time < (i+1)*day + sunrise){shadow(i*10)}//journee
    }
 }

//ajoute une ombre a weatherIcon en fonction de l'heure
function shadow(i) {

    const pixel = (i-55);
    const weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.style.boxShadow = `${pixel}px 25px 8px 5px #16161780`;
}

// ajoute une lueur autour de weatherIcon
  function moon(index) {    
    
    const lum = index;
    if (lum == 0){color = "#ffffff90"} //nuit
    else if(lum == 1){color = "#d76e4590"} //aurore
    else if (lum == 2){color = "#5c0a04d9"} //crepuscule    

    const weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.style.boxShadow = `0px 0px 90px 10px ${color}`;
    const night = document.querySelector("body");
    night.style.background = "url(images/night.jpg)";
}
  