  // récuperation conf.json 
  function fetchVille() {
    fetch("../conf.json")
      .then((res) => res.json())
      .then((result) => villeJson(result))
      
  }
// recuperation de la ville dans le json
  function villeJson(info) {
    const city = info.ville;
      console.log(city)
    return info.ville
}

     //function test (){ fetch("conf.json")
     //.then(r => r.text())
     //.then(body => console.log(body))}
