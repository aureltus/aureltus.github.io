  // récuperation conf.json 
  function fetchVille() {
    fetch("conf.json")
      .then((res) => res.json())
      .then((result) => villeJson(result))
  }
      function fetchVille2() {
        fetch("https://aureltus.github.io/conf.json")
          .then((res) => res.json())
          .then((result) => villeJson(result))
          
      
  }
// recuperation de la ville dans le json
  function villeJson(info) {
    const city = info.ville;
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
      console.log(city);
      console.log(api);
      fetchData()
}

     //function test (){ fetch("conf.json")
     //.then(r => r.text())
     //.then(body => console.log(body))}
