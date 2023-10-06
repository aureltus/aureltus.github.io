// recuperation des donnes conf.json (utilisation en ligne)
function fetchCity() {
  fetch("conf.json")
    .then((res) => res.json())
    .then((result) => cityJson(result))
    .catch(() => {
      textError("erreur recuperation de la ville sur le json");
    });
}

// recuperation des donnees sur un serveur (utilisation en local)
function fetchCityServer() {
  fetch("https://aureltus.github.io/meteo/conf.json")
    .then((response) => response.json())
    .then((result) => cityJson(result))
    .catch(() => {
      textError("erreur recuperation de la ville sur le serveur");
    });
}

// recuperation de la ville du json
function cityJson(info) {
  const city = info.ville;
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
  fetchData(); //lance la demande api
}

function fetchCityServerPrev() {
  fetch("https://aureltus.github.io/meteo/conf.json")
    .then((response) => response.json())
    .then((result) => prevision(result))
    .catch(() => {
      textError("erreur recuperation de la ville sur le serveur");
    });
}

function prevision(info) {
  const city = info.ville;
  api2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
  fetchData2(); //lance la demande api
}
