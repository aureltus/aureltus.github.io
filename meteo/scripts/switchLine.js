function switchLine(index) {
  const switchLineNow = document.querySelectorAll(".switchLineNow");
  const switchLineForecast = document.querySelectorAll(".switchLineForcast");

  if (index == 1) {
    //translation vers le bas et ajout de class(donnees)
    switchLineNow.forEach((element) => {
      element.classList.add("anime");
    });

    //translation vers le haut et retrait de class(prevision)
    switchLineForecast.forEach((element) => {
      element.classList.remove("anime");
    });

    setTimeout(() => {
      //desactive les donnees meteo
      switchLineNow.forEach((element) => {
        element.classList.add("displayNone");
      });

      //active les previsions
      switchLineForecast.forEach((element) => {
        element.classList.add("displayBlock");
      });
    }, 500);
  }
  if (index == 2) {
    //translation vers le haut et retrait de class(donnees)
    switchLineNow.forEach((element) => {
      element.classList.remove("anime");
    });

    //translation vers le bas et ajout de class(prevision)
    switchLineForecast.forEach((element) => {
      element.classList.add("anime");
    });

    setTimeout(() => {
      //desactive les previsions
      switchLineForecast.forEach((element) => {
        element.classList.remove("displayBlock");
      });

      //active les donnees meteo
      switchLineNow.forEach((element) => {
        element.classList.remove("displayNone");
      });
    }, 500);
  }
}
