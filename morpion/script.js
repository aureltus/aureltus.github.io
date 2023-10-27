import { personnages } from "./personnages.js";

const joueurTest = document.querySelector(".joueur_en_cours");
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

let jo1; //= new Joueur("Gérard", "J1", personnages[0]);
let jo2 = new Joueur("Martin", "J2", personnages[1]);

/*class Personnage {
  constructor(nom, age, avatar, description, victoire, signe, phrase) {
    this.nom = nom;
    this.age = age;
    this.avatar = avatar;
    this.description = description;
    this.victoire = victoire;
    this.signe = signe;
    this.phrase = phrase;
  }
}*/

let joueurEnCours;
let signeJoueurEnCours;

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
  jo1 = new Joueur(nom, "J1", personnages[i]);

  const selectPersonnage = document.getElementById("personnage");
  const option = selectPersonnage.options[i];
  if (!option.disabled) {
    option.disabled = true;
  }

  // Faites quelque chose avec le nom et le personnage (par exemple, les enregistrer ou les utiliser dans votre jeu)

  document.getElementById("nom").value = "";
  document.getElementById("personnage").value = "";
  document.getElementById("h2Joueur").innerHTML = "2";
  j1.style.display = "none";
  j2.style.display = "block";
}

function soumettreJ2() {
  const nom = document.getElementById("nom").value;
  const i = document.getElementById("personnage").value;
  if (nom === "" || i === "") {
    return;
  }
  jo2 = new Joueur(nom, "J2", personnages[i]);

  const selectPersonnage = document.getElementById("personnage");
  const option = selectPersonnage.options[i];

  playerDom();
  joueurEnCours = jo1.nomJoueur;
  signeJoueurEnCours = jo1.personnage.signe;
  joueurTest.innerHTML = joueurEnCours;

  // Fermez la "popup"
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

for (let i = 0; i < caseGrille.length; i++) {
  caseGrille[i].addEventListener("click", () => {
    if (
      caseGrille[i].innerText === jo1.personnage.signe ||
      caseGrille[i].innerText === jo2.personnage.signe
    ) {
      return;
    } else {
      caseGrille[i].innerText = signeJoueurEnCours;
    }
    checkWin();
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
        signeJoueurEnCours === jo1.personnage.signe ? jo1.score++ : jo2.score++
      }`;
      player1[7].innerHTML = `Score: ${jo1.score}`;
      player2[7].innerHTML = `Score: ${jo2.score}`;
      caseGrille.forEach((element) => {
        element.innerText = "";
      });
      console.log("joueur 1 :", jo1.score, "joueur 2:", jo2.score);
      return true;
    }
  }
  // Si aucune combinaison gagnante n'est trouvée, la fonction renvoie false pour indiquer qu'il n'y a pas de victoire.
  return false;
}

function changePlayer() {
  signeJoueurEnCours =
    signeJoueurEnCours === jo1.personnage.signe
      ? jo2.personnage.signe
      : jo1.personnage.signe;
  joueurEnCours =
    joueurEnCours === jo1.nomJoueur ? jo2.nomJoueur : jo1.nomJoueur;
  joueurTest.innerHTML = joueurEnCours;
}

function playerDom() {
  player1[0].innerHTML = `${jo1.nomJoueur}`;
  player1[1].src = `${jo1.personnage.avatar}`;
  player1[2].innerHTML = `${jo1.personnage.nom}`;
  player1[3].innerHTML = `${jo1.personnage.age} ans`;
  player1[4].innerHTML = `${jo1.personnage.description}`;
  player1[5].innerHTML = `${jo1.personnage.phrase}`;
  player1[6].innerHTML = `Signe: ${jo1.personnage.signe}`;
  player1[7].innerHTML = `Score: ${jo1.score}`;

  player2[0].innerHTML = `${jo2.nomJoueur}`;
  player2[1].src = `${jo2.personnage.avatar}`;
  player2[2].innerHTML = `${jo2.personnage.nom}`;
  player2[3].innerHTML = `${jo2.personnage.age} ans`;
  player2[4].innerHTML = `${jo2.personnage.description}`;
  player2[5].innerHTML = `${jo2.personnage.phrase}`;
  player2[6].innerHTML = `Signe: ${jo2.personnage.signe}`;
  player2[7].innerHTML = `Score: ${jo2.score}`;
}
