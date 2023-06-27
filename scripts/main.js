let apiKey = "bb0fe6f6fb5c73b69aca71deaa0c5da2"
let city = "paris"
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;

let test = fetchVille()
console.log(test)

fetchData();

setInterval(() => {fetchData()}, 3600000);
