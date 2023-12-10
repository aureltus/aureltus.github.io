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

setInterval(() => {
  switchLine(); //switch entre prevision et meteo actuelle
}, 10000);
