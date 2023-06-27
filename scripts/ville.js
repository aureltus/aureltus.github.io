  // récuperation conf.json 
  function fetchCity() {
    fetch("conf.json")
      .then((res) => res.json())
      .then((result) => cityJson(result))
  }
      function fetchCity2() {
        fetch("https://aureltus.github.io/conf.json")
          .then((res) => res.json())
          .then((result) => cityJson(result))
          
      
  }
// recuperation de la ville dans le json
  function cityJson(info) {
    const city = info.ville;
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
      console.log(city);
      console.log(api);
      fetchData()
}

