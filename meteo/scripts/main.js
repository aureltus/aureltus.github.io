let apiKey = "bb0fe6f6fb5c73b69aca71deaa0c5da2";
let api;

setTimeout(() => fetchCityServerPrev(), 1000);
fetchCityServer();

//pour actualiser les donnees toutes les heures (3600000)
setInterval(() => {
  fetchCityServer();
}, 3600000); //60000 pour toutes les minutes
setInterval(() => {
  fetchCityServerPrev();
}, 3600000);

let counter = 1;
setInterval(() => {
  if (counter++ % 2) {console.log("1er ",counter);
    switchLine(1); // affiche les donnees actuelles
  } else {console.log("2eme ",counter);
    switchLine(2); // affiche les previsions
  }
}, 10000);
