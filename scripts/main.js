let apiKey = "bb0fe6f6fb5c73b69aca71deaa0c5da2"
let api
fetchCity2()
//fetchData();
//pour actualiser les donnees toutes les heures (3600000)
setInterval(() => {fetchCity2()}, 3600000); //60000 pour toutes les minutes

function ombre (){
const lever = 1687839474 
const coucher = 1687895549
const sous = (coucher - lever)/12
let time = Math.floor(Date.now() / 1000)
time = 1687839475
console.log(time)
if(time <= lever){console.log("choix 0")}
else if(time >= lever && time < sous + lever){console.log("c 1")}
else if(time >= sous + lever && time < 2*sous + lever){console.log("choix 1")}
else if(time >= 2*sous + lever && time < 3*sous + lever){console.log("choix 2")}
else if(time >= 3*sous + lever && time < 4*sous + lever){console.log("choix 3")}
else if(time >= coucher){console.log("nuit")}
console.log(sous)

for (let i = 0; i < 12; i++) {
    if(time < lever){console.log("aube");break}
else if(time >= i*sous + lever && time < (i+1)*sous + lever){console.log("choix " + i)}
else if(time >= coucher){console.log("nuit"); break;}
console.log(i)
  }

}

ombre()