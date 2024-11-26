// let playerpike = false;
// let playerskirm = false;
// let playercav = false;
// let opponentpike = false;
// let opponentskirm = false;
// let opponentcav = false;
// A l'origine je voulais déterminer les conditions de victorie avec des variables booléennes mais je me suis rendue compte que c'est plus simple et ça use moins de variables avec des variables numériques.

let score = 0;
let playerchoice = 0;
let opponentchoice = 0;
//pikeman=1; skirmisher=2; light cavalry=3
let canselect = true; //détermine à quel moment on peut choisir l'unité

window.addEventListener('load', () => {

    document.getElementById("playerchoicepike").style.display = "none";
    document.getElementById("playerchoiceskirm").style.display = "none";
    document.getElementById("playerchoicecav").style.display = "none";
    document.getElementById("opponentpike").style.display = "none";
    document.getElementById("opponentskirm").style.display = "none";
    document.getElementById("opponentcav").style.display = "none";
})

function comparechoices () {

}

function reset () {
    document.getElementById("playerchoicepike").style.display = "none";
    document.getElementById("playerchoiceskirm").style.display = "none";
    document.getElementById("playerchoicecav").style.display = "none";
    document.getElementById("opponentpike").style.display = "none";
    document.getElementById("opponentskirm").style.display = "none";
    document.getElementById("opponentcav").style.display = "none";
    canselect = true;
}

playerchoicepikebutton.addEventListener('click', () => {
    if (canselect == true) {
    document.getElementById("playerchoicepike").style.display = "block";
    playerchoice = 1;
    opponentchoice = Math.floor((Math.random() * 3) + 1); // n'importe quel choix du joueur assigne un nombre aléatoire entre 1 et 3 à la variable opponentchoice, qui permet de déterminer le choix de l'adversaire
        if (opponentchoice == 1) {
           document.getElementById("opponentpike").style.display = "block"; 
       } else if (opponentchoice == 2) {
           document.getElementById("opponentskirm").style.display = "block";
       } else {
        document.getElementById("opponentcav").style.display = "block";
       }
    canselect = false; // on fait en sorte de ne plus pouvoir sélectionner d'unité une fois le choix fait
    comparechoices(); // on lance la fonction qui compare les choix et détermine le vainqueur.
    
} else {}
});

playerchoiceskirmbutton.addEventListener('click', () => {
    if (canselect == true) {
    document.getElementById("playerchoiceskirm").style.display = "block";
    playerchoice = 2;
    opponentchoice = Math.floor((Math.random() * 3) + 1);
        if (opponentchoice == 1) {
           document.getElementById("opponentpike").style.display = "block"; 
       } else if (opponentchoice == 2) {
           document.getElementById("opponentskirm").style.display = "block";
       } else {
        document.getElementById("opponentcav").style.display = "block";
       }
    canselect = false;
    comparechoices();
} else {}
});

playerchoicecavbutton.addEventListener('click', () => {
    if (canselect == true) {
    document.getElementById("playerchoicecav").style.display = "block";
    playerchoice = 3;
    opponentchoice = Math.floor((Math.random() * 3) + 1);
        if (opponentchoice == 1) {
           document.getElementById("opponentpike").style.display = "block"; 
       } else if (opponentchoice == 2) {
           document.getElementById("opponentskirm").style.display = "block";
       } else {
        document.getElementById("opponentcav").style.display = "block";
       }
    canselect = false;
    comparechoices();
} else {}
});