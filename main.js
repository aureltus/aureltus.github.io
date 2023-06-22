let api = `https://api.openweathermap.org/data/2.5/weather?q=bordeaux&units=metric&appid=bb0fe6f6fb5c73b69aca71deaa0c5da2&lang=fr`

function fetchData() {
    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      
  }
  
  function fetchVille() {
    fetch("conf.json")
      .then((res) => res.json())
      .then((result) => villeDetails(result))
      
  }

  function villeDetails(info) {
    const city = info.ville;
      console.log(city)
}
  function weatherDetails(info) {

      const city = info.name;
      const country = info.sys.country;
      const { description, id , icon} = info.weather[0];
      const { temp, feels_like, humidity , pressure } = info.main;
      const speed = info.wind;
        console.log("vitesse vent: ",speed)
      console.log("temperature", temp)
    console.log("description: ", description ,"id: ",id,"feels like: ", feels_like)
console.log("pression: ",pressure,"ville: ", city , country, "icon: ",icon)
let temp5 = document.querySelector(".deg")
temp5.innerText = Math.floor(temp)
}
     // fetchData()
     function test (){ fetch("conf.json")
     .then(r => r.text())
     .then(body => console.log(body))}
      fetchVille()