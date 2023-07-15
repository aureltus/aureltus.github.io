function fetchData2() {

    fetch(api2)
        .catch(() => { textError("Problème avec la requête api"); })
        .then((res) => res.json())
        .then((result) => weatherDetails2(result));
}
function weatherDetails2(info) {

    //creation des constantes avec le json
    const city = info.city.name;
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

    //line ressentie - prevision dans 3h 
    const feels_likeEdit = document.querySelector(".temp-2");
    feels_likeEdit.innerText = `${Math.round(temp)} °C`;
    const iconEdit = document.querySelector(".t1");
    iconEdit.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const textEdit = document.querySelector(".line_feels p");
    textEdit.innerText = `${convertDate(dt)} ${description}`;

    //line pression - prevision dans 6h 
    const pressureEdit = document.querySelector(".pressure");
    pressureEdit.innerText = `${Math.round(temp2)} °C`;
    const iconEdit2 = document.querySelector(".t2");
    iconEdit2.src = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
    const textEdit2 = document.querySelector(".line_pressure p");
    textEdit2.innerText = `${convertDate(dt2)} ${description2}`;

    //line humidite - prevision dans 9h 
    const humidityEdit = document.querySelector(".humidity");
    humidityEdit.innerText = `${Math.round(temp3)} °C`;
    const iconEdit3 = document.querySelector(".t3");
    iconEdit3.src = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
    const textEdit3 = document.querySelector(".line_humidity p");
    textEdit3.innerText = `${convertDate(dt3)} ${description3}`;

    //line soleil - prevision dans 12h
    const sunEdit = document.querySelector(".sun");
    sunEdit.innerText = `${Math.round(temp4)} °C`;
    const iconEdit4 = document.querySelector(".t4");
    iconEdit4.src = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
    const textEdit4 = document.querySelector(".line_sun p");
    textEdit4.innerText = `${convertDate(dt4)} ${description4}`;

    //ligne vent - prevision dans 15h 
    const windEdit = document.querySelector(".wind");
    windEdit.innerText = `${Math.round(temp5)} °C`;
    const windArrow = document.getElementById("windArrow");
    windArrow.style.display = "none";
    const iconEdit5 = document.querySelector(".t5");
    iconEdit5.src = `https://openweathermap.org/img/wn/${icon5}@2x.png`;
    const textEdit5 = document.querySelector(".line_wind p");
    textEdit5.innerText = `${convertDate(dt5)} ${description5}`;

    console.log(city, temp, temp2, temp3, temp4, temp5, icon, icon2, icon3, icon4, icon5);
    console.log(description, dt, description2, dt2, description3, description4, description5);
}
