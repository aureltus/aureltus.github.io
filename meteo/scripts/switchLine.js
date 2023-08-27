function switchLine(i) {
    
    const index = i;
    const feels_like = document.querySelector(".line_feels");
    const pressure = document.querySelector(".line_pressure");
    const humidity = document.querySelector(".line_humidity");
    const sun = document.querySelector(".line_sun");
    const wind = document.querySelector(".line_wind");

    const line3h = document.querySelector(".line_3h");
    const line6h = document.querySelector(".line_6h");
    const line9h = document.querySelector(".line_9h");
    const line12h = document.querySelector(".line_12h");
    const line15h = document.querySelector(".line_15h");

    if (index == 1) {

        //translation vers le bas et ajout de class(donnees)
        feels_like.style.transform += `translateY(-25px)`;
        feels_like.classList.add("anime");
        pressure.style.transform += `translateY(-25px)`;
        pressure.classList.add("anime");
        humidity.style.transform += `translateY(-25px)`;
        humidity.classList.add("anime");
        sun.style.transform += `translateY(-25px)`;
        sun.classList.add("anime");
        wind.style.transform += `translateY(-25px)`;
        wind.classList.add("anime");

        //translation vers le haut et retrait de class(prevision)
        line3h.style.transform += `translateY(25px)`;
        line3h.classList.remove("anime");
        line6h.style.transform += `translateY(25px)`;
        line6h.classList.remove("anime");
        line9h.style.transform += `translateY(25px)`;
        line9h.classList.remove("anime");
        line12h.style.transform += `translateY(25px)`;
        line12h.classList.remove("anime");
        line15h.style.transform += `translateY(25px)`;
        line15h.classList.remove("anime");

        setTimeout(() => {

            //décalage pour remmettre le bon emplacement
            line3h.style.transform += `translateY(-25px)`;
            line6h.style.transform += `translateY(-25px)`;
            line9h.style.transform += `translateY(-25px)`;
            line12h.style.transform += `translateY(-25px)`;
            line15h.style.transform += `translateY(-25px)`;

        //desactive les donnees meteo
        feels_like.style.display = "none";
        pressure.style.display = "none";
        humidity.style.display = "none";
        sun.style.display = "none";
        wind.style.display = "none";

        //active les previsions
        line3h.style.display = "block";
        line6h.style.display = "block";
        line9h.style.display = "block";
        line12h.style.display = "block";
        line15h.style.display = "block";}, 500)
    }
    if (index == 2) {

        //translation vers le haut et retrait de class(donnees)
        feels_like.style.transform += `translateY(25px)`;
        feels_like.classList.remove("anime");
        pressure.style.transform += `translateY(25px)`;
        pressure.classList.remove("anime");
        humidity.style.transform += `translateY(25px)`;
        humidity.classList.remove("anime");
        sun.style.transform += `translateY(25px)`;
        sun.classList.remove("anime");
        wind.style.transform += `translateY(25px)`;
        wind.classList.remove("anime");

        //translation vers le bas et ajout de class(prevision)
        line3h.style.transform += `translateY(-25px)`;
        line3h.classList.add("anime");
        line6h.style.transform += `translateY(-25px)`;
        line6h.classList.add("anime");
        line9h.style.transform += `translateY(-25px)`;
        line9h.classList.add("anime");
        line12h.style.transform += `translateY(-25px)`;
        line12h.classList.add("anime");
        line15h.style.transform += `translateY(-25px)`;
        line15h.classList.add("anime");

        setTimeout(() => {

            //décalage pour remmettre le bon emplacement
            line3h.style.transform += `translateY(25px)`;
            line6h.style.transform += `translateY(25px)`;
            line9h.style.transform += `translateY(25px)`;
            line12h.style.transform += `translateY(25px)`;
            line15h.style.transform += `translateY(25px)`;

        //desactive les previsions
        line3h.style.display = "none";
        line6h.style.display = "none";
        line9h.style.display = "none";
        line12h.style.display = "none";
        line15h.style.display = "none";

        //active les donnees meteo
        feels_like.style.display = "block";
        pressure.style.display = "block";
        humidity.style.display = "block";
        sun.style.display = "block";
        wind.style.display = "flex";}, 500)
    }

}