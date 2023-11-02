/****************************************
 * Initialisation et configuration
 ****************************************/

// Importe les données de personnages depuis un fichier externe
import { personnages } from "./personnages.js";

// Sélectionne des éléments HTML par leur classe ou ID et les stocke dans des variables
const joueurAnnonce = document.querySelector(".joueur_en_cours");
const caseGrille = document.querySelectorAll(".case");
const player1 = document.querySelectorAll(".player1");
const player2 = document.querySelectorAll(".player2");
const j1 = document.getElementById("soumettre");
const j2 = document.getElementById("soumettre2");

// Définit une classe "Joueur" pour représenter les joueurs du jeu
class Joueur {
  constructor(nomJoueur, joueur, personnage) {
    this.nomJoueur = nomJoueur;
    this.joueur = joueur;
    this.personnage = personnage;
  }
  score = 0; // Initialise le score du joueur à zéro
}

// Variables pour suivre l'état du jeu
let resetIsRun = false; // Indique si la réinitialisation est en cours
let Joueur1;
let Joueur2;
let joueurEnCours; // Le joueur actif en cours
let signeJoueurEnCours; // Le symbole du joueur actif en cours
let joueurIcon; // L'avatar du joueur actif en cours

// Affiche une fenêtre pop-up au début du jeu
ouvrirPopup();

/****************************************
 * Gestion des événements
 ****************************************/

// Écoute les clics sur les boutons de soumission des joueurs pour commencer le jeu
j1.addEventListener("click", soumettre);
j2.addEventListener("click", soumettreJ2);

// Boucle pour ajouter des écouteurs de clic aux cases de la grille
for (let i = 0; i < caseGrille.length; i++) {
  caseGrille[i].addEventListener("click", () => {
    if (resetIsRun === true) {
      return; // Si la réinitialisation est en cours, ne fait rien
    } else if (
      caseGrille[i].innerText === Joueur1.personnage.signe ||
      caseGrille[i].innerText === Joueur2.personnage.signe
    ) {
      return; // Si la case est déjà occupée, ne fait rien
    } else {
      // Crée un élément span et une image dans la case
      const spanElement = document.createElement("span");
      caseGrille[i].appendChild(spanElement);
      const imgElement = document.createElement("img");
      caseGrille[i].appendChild(imgElement);
      spanElement.innerText = signeJoueurEnCours;
      spanElement.classList.add("signe");
      imgElement.classList.add("pion");

      imgElement.src = joueurIcon;
    }
    checkWin(); //verifier victoire
    checkNull(); //vérifier égalité
    changePlayer(); //changer joueur
  });
}

/****************************************
 * Fonctions
 ****************************************/

/****************************************
 * Sous-catégorie : Fonctions joueur
 ****************************************/

// Fonction qui génère un nombre aléatoire dans une plage donnée
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour afficher la fenêtre pop-up
function ouvrirPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Fonction appelée lorsqu'on clique sur le bouton de soumission du joueur 1
function soumettre() {
  const nom = document.getElementById("nom").value;
  const i = document.getElementById("personnage").value;
  if (nom === "" || i === "") {
    return; // Si les champs sont vides, ne fait rien
  }
  // Crée une instance de "Joueur" pour le joueur 1
  Joueur1 = new Joueur(nom, "J1", personnages[i]);

  // Désactive l'option de personnage sélectionnée pour éviter la sélection multiple
  const selectPersonnage = document.getElementById("personnage");
  const option = selectPersonnage.options[i];
  if (!option.disabled) {
    option.disabled = true;
  }

  document.getElementById("nom").value = "J2";
  document.getElementById("personnage").value = `${
    Number(i) >= i.length ? Number(i) - 1 : Number(i) + 1
  }`;
  document.getElementById("h2Joueur").innerHTML = "2";
  j1.style.display = "none";
  j2.style.display = "block";
}

// Fonction appelée lorsqu'on clique sur le bouton de soumission du joueur 2
function soumettreJ2() {
  const nom = document.getElementById("nom");
  const i = document.getElementById("personnage").value;
  if (nom.value === "" || i === "") {
    return; // Si les champs sont vides, ne fait rien
  } else if (nom.value === Joueur1.nomJoueur) {
    nom.value += "²"; // Ajoute un indice pour éviter les noms en double
  }
  // Crée une instance de "Joueur" pour le joueur 2
  Joueur2 = new Joueur(nom.value, "J2", personnages[i]);

  const selectPersonnage = document.getElementById("personnage");
  const option = selectPersonnage.options[i];

  playerDom();
  // Définit le joueur actif en cours comme le joueur 1 (Joueur1)
  joueurEnCours = Joueur1.nomJoueur;
  // Récupère le symbole du joueur 1
  signeJoueurEnCours = Joueur1.personnage.signe;
  // Met à jour l'élément HTML pour afficher le nom du joueur en cours
  joueurAnnonce.innerHTML = joueurEnCours;
  // Récupère l'avatar du joueur 1 pour le pion
  joueurIcon = Joueur1.personnage.avatar;

  // Fermez la "popup"
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Fonction pour mettre à jour l'affichage des informations des joueurs après la sélection
function playerDom() {
  // Affiche les informations du joueur 1
  player1[0].innerHTML = `${Joueur1.nomJoueur}`;
  player1[1].src = `${Joueur1.personnage.avatar}`;
  player1[2].innerHTML = `${Joueur1.personnage.nom}`;
  player1[3].innerHTML = `${Joueur1.personnage.age} ans`;
  player1[4].innerHTML = `${Joueur1.personnage.description}`;
  player1[5].innerHTML = `${Joueur1.personnage.phrase}`;
  player1[6].innerHTML = `Score: ${Joueur1.score}`;
  // Affiche les informations du joueur 2
  player2[0].innerHTML = `${Joueur2.nomJoueur}`;
  player2[1].src = `${Joueur2.personnage.avatar}`;
  player2[2].innerHTML = `${Joueur2.personnage.nom}`;
  player2[3].innerHTML = `${Joueur2.personnage.age} ans`;
  player2[4].innerHTML = `${Joueur2.personnage.description}`;
  player2[5].innerHTML = `${Joueur2.personnage.phrase}`;
  player2[6].innerHTML = `Score: ${Joueur2.score}`;
}

// Fonction pour changer de joueur
function changePlayer() {
  if (joueurEnCours === Joueur1.nomJoueur) {
    // Passe au joueur 2
    joueurEnCours = Joueur2.nomJoueur;
    signeJoueurEnCours = Joueur2.personnage.signe;
    joueurIcon = Joueur2.personnage.avatar;
  } else {
    // Passe au joueur 1
    joueurEnCours = Joueur1.nomJoueur;
    signeJoueurEnCours = Joueur1.personnage.signe;
    joueurIcon = Joueur1.personnage.avatar;
  }
  joueurAnnonce.innerHTML = joueurEnCours;
}

/****************************************
 * Sous-catégorie : Fonctions jeu
 ****************************************/

// Fonction pour vérifier s'il y a une victoire
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
      // Applique une animation visuelle pour marquer la victoire
      popAvatar(caseGrille[a], caseGrille[b], caseGrille[c]);
      // Affiche un message de victoire
      victory();

      // Attend quelques secondes, puis réinitialise la grille
      setTimeout(() => resetGrille(), 3000);
      return true;
    }
  }
  // Si aucune combinaison gagnante n'est trouvée, la fonction renvoie false pour indiquer qu'il n'y a pas de victoire.
  return false;
}

// Fonction pour vérifier s'il y a égalité
function checkNull() {
  if (resetIsRun) {
    return; // Si la réinitialisation est en cours, ne fait rien
  }
  let auMoinsUneCaseEstVide = false;
  caseGrille.forEach((element) => {
    const contenu = element.textContent.trim(); // Utilisez trim() pour supprimer les espaces vides éventuels autour du contenu.

    if (contenu === "") {
      auMoinsUneCaseEstVide = true;
    }
  });

  if (!auMoinsUneCaseEstVide) {
    // Applique une animation visuelle pour indiquer l'égalité
    popReduce();
    victory(1); // Affiche un message d'égalité
    setTimeout(() => resetGrille(), 3000); // Réinitialise la grille après quelques secondes
  }
}

// Fonction pour afficher une animation lors de la victoire
function popAvatar(a, b, c) {
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

function victory(a) {
  const visible = document.querySelector(".isFinish");
  const avatar = document.getElementById("icon");
  //const text = document.getElementById("vic");
  const name = document.getElementById("namePerso");
  if (a === 1) {
    // Si 'a' est égal à 1, cela signifie qu'il y a égalité (personne n'a gagné)
    avatar.src = "./avatar/mj.jpg";
    name.innerText = `MJ :`;
    /*text.innerText =*/ typeText(
      "Aucun des deux joueurs n'a réussi à prendre l'avantage"
    );
  } else {
    if (joueurEnCours === Joueur1.nomJoueur) {
      // Si le joueur en cours est le joueur 1
      avatar.src = `${Joueur1.personnage.avatar}`;
      name.innerText = `${Joueur1.personnage.nom} :`;
      typeText(
        Joueur1.personnage.victoire[
          getRandomNumber(0, Joueur1.personnage.victoire.length - 1)
        ]
      ); // Affiche un message de victoire aléatoire du joueur 1
    } else {
      // Si le joueur en cours est le joueur 2
      avatar.src = `${Joueur2.personnage.avatar}`;
      name.innerText = `${Joueur2.personnage.nom} :`;
      typeText(
        Joueur2.personnage.victoire[
          getRandomNumber(0, Joueur2.personnage.victoire.length - 1)
        ]
      ); // Affiche un message de victoire aléatoire du joueur 2
    }
  }
  visible.style.display = "flex";
  setTimeout(() => (visible.style.display = "none"), 3000);
}

// Fonction pour réinitialiser la grille
function resetGrille() {
  caseGrille.forEach((element) => {
    element.innerText = "";
    element.removeChild;
  });
}

function typeText(text) {
  let index = 0;
  const textContainer = document.getElementById("vic");
  textContainer.textContent = "";
  const intervalId = setInterval(function () {
    if (index < text.length) {
      textContainer.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(intervalId); // Arrêtez l'animation lorsque tout le texte est affiché.
    }
  }, 30); // Vitesse de frappe (en millisecondes)
}
/********************************************************************/
