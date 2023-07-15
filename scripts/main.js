let apiKey = "bb0fe6f6fb5c73b69aca71deaa0c5da2"
let api

setTimeout(()=> fetchCityServerPrev(),10000)
//fetchCityServerPrev()
fetchCityServer()


//setTimeout(()=> prevision(),10000)
//pour actualiser les donnees toutes les heures (3600000)
setInterval(() => {fetchCityServer()}, 3600000); //60000 pour toutes les minutes



let counter = 1
setInterval(()=> {if (counter++ % 2) {
     fetchData(); // Call Function 1
 } else {
     fetchData2(); // Call Function 2
 }
 },20000);




