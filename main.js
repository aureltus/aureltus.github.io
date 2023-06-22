let api = `https://api.openweathermap.org/data/2.5/weather?q=bordeaux&units=metric&appid=bb0fe6f6fb5c73b69aca71deaa0c5da2&lang=fr`

function fetchData() {
    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      
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
      function test (){const reponse = fetch("conf.json");
      const villeg = reponse.ville
      const {main,description} = reponse.weather;
      console.log(main , description);
      console.log(villeg)}
      test()
