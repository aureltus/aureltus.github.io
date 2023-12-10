function switchLine() {
  const line = document.querySelectorAll(".line");

  //enable or disable animation (alterne current and forecast)
  line.forEach((element) => {
    element.classList.toggle("anime");
  });

  setTimeout(() => {
    //visible or hidden element (alterne current and forecast)
    line.forEach((element) => {
      element.classList.toggle("displayNone");
    });
  }, 500);
}
