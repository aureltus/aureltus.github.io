const box = document.querySelector(".box"),
  blur = document.getElementById("blur"),
  color = document.getElementById("colorShadow"),
  spread = document.getElementById("spread"),
  axeX = document.getElementById("axe-X"),
  axeY = document.getElementById("axe-Y"),
  opacity = document.getElementById("opacity");

const btn = document.querySelector(".btn");
const insetCheckbox = document.querySelector("#inset");

const widthBox = document.getElementById("widthBox"),
  heightBox = document.getElementById("heightBox"),
  borderRadius = document.getElementById("borderRadius"),
  colorBox = document.getElementById("colorShadowBox");

const shadowPreview = document.getElementById("shadowPreview");
const previousShadows = [];

box.style.boxShadow = `${axeX.value}px ${axeY.value}px ${blur.value}px ${spread.value}px ${color.value}`;

color.addEventListener("input", updateShadowPreview);
insetCheckbox.addEventListener("input", updateShadowPreview);
let combinedShadows;

function updateShadowPreview() {
  let opacityAdjusted =
    opacity.value == 1 ? "" : Math.floor(opacity.value * 255).toString(16);
  if (opacityAdjusted.length == 1) {
    opacityAdjusted = 0 + opacityAdjusted;
  }
  /*const*/ shadowStyle = `${insetCheckbox.checked ? "inset" : ""} ${
    axeX.value
  }px ${axeY.value}px ${blur.value}px ${spread.value}px ${
    color.value
  }${opacityAdjusted}`;
  previousShadows.pop(); // Supprimer la dernière ombre pour éviter les doublons
  previousShadows.push(shadowStyle);
  /*const*/ combinedShadows = previousShadows.join(", ");
  shadowPreview.style.boxShadow = combinedShadows;

  copyInput();
}

btn.addEventListener("click", () => {
  previousShadows.push(shadowPreview.style.boxShadow); // Ajouter l'ombre de l'aperçu à la liste des ombres précédentes
  const combinedShadows = previousShadows.join(", ");
  box.style.boxShadow = shadowPreview.style.boxShadow; // Appliquer l'ombre à la boîte
  updatePreviousShadows();
  updateShadowPreview();
});

function copyInput() {
  const elem = document.querySelector(".shadowInput");
  elem.value = combinedShadows;
  elem.focus();
  elem.selectionStart = elem.selectionEnd = input.value.length;
}

function boxSize() {
  box.style.height = `${heightBox.value}px`;
  box.style.width = `${widthBox.value}px`;
  box.style.borderRadius = `${borderRadius.value}px`;
  box.style.backgroundColor = `${colorBox.value}`;
}

colorBox.addEventListener("input", boxSize);

const rangeResults = document.querySelectorAll(".range-result");
rangeResults.forEach(function (rangeResult) {
  const rangeInput = document.querySelector("#" + rangeResult.dataset.input);
  if (rangeInput) {
    rangeResult.value = rangeInput.value;
    rangeInput.addEventListener("input", function () {
      rangeResult.value = this.value;
      boxSize();
      updateShadowPreview();
    });
  }
});

const numResult = document.querySelectorAll(".num-result");
numResult.forEach(function (numResult) {
  const rangeInput = document.querySelector("#" + numResult.dataset.input);
  if (rangeInput) {
    numResult.value = rangeInput.value;
    rangeInput.addEventListener("change", function () {
      if (Number(rangeInput.value) > Number(numResult.max)) {
        rangeInput.value = numResult.max;
      }
      if (Number(rangeInput.value) < Number(numResult.min)) {
        rangeInput.value = numResult.min;
      }
      numResult.value = this.value;
      boxSize();
      updateShadowPreview();
    });
  }
});
const previousShadowsContainer = document.getElementById(
  "previousShadowsContainer"
);

function updatePreviousShadows() {
  previousShadowsContainer.innerHTML = "";

  previousShadows.forEach((shadow, index) => {
    if (index !== previousShadows.length - 1) {
      // Exclure la dernière ombre

      const shadowElement = document.createElement("div");
      shadowElement.classList.add("shadow-item"); // Ajout de la classe CSS
      shadowElement.textContent = `shadow${index + 1}`;
      // utiliser shadow pour avoir la valeur de l'ombre au survole
      shadowElement.title = shadow;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Supprimer";
      deleteButton.classList.add("btn"); // Ajout de la classe CSS

      deleteButton.addEventListener("click", () => {
        previousShadows.splice(index, 1);
        updatePreviousShadows();
        updateShadowPreview();
      });

      shadowElement.appendChild(deleteButton);
      previousShadowsContainer.appendChild(shadowElement);
    }
  });
}
updatePreviousShadows();

const btnCopie = document.getElementById("copie");
btnCopie.addEventListener("click", () => {
  document.getElementById("shadowInput").select();
  document.execCommand("copy");
});
