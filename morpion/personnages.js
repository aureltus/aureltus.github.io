// personnages.js

const personnages = [
  {
    nom: "Alice",
    age: 28,
    avatar: "./avatar/alice.jpg",
    description: "Magicienne talentueuse",
    victoire: [
      "La magie est mon alliée.",
      "La magie triomphe encore !",
      "Mes pouvoirs sont inégalés !",
      "Une victoire digne d'une magicienne !",
      "Le spectacle continue avec moi !",
    ],
    signe: "A",
    phrase: "Que la magie soit avec moi",
  },
  {
    nom: "Charlie",
    age: 30,
    avatar: "./avatar/charlie.jpg",
    description: "Championne de l'escalade",
    victoire: [
      "J'atteins toujours le sommet.",
      "Le sommet est à moi !",
      "Une autre victoire au sommet !",
      "Je suis la reine de la montagne !",
      "La montagne m'obéit toujours !",
    ],
    signe: "C",
    phrase: "La montagne m'appelle",
  },
  {
    nom: "Eva",
    age: 26,
    avatar: "./avatar/eva.jpg",
    description: "Ingénieure créative",
    victoire: [
      "L'innovation est mon arme.",
      "L'innovation l'emporte encore !",
      "Mon esprit créatif triomphe !",
      "Un avenir meilleur commence avec moi !",
      "Chaque victoire est une innovation !",
    ],
    signe: "E",
    phrase: "Construisons un avenir meilleur",
  },
  {
    nom: "Frankie",
    age: 40,
    avatar: "./avatar/frankie.jpg",
    description: "Chasseur de trésors intrépide",
    victoire: [
      "L'or n'a pas de secrets pour moi.",
      "Je suis la reine des chasseuses de trésors.",
      "Une autre fortune trouvée !",
      "Chaque victoire est une pièce d'or de plus.",
      "Les trésors du monde m'appartiennent !",
    ],
    signe: "F",
    phrase: "À la recherche de l'or perdu",
  },
  {
    nom: "Olivia",
    age: 22,
    avatar: "./avatar/olivia.jpg",
    description: "Aventurière enthousiaste",
    victoire: [
      "L'excitation est ma compagne.",
      "L'aventure est mon véritable trésor.",
      "Vers de nouvelles aventures gagnantes !",
      "L'inconnu n'a rien sur moi !",
      "L'excitation est le carburant de ma victoire !",
    ],
    signe: "O",
    phrase: "Vers l'inconnu et au-delà",
  },
  {
    nom: "Sailor Moon",
    age: 16,
    avatar: "./avatar/sailor Moon.jpg",
    description: "Gardienne de l'amour et de la justice",
    victoire: [
      "Au nom de la Lune, je te punirai!",
      "Le pouvoir de l'amour et de la justice gagne toujours.",
      "L'éclat de la Lune brille dans ma victoire.",
      "L'amour et la paix triompheront toujours.",
      "La Lune est le symbole de ma victoire !",
    ],
    signe: "S",
    phrase: "L'amour et la paix triompheront toujours.",
  },
  {
    nom: "Naruto Uzumaki",
    age: 17,
    avatar: "./avatar/naruto uzumaki.jpg",
    description: "Ninja aux rêves de devenir Hokage",
    victoire: [
      "Je ne reviens jamais sur ma parole!",
      "Je suis le Hokage du futur !",
      "Les rêves deviennent réalité avec moi !",
      "Le Hokage en herbe remporte encore une victoire !",
      "Je suis Naruto Uzumaki, le ninja le plus puissant !",
    ],
    signe: "N",
    phrase: "Je vais devenir le plus grand ninja!",
  },
  {
    nom: "Monkey D. Luffy",
    age: 19,
    avatar: "./avatar/monkey D. Luffy.jpg",
    description: "Capitaine des Pirates au Chapeau de Paille",
    victoire: [
      "Je serai le Roi des Pirates!",
      "Le Roi des Pirates ne connaît pas de défaite !",
      "Chaque victoire m'approche de mon rêve !",
      "Le chapeau de paille représente la victoire !",
      "Je suis Monkey D. Luffy, le futur Roi des Pirates !",
    ],
    signe: "M",
    phrase: "Je ne recule devant rien pour atteindre mon rêve.",
  },
  {
    nom: "Goku",
    age: 35,
    avatar: "./avatar/goku.jpg",
    description: "Saiyan légendaire et défenseur de la Terre",
    victoire: [
      "Kamehameha!",
      "Mon pouvoir est sans limites !",
      "Je suis le guerrier ultime de l'univers !",
      "Kamehameha ! La victoire est à moi !",
      "Goku, le Saiyan légendaire, triomphe toujours !",
    ],
    signe: "G",
    phrase: "Je suis le guerrier le plus fort de l'univers!",
  },
  {
    nom: "Sakura Kinomoto",
    age: 13,
    avatar: "./avatar/Sakura Kinomoto.jpg",
    description: "Magicienne en herbe",
    victoire: [
      "Carte Clow, change de forme!",
      "La magie est ma meilleure alliée !",
      "Les cartes Clow obéissent à ma victoire !",
      "Que la magie guide mon chemin vers la victoire !",
      "La magicienne en herbe, triomphe encore une fois !",
    ],
    signe: "S",
    phrase: "Que la magie guide mon chemin.",
  },
  {
    nom: "Harry Potter",
    age: 17,
    avatar: "./avatar/Harry Potter.jpg",
    description: "Le sorcier qui a survécu à Voldemort",
    victoire: [
      "Expelliarmus!",
      "Le sorcier qui a vaincu le plus sombre des sorciers !",
      "Chaque victoire est un pas vers la paix !",
      "Je suis Harry Potter, le survivant !",
      "L'amour triomphe sur le mal !",
    ],
    signe: "P",
    phrase: "Je suis un sorcier.",
  },
  {
    nom: "Hermione Granger",
    age: 18,
    avatar: "./avatar/Hermione Granger.jpg",
    description: "L'intelligente et talentueuse sorcière",
    victoire: [
      "Accio!",
      "La connaissance est le pouvoir de ma victoire !",
      "Je suis la meilleure dans toutes les matières !",
      "Rien n'est impossible avec la magie !",
      "La sagesse m'accompagne dans la victoire !",
    ],
    signe: "H",
    phrase: "Quand tu ne sais pas, demande à Hermione.",
  },
  {
    nom: "Ron Weasley",
    age: 18,
    avatar: "./avatar/Ron Weasley.jpg",
    description: "Le fidèle ami et camarade de Harry",
    victoire: [
      "Alohomora!",
      "Moi ? Conduire la voiture volante ?",
      "La loyauté est ma force secrète de victoire !",
      "Les amis triomphent toujours ensemble !",
      "Je suis Ron Weasley, le roi des échecs !",
    ],
    signe: "R",
    phrase: "Moi ? Conduire la voiture volante ?",
  },
  {
    nom: "Dumbledore",
    age: 115,
    avatar: "./avatar/Dumbledore.jpg",
    description: "Le directeur de Poudlard",
    victoire: [
      "Nitwit! Blubber! Oddment! Tweak!",
      "La sagesse est la clé de la victoire !",
      "N'ayez pas peur de faire ce que vous savez être juste.",
      "L'éducation est le plus grand pouvoir !",
      "Dumbledore, le sage de Poudlard, triomphe avec sagesse !",
    ],
    signe: "D",
    phrase: "N'ayez pas peur de faire ce que vous savez être juste.",
  },
  {
    nom: "Bulma",
    age: 30,
    avatar: "./avatar/Bulma.png",
    description: "Scientifique brillante et aventurière",
    victoire: [
      "Capsule Corp!",
      "La science est ma meilleure alliée !",
      "L'avenir est fait de découvertes technologiques !",
      "Bulma, la scientifique, triomphe encore une fois !",
      "L'innovation est mon alliée dans la victoire !",
    ],
    signe: "B",
    phrase: "L'avenir est fait de science et d'aventure.",
  },
  {
    nom: "Sophie",
    age: 25,
    avatar: "./avatar/sophie.jpg",
    description: "Artiste peintre talentueuse",
    victoire: [
      "Les couleurs sont mon langage.",
      "L'art est ma passion et ma victoire !",
      "Chaque toile est une victoire sur la vie !",
      "Sophie, l'artiste, crée la victoire avec des couleurs !",
      "La beauté de l'art m'accompagne vers la victoire !",
    ],
    signe: "So",
    phrase: "Je peins le monde à ma façon",
  },
  {
    nom: "Léa",
    age: 29,
    avatar: "./avatar/lea.jpg",
    description: "Exploratrice intrépide",
    victoire: [
      "La découverte est ma passion.",
      "L'exploration m'emmène vers la victoire !",
      "Les terres inconnues sont mon domaine de victoire !",
      "Léa, l'exploratrice intrépide, triomphe à chaque découverte !",
      "Chaque aventure est une victoire dans l'inconnu !",
    ],
    signe: "L",
    phrase: "À la recherche de l'inconnu",
  },
  {
    nom: "Camille",
    age: 31,
    avatar: "./avatar/camille.jpg",
    description: "Astronome éminente",
    victoire: [
      "Les étoiles me guident",
      "L'univers est mon terrain de victoire !",
      "L'astronomie m'ouvre la voie de la victoire !",
      "Camille, l'astronome, explore les étoiles pour la victoire !",
      "Les constellations me guident vers de nouvelles victoires !",
    ],
    signe: "Ca",
    phrase: "À la conquête de l'univers",
  },
  // Ajoutez d'autres personnages ici
];

// Exportez les données des personnages
export { personnages };
