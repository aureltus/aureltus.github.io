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
        feels_like.style.display = "none";
        pressure.style.display = "none";
        humidity.style.display = "none";
        sun.style.display = "none";
        wind.style.display = "none";

        line3h.style.display = "block";
        line6h.style.display = "block";
        line9h.style.display = "block";
        line12h.style.display = "block";
        line15h.style.display = "block";
    }
    if (index == 2) {

        line3h.style.display = "none";
        line6h.style.display = "none";
        line9h.style.display = "none";
        line12h.style.display = "none";
        line15h.style.display = "none";

        feels_like.style.display = "block";
        pressure.style.display = "block";
        humidity.style.display = "block";
        sun.style.display = "block";
        wind.style.display = "flex";
    }

}