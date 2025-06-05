"use strict";

var particle = document.querySelector('.cursor--custom');

window.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    particle.style.top = mouseY + 'px';
    particle.style.left = mouseX + 'px';
});

let saisonTournesol = null;
let saisonGeranium = null;
let saisonPerceNeige = null;

// Sélection des containers
const containerLifeDeath = document.querySelector(".containerlifedeath");
const containerSpringSummer = document.querySelector(".containerspringsummer");
const containerAutumnWinter = document.querySelector(".containerautumnwinter");
const containerTulipSunflower = document.querySelector(".containertulipsunflower");
const containerSunflowerGeranium = document.querySelector(".containersunflowergeranium");
const containerGeraniumSnowdrop = document.querySelector(".containergeraniumsnowdrop");
const containerSnowdropViola = document.querySelector(".containersnowdropviola");
const containerNightDay = document.querySelector(".containernightday");
const containerEte = document.querySelector(".containerete");
const containerPrintemps = document.querySelector(".containerprintemps");
const containerAutomne = document.querySelector(".containerautomne");
const containerHiver = document.querySelector(".containerhiver");
const containerTulipe = document.querySelector(".containertulipe");
const containerViola = document.querySelector(".containerpensee");
const containerSunflower = document.querySelector(".containertournesol");
const containerGeranium = document.querySelector(".containergeranium");
const containerSnowdrop= document.querySelector(".containerperceneige");
const containerEtoile = document.querySelector(".containeretoile");
const overlay = document.querySelector(".containernight--overlay");

// Sélection des boutons de choix
const cardLife = document.querySelector(".card_life"); // Bouton "Vie"
const cardDeath = document.querySelector(".card_death"); // Bouton "Mort"
const cardSpring = document.querySelector(".card_spring"); // Bouton "Printemps"
const cardSummer = document.querySelector(".card_summer"); // Bouton "Été"
const cardAutumn = document.querySelector(".card_autumn"); // Bouton "Automne"
const cardWinter = document.querySelector(".card_winter"); // Bouton "Hiver"
const cardTulip = document.querySelector(".card_tulip"); // Bouton "Tulipe"
const cardViola = document.querySelector(".card_viola"); // Bouton "Violette"
const cardNight = document.querySelector(".card_night"); // Bouton "Nuit"
const cardDay = document.querySelector(".card_day"); // Bouton "Jour"

// Masquer les containers sauf le premier au chargement
containerSpringSummer.style.display = "none";
containerAutumnWinter.style.display = "none";
containerTulipSunflower.style.display = "none";
containerSunflowerGeranium.style.display = "none";
containerGeraniumSnowdrop.style.display = "none";
containerSnowdropViola.style.display = "none";
containerNightDay.style.display = "none";
containerEte.style.display = "none";
containerPrintemps.style.display = "none";
containerAutomne.style.display = "none";
containerHiver.style.display = "none";
containerTulipe.style.display = "none";
containerViola.style.display = "none";
containerSunflower.style.display = "none";
containerGeranium.style.display = "none";
containerSnowdrop.style.display = "none";
containerEtoile.style.display = "none";
overlay.style.display = "none";

// Si l'utilisateur clique sur la carte "mort", il passe au container "automne/hiver"
cardDeath.addEventListener("click", function () {
    containerLifeDeath.style.display = "none";
    containerAutumnWinter.style.display = "flex";
});

// si l'utilisateur clique sur la carte "été", il passe au container "tulipe/tournesol"
cardSummer.addEventListener("click", function () {
    saisonTournesol = "summer";
    containerSpringSummer.style.display = "none";
    containerTulipSunflower.style.display = "flex";
        setTimeout(function() {
            containerEte.style.display = "flex";
    }, 300);
});

//si l'utilisateur clique sur la carte "printemps", il passe au container "tournesol/géranium"
cardSpring.addEventListener("click", function () {
    saisonTournesol = "spring";
    saisonGeranium = "spring";
    containerSpringSummer.style.display = "none";
    containerSunflowerGeranium.style.display = "flex";
        setTimeout(function() {
            containerPrintemps.style.display = "flex";
    }, 300);
});

// si l'utilisateur clique sur la carte "automne", il passe au container "géranium/perce-neige"
cardAutumn.addEventListener("click", function () {
    saisonGeranium = "autumn";
    saisonPerceNeige = "autumn";
    containerAutumnWinter.style.display = "none";
    containerGeraniumSnowdrop.style.display = "flex";
        setTimeout(function() {
            containerAutomne.style.display = "flex";
    }, 300);
});

//si l'utilisateur clique sur la carte "hiver", il passe au container "perce-neige/violette"
cardWinter.addEventListener("click", function () {
    saisonPerceNeige = "winter";
    containerAutumnWinter.style.display = "none";
    containerSnowdropViola.style.display = "flex";
        setTimeout(function() {
            containerHiver.style.display = "flex";
    }, 300);
});

document.querySelectorAll(".cardflower").forEach(card => {
    card.addEventListener("click", function () {
        // Masquer tous les autres containers
        document.querySelectorAll(".containertulipsunflower, .containersunflowergeranium, .containergeraniumsnowdrop, .containersnowdropviola").forEach(container => {
            container.style.display = "none";
        });

        // Afficher le container NightDay
        containerNightDay.style.display = "flex";
    });
});

// Si l'utilisateur clique sur la carte "jour", le container "NightDay" se ferme et les autres SVG restent affichés
cardDay.addEventListener("click", function () {
    containerNightDay.style.display = "none";
    document.querySelectorAll("svg").forEach(svg => {
    svg.style.display = "none";
    });
});
// Si l'utilisateur clique sur "Nuit", le container "NightDay" se ferme, les autres SVG restent affichés et le container Etoile s'affiche
cardNight.addEventListener("click", function () {
    containerNightDay.style.display = "none";
    overlay.style.display = "block";
    document.querySelectorAll("svg").forEach(svg => {
    svg.style.display = "none";
    });
    setTimeout(function() {
        containerEtoile.style.display = "flex";
    }, 1500);
});


// Si l'utilisateur clique sur la carte "vie", il passe au container "printemps/été"
cardLife.addEventListener("click", function () {
    containerLifeDeath.style.display = "none";
    containerSpringSummer.style.display = "flex";

    // Afficher SVG vie, cacher SVG mort
    document.getElementById("vie").style.display = "block";
    document.getElementById("mort").style.display = "none";

    // Animation du tracé du SVG "vie"
    const viePath = document.querySelector('#vie path');
    if (viePath) {
        viePath.classList.remove('play-animation');
        void viePath.offsetWidth;
        viePath.classList.add('play-animation');
    }
});

cardDeath.addEventListener("click", function () {
    containerLifeDeath.style.display = "none";
    containerAutumnWinter.style.display = "flex";

    // Afficher SVG mort, cacher SVG vie
    document.getElementById("vie").style.display = "none";
    document.getElementById("mort").style.display = "block";

    // Animation du tracé du SVG "mort"
    const mortPath = document.querySelector('#mort path');
    if (mortPath) {
        mortPath.classList.remove('play-animation');
        void mortPath.offsetWidth;
        mortPath.classList.add('play-animation');
    }
});

// si l'utilisateur clique sur la carte "printemps", le SVG change de couleur
cardSpring.addEventListener("click", function () {
    const viePath = document.querySelector('#vie path');
    if (viePath) {
        viePath.classList.add('color-spring');
    }
});

// si l'utilisateur clique sur la carte "été", le SVG change de couleur
cardSummer.addEventListener("click", function () {
    const viePath = document.querySelector('#vie path');
    if (viePath) {
        viePath.classList.add('color-summer');
    }
});

// si l'utilisateur clique sur la carte "automne", le SVG change de couleur
cardAutumn.addEventListener("click", function () {
    const mortPath = document.querySelector('#mort path');
    if (mortPath) {
        mortPath.classList.remove('color-winter');
        mortPath.classList.add('color-autumn');
    }
});

// si l'utilisateur clique sur la carte "hiver", le SVG change de couleur
cardWinter.addEventListener("click", function () {
    const mortPath = document.querySelector('#mort path');
    if (mortPath) {
        mortPath.classList.remove('color-autumn');
        mortPath.classList.add('color-winter');
    }
});

// si l'utilisateur clique sur la carte "tulipe", le SVG change de couleur et applique la couleur de la saison choisie
cardTulip.addEventListener("click", function () {
    const tulipePath = document.querySelector('#tulipe path');
    if (tulipePath) {
        tulipePath.classList.add('color-summer');
    }
});

// si l'utilisateur clique sur la carte "pensee", le SVG change de couleur et applique la couleur de la saison choisie
cardViola.addEventListener("click", function () {
    const penseePath = document.querySelector('#pensee path');
    if (penseePath) {
        penseePath.classList.add('color-winter');
    }
});

// si l'utilisateur clique sur la carte "tournesol", le SVG change de couleur et applique la couleur de la saison choisie
document.querySelectorAll(".card_sunflower").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("tournesol").style.display = "block";
        const tournesolPath = document.querySelector('#tournesol path');
        if (tournesolPath) {
            tournesolPath.classList.remove('play-animation', 'color-summer', 'color-spring');
            void tournesolPath.offsetWidth;

            if (saisonTournesol === "spring") {
                tournesolPath.classList.add('color-spring');
            } else if (saisonTournesol === "summer") {
                tournesolPath.classList.add('color-summer');
            }
            tournesolPath.classList.add('play-animation');
        }
    });
});

// si l'utilisateur clique sur la carte "geranium", le SVG change de couleur et applique la couleur de la saison choisie
document.querySelectorAll(".card_geranium").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("geranium").style.display = "block";
        const geraniumPath = document.querySelector('#geranium path');
        if (geraniumPath) {
            geraniumPath.classList.remove('play-animation', 'color-spring', 'color-autumn');
            void geraniumPath.offsetWidth;
            // Ajoute la couleur selon la saison choisie
            if (saisonGeranium === "spring") {
                geraniumPath.classList.add('color-spring');
            } else if (saisonGeranium === "autumn") {
                geraniumPath.classList.add('color-autumn');
            }
            geraniumPath.classList.add('play-animation');
        }
    });
});

// si l'utilisateur clique sur la carte "perce-neige", le SVG change de couleur et applique la couleur de la saison choisie
document.querySelectorAll(".card_snowdrop").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("perce_neige").style.display = "block";
        const perceneigePath = document.querySelector('#perce_neige path');
        if (perceneigePath) {
            perceneigePath.classList.remove('play-animation', 'color-autumn', 'color-winter');
            void perceneigePath.offsetWidth;
            // Ajoute la couleur selon la saison choisie
            if (saisonPerceNeige === "autumn") {
                perceneigePath.classList.add('color-autumn');
            } else if (saisonPerceNeige === "winter") {
                perceneigePath.classList.add('color-winter');
            }
            perceneigePath.classList.add('play-animation');
        }
    });
});

// si l'utilisateur clique sur la carte "tulipe", le SVG one line s'anime
cardTulip.addEventListener("click", function () {
        document.getElementById("tulipe").style.display = "block";

        const tulipePath = document.querySelector('#tulipe path');
        if (tulipePath) {
            tulipePath.classList.remove('play-animation');
            void tulipePath.offsetWidth;
            tulipePath.classList.add('play-animation');
        }
        setTimeout(function() {
            containerTulipe.style.display = "flex";
    }, 300); 
});

// si l'utilisateur clique sur la carte "pensee", le SVG one line s'anime
cardViola.addEventListener("click", function () {
        document.getElementById("pensee").style.display = "block";

        const penseePath = document.querySelector('#pensee path');
        if (penseePath) {
            penseePath.classList.remove('play-animation');
            void penseePath.offsetWidth;
            penseePath.classList.add('play-animation');
        }
        setTimeout(function() {
            containerViola.style.display = "flex";
    }, 300);
});

// si l'utilisateur clique sur la carte "tournesol", le SVG one line s'anime
document.querySelectorAll(".card_sunflower").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("tournesol").style.display = "block";
        setTimeout(function() {
            containerSunflower.style.display = "flex";
        }, 300); 
        
        const tournesolPath = document.querySelector('#tournesol path');
        if (tournesolPath) {
            tournesolPath.classList.remove('play-animation');
            void tournesolPath.offsetWidth;
            tournesolPath.classList.add('play-animation');
        }
    });
});

// si l'utilisateur clique sur la carte "geranium", le SVG one line s'anime
document.querySelectorAll(".card_geranium").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("geranium").style.display = "block";
        setTimeout(function() {
            containerGeranium.style.display = "flex";
        }, 300); 

        const geraniumPath = document.querySelector('#geranium path');
        if (geraniumPath) {
            geraniumPath.classList.remove('play-animation');
            void geraniumPath.offsetWidth;
            geraniumPath.classList.add('play-animation');
        }
    });
});

// si l'utilisateur clique sur la carte "perce-neige", le SVG one line s'anime
document.querySelectorAll(".card_snowdrop").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("perce_neige").style.display = "block";
        setTimeout(function() {
            containerSnowdrop.style.display = "flex";
        }, 300); 
        
        const perceneigePath = document.querySelector('#perce_neige path');
        if (perceneigePath) {
            perceneigePath.classList.remove('play-animation');
            void perceneigePath.offsetWidth;
            perceneigePath.classList.add('play-animation');
        }
    });
});

// tableau de phrases pour Clippy
document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
    "Moi c'est clippy, Bienvenue dans l’univers artistique et étrange de Hell’O, où l’angoisse existentielle prend une forme stylée: notamment à travers l’œuvre Ropsodie. ",
    "Hell’o c’est pas un bonjour mal orthographié à la “yes is a Giroud”.",
    "Fondé en 2008, donc OUI, ils faisaient déjà de l’art pendant que toi t’apprenais à écrire ton prénom en Comic Sans sur Paint.",
    "Comment ça vous connaissez pas Hell’o , c’est  un truc de dingue . C’est Antoine Detaille et Jérôme Meynen , deux cerveau  pour un projet.",
    "Leur truc à eux ? Mélanger le réel et le what-the-f*. Genre une licorne triste dans une forêt en forme de cerveau. Tu vois le genre ? Non ? Bah eux oui.",
    "Ils kiffent l’humain + la nature, fusionné façon Pokémon. T’as une forêt avec des bras ? Un bonhomme-nuage chelou ? Hell’O dit OUI et moi carrément je pleure sur le poulet .",
    " Leur matos ? Tout. Mur, papier, toile, panneau de signalisation, peut-être ta grand-mère si elle reste immobile trop longtemps.",
    " Leur univers c’est un rêve chelou mixé avec un épisode de “Adventure Time” sous acide (mais légal). Tu rentres dedans pour le fun, tu ressors changé à jamais.",
    "Dans “Ropsodie”, y’a un squelette qui fait la sieste et un papillon qui a l’air traumatisé. Message caché ? Hallucinations ? “ Bonjour ma princesse tu as bien dormi.”",
    "Regarder leurs œuvres, c’est comme scroll TikTok à 3h du mat  sur des Brainrot italien en pleine insomnie existentielle avec  : tu sais pas si tu kiffes ou si t’es juste en train de dissocier.",
    "Ils ont exposé dans des musées classes où même les tableaux ont une meilleure assurance-vie que toi. En gros le Beaux-arts ou encore le MIMA . La bas c’est genre “attention les check de caution !”",
    "Y’a aussi un truc chelou qui ressemble à un bébé plante en dépression. Tu sais pas s’il pleure, s’il prie ou s’il veut juste t’avaler."
];
    const textContainer = document.getElementById("clippyzone__textcontainer");
    const image = document.getElementById("clippy");

    let index = 0;
    let phrase = "";
    // fonction pour afficher les lettres une par une
    function afficherLettre() {
        if (index < phrase.length) {
            textContainer.innerHTML += phrase[index];

            if (phrase[index] !== " ") {
                gsap.fromTo(image,
                    { scale: 1 },
                    { scale: 1.25, duration: 0.18, ease: "power1.out", yoyo: true, repeat: 1 }
                );
                gsap.fromTo(image,
                    { y: 0 },
                    { y: -14, duration: 0.18, ease: "power1.inOut", yoyo: true, repeat: 1 }
                );
            }

            index++;
            setTimeout(afficherLettre, 150);
        }
    }
    let premiereFois = true;
    // fonction pour afficher une phrase aléatoire
    function afficherPhraseAleatoire() {
        if (premiereFois) {
            phrase = phrases[0]; // affiche obligatoirement la première phrase la première fois
            premiereFois = false;
        } else {
            // Prend une phrase aléatoire parmi les suivantes (index 1 à fin)
            const randomIndex = Math.floor(Math.random() * (phrases.length - 1)) + 1;
            phrase = phrases[randomIndex];
        }
        index = 0;
        textContainer.innerHTML = "";
        afficherLettre();
    }

    afficherPhraseAleatoire();

    image.addEventListener("click", afficherPhraseAleatoire);
});

// sélection du bouton restart
const btnRestart = document.getElementById("restart__button");

// fonction pour tout réinitialiser
function restartToLifeDeath() {

    [
        containerLifeDeath, containerSpringSummer, containerAutumnWinter,
        containerTulipSunflower, containerSunflowerGeranium, containerGeraniumSnowdrop,
        containerSnowdropViola, containerNightDay, containerEte, containerPrintemps,
        containerAutomne, containerHiver, containerTulipe, containerViola,
        containerSunflower, containerGeranium, containerSnowdrop, containerEtoile, overlay
    ].forEach(c => c.style.display = "none");


    document.querySelectorAll("svg").forEach(svg => svg.style.display = "none");


    saisonTournesol = null;
    saisonGeranium = null;
    saisonPerceNeige = null;


    containerLifeDeath.style.display = "flex";


    btnRestart.style.display = "none";
}

// afficher le bouton restart après le choix nuit/jour
cardDay.addEventListener("click", function () {
    btnRestart.style.display = "block";
});
cardNight.addEventListener("click", function () {
    btnRestart.style.display = "block";
});

// clic sur le bouton restart
btnRestart.addEventListener("click", restartToLifeDeath);

// effet de clic sur le curseur custom
window.addEventListener('mousedown', function () {
    particle.classList.add('click');
});
window.addEventListener('mouseup', function () {
    particle.classList.remove('click');
});

// curseur custom
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor--custom');
    document.querySelector('.accueil__body').addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    // effet clic
    window.addEventListener('mousedown', function () {
        cursor.classList.add('click');
    });
    window.addEventListener('mouseup', function () {
        cursor.classList.remove('click');
    });
});