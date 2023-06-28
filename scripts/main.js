let apiKey = "bb0fe6f6fb5c73b69aca71deaa0c5da2"
let api
fetchCity()
//pour actualiser les donnees toutes les heures (3600000)
setInterval(() => {fetchCity()}, 3600000); //60000 pour toutes les minutes
