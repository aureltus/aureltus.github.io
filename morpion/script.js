import { personnages } from "./personnages.js";

const joueurAnnonce = document.querySelector(".joueur_en_cours");
const caseGrille = document.querySelectorAll(".case");
const player1 = document.querySelectorAll(".player1");
const player2 = document.querySelectorAll(".player2");
const j1 = document.getElementById("soumettre");
const j2 = document.getElementById("soumettre2");

class Joueur {
  constructor(nomJoueur, joueur, personnage) {
    this.nomJoueur = nomJoueur;
    this.joueur = joueur;
    this.personnage = personnage;
  }
  score = 0;
}

let resetIsRun = false;
let Joueur1;
let Joueur2;
let joueurEnCours;
let signeJoueurEnCours;
let joueurIcon;

ouvrirPopup();

j1.addEventListener("click", soumettre);
j2.addEventListener("click", soumettreJ2);

function ouvrirPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

function soumettre() {
  const nom = document.getElementById("nom").value;
  const i = document.getElementById("personnage").value;
  if (nom === "" || i === "") {
    return;
  }
  Joueur1 = new Joueur(nom, "J1", personnages[i]);

  const selectPersonnage = document.getElementById("personnage");
  const option = selectPersonnage.options[i];
  if (!option.disabled) {
    option.disabled = true;
  }

  // Faites quelque chose avec le nom et le personnage (par exemple, les enregistrer ou les utiliser dans votre jeu)

  document.getElementById("nom").value = "J2";
  document.getElementById("personnage").value = `${
    Number(i) >= i.length ? Number(i) - 1 : Number(i) + 1
  }`;
  document.getElementById("h2Joueur").innerHTML = "2";
  j1.style.display = "none";
  j2.style.display = "block";
}

function soumettreJ2() {
  const nom = document.getElementById("nom");
  const i = document.getElementById("personnage").value;
  if (nom.value === "" || i === "") {
    return;
  } else if (nom.value === Joueur1.nomJoueur) {
    nom.value += "²";
  }
  Joueur2 = new Joueur(nom.value, "J2", personnages[i]);

  const selectPersonnage = document.getElementById("personnage");
  const option = selectPersonnage.options[i];

  playerDom();
  joueurEnCours = Joueur1.nomJoueur;
  signeJoueurEnCours = Joueur1.personnage.signe;
  joueurAnnonce.innerHTML = joueurEnCours;
  joueurIcon = Joueur1.personnage.avatar;

  // Fermez la "popup"
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

for (let i = 0; i < caseGrille.length; i++) {
  caseGrille[i].addEventListener("click", () => {
    if (resetIsRun === true) {
      return;
    } else if (
      caseGrille[i].innerText === Joueur1.personnage.signe ||
      caseGrille[i].innerText === Joueur2.personnage.signe
    ) {
      return;
    } else {
      const spanElement = document.createElement("span");
      caseGrille[i].appendChild(spanElement);
      const imgElement = document.createElement("img");
      caseGrille[i].appendChild(imgElement);
      spanElement.innerText = signeJoueurEnCours;
      spanElement.classList.add("signe");
      imgElement.classList.add("pion");

      imgElement.src = joueurIcon;
    }
    checkWin();
    checkNull();
    changePlayer();
  });
}

function checkWin() {
  // Création d'un tableau appelé "lignesGagnantes" qui répertorie les combinaisons gagnantes sous forme d'indices de tableau.
  const lignesGagnantes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Utilisation d'une boucle for...of pour parcourir les éléments du tableau "lignesGagnantes".
  for (const ligne of lignesGagnantes) {
    // Décomposition de l'indice du tableau "ligne" en trois variables a, b et c.
    const [a, b, c] = ligne;

    // Vérification si les cases correspondantes du tableau "caseGrille" contiennent le symbole du joueur en cours.
    if (
      caseGrille[a].innerText === signeJoueurEnCours &&
      caseGrille[b].innerText === signeJoueurEnCours &&
      caseGrille[c].innerText === signeJoueurEnCours
    ) {
      // Si les trois cases de la ligne sont marquées par le joueur en cours, cela signifie que le joueur a gagné.
      `${
        signeJoueurEnCours === Joueur1.personnage.signe
          ? Joueur1.score++
          : Joueur2.score++
      }`;
      player1[6].innerHTML = `Score: ${Joueur1.score}`;
      player2[6].innerHTML = `Score: ${Joueur2.score}`;
      popColor(caseGrille[a], caseGrille[b], caseGrille[c]);
      victory();

      setTimeout(() => resetGrille(), 3000);
      console.log("joueur 1 :", Joueur1.score, "joueur 2:", Joueur2.score);
      return true;
    }
  }
  // Si aucune combinaison gagnante n'est trouvée, la fonction renvoie false pour indiquer qu'il n'y a pas de victoire.
  return false;
}

function popColor(a, b, c) {
  resetIsRun = true;
  a.classList.add("pop");
  b.classList.add("pop");
  c.classList.add("pop");
  setTimeout(
    () => (
      (resetIsRun = false),
      a.classList.remove("pop"),
      b.classList.remove("pop"),
      c.classList.remove("pop")
    ),
    3000
  );
}

function popReduce() {
  resetIsRun = true;
  caseGrille.forEach((element) => {
    element.classList.add("popReduce");
  });
  setTimeout(
    () => (
      (resetIsRun = false),
      caseGrille.forEach((element) => {
        element.classList.remove("popReduce");
      })
    ),
    3000
  );
}

function checkNull() {
  if (resetIsRun) {
    return;
  }
  let auMoinsUneCaseEstVide = false;
  caseGrille.forEach((element) => {
    const contenu = element.textContent.trim(); // Utilisez trim() pour supprimer les espaces vides éventuels autour du contenu.

    if (contenu === "") {
      auMoinsUneCaseEstVide = true;
    }
  });

  if (!auMoinsUneCaseEstVide) {
    popReduce();
    victory(1);
    setTimeout(() => resetGrille(), 3000);
  }
}

function changePlayer() {
  if (joueurEnCours === Joueur1.nomJoueur) {
    joueurEnCours = Joueur2.nomJoueur;
    signeJoueurEnCours = Joueur2.personnage.signe;
    joueurIcon = Joueur2.personnage.avatar;
  } else {
    joueurEnCours = Joueur1.nomJoueur;
    signeJoueurEnCours = Joueur1.personnage.signe;
    joueurIcon = Joueur1.personnage.avatar;
  }
  joueurAnnonce.innerHTML = joueurEnCours;
}

function resetGrille() {
  caseGrille.forEach((element) => {
    element.innerText = "";
    element.removeChild;
  });
}

function playerDom() {
  player1[0].innerHTML = `${Joueur1.nomJoueur}`;
  player1[1].src = `${Joueur1.personnage.avatar}`;
  player1[2].innerHTML = `${Joueur1.personnage.nom}`;
  player1[3].innerHTML = `${Joueur1.personnage.age} ans`;
  player1[4].innerHTML = `${Joueur1.personnage.description}`;
  player1[5].innerHTML = `${Joueur1.personnage.phrase}`;
  player1[6].innerHTML = `Score: ${Joueur1.score}`;

  player2[0].innerHTML = `${Joueur2.nomJoueur}`;
  player2[1].src = `${Joueur2.personnage.avatar}`;
  player2[2].innerHTML = `${Joueur2.personnage.nom}`;
  player2[3].innerHTML = `${Joueur2.personnage.age} ans`;
  player2[4].innerHTML = `${Joueur2.personnage.description}`;
  player2[5].innerHTML = `${Joueur2.personnage.phrase}`;
  player2[6].innerHTML = `Score: ${Joueur2.score}`;
}

function victory(a) {
  const visible = document.querySelector(".isFinish");
  const avatar = document.getElementById("icon");
  const text = document.getElementById("vic");
  const name = document.getElementById("namePerso");
  if (a === 1) {
    avatar.src = "./avatar/mj.jpg";
    name.innerText = `MJ :`;
    text.innerText = "Aucun des deux joueurs n'a réussi à prendre l'avantage";
  } else {
    if (joueurEnCours === Joueur1.nomJoueur) {
      avatar.src = `${Joueur1.personnage.avatar}`;
      name.innerText = `${Joueur1.personnage.nom} :`;
      text.innerText = Joueur1.personnage.victoire;
    } else {
      avatar.src = `${Joueur2.personnage.avatar}`;
      name.innerText = `${Joueur2.personnage.nom} :`;
      text.innerText = Joueur2.personnage.victoire;
    }
  }
  visible.style.display = "flex";
  setTimeout(() => (visible.style.display = "none"), 3000);
}
