function fetchData2() {
  fetch(api2)
    .catch(() => {
      textError("Problème avec la requête api (forecast)");
    })
    .then((res) => res.json())
    .then((result) => weatherDetails2(result));
}

function weatherDetails2(info) {
  //creation des constantes avec le json
  const temp = info.list[0].main.temp;
  const temp2 = info.list[1].main.temp;
  const temp3 = info.list[2].main.temp;
  const temp4 = info.list[3].main.temp;
  const temp5 = info.list[4].main.temp;
  const { icon, description } = info.list[0].weather[0];
  const icon2 = info.list[1].weather[0].icon;
  const icon3 = info.list[2].weather[0].icon;
  const icon4 = info.list[3].weather[0].icon;
  const icon5 = info.list[4].weather[0].icon;
  const description2 = info.list[1].weather[0].description;
  const description3 = info.list[2].weather[0].description;
  const description4 = info.list[3].weather[0].description;
  const description5 = info.list[4].weather[0].description;
  const dt = info.list[0].dt;
  const dt2 = info.list[1].dt;
  const dt3 = info.list[2].dt;
  const dt4 = info.list[3].dt;
  const dt5 = info.list[4].dt;

  //line feels - prevision dans 3h
  const feels_likeEdit = document.querySelector(".temp_3h");
  feels_likeEdit.innerText = `${Math.round(temp)} °C`;
  const iconEdit = document.querySelector(".t1");
  iconEdit.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const textEdit = document.querySelector(".line_3h p");
  textEdit.innerText = `${convertDate(dt)} ${description}`;

  //line pressure - prevision dans 6h
  const pressureEdit = document.querySelector(".temp_6h");
  pressureEdit.innerText = `${Math.round(temp2)} °C`;
  const iconEdit2 = document.querySelector(".t2");
  iconEdit2.src = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
  const textEdit2 = document.querySelector(".line_6h p");
  textEdit2.innerText = `${convertDate(dt2)} ${description2}`;

  //line humidity - prevision dans 9h
  const humidityEdit = document.querySelector(".temp_9h");
  humidityEdit.innerText = `${Math.round(temp3)} °C`;
  const iconEdit3 = document.querySelector(".t3");
  iconEdit3.src = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
  const textEdit3 = document.querySelector(".line_9h p");
  textEdit3.innerText = `${convertDate(dt3)} ${description3}`;

  //line sun - prevision dans 12h
  const sunEdit = document.querySelector(".temp_12h");
  sunEdit.innerText = `${Math.round(temp4)} °C`;
  const iconEdit4 = document.querySelector(".t4");
  iconEdit4.src = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
  const textEdit4 = document.querySelector(".line_12h p");
  textEdit4.innerText = `${convertDate(dt4)} ${description4}`;

  //ligne wind - prevision dans 15h
  const windEdit = document.querySelector(".temp_15h");
  windEdit.innerText = `${Math.round(temp5)} °C`;
  const iconEdit5 = document.querySelector(".t5");
  iconEdit5.src = `https://openweathermap.org/img/wn/${icon5}@2x.png`;
  const textEdit5 = document.querySelector(".line_15h p");
  textEdit5.innerText = `${convertDate(dt5)} ${description5}`;
}
