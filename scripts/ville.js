// recuperation des donnes conf.json (utilisation en ligne)
function fetchCity() {
  fetch("conf.json")
    .then((res) => res.json())
    .then((result) => cityJson(result))
    .catch(() => {textError("erreur recuperation de la ville sur le json")})
}

// recuperation des donnees sur un serveur (utilisation en local)
function fetchCity2() {
  fetch("https://aureltus.github.io/conf.json")
    .then(response => response.json()) 
    .then(result => cityJson(result))
    .catch(() => {textError("erreur recuperation de la ville sur le serveur")}) 
          
      
  }

// recuperation de la ville du json
function cityJson(info) {
  const city = info.ville;
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
  fetchData()//lance la demande api
}
