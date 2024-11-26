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

window.addEventListener('load', () => {

    document.getElementById("playerchoicepike").style.display = "none";
    document.getElementById("playerchoiceskirm").style.display = "none";
    document.getElementById("playerchoicecav").style.display = "none";
    document.getElementById("opponentpike").style.display = "none";
    document.getElementById("opponentskirm").style.display = "none";
    document.getElementById("opponentcav").style.display = "none";
})


function reset () {
    document.getElementById("playerchoicepike").style.display = "none";
    document.getElementById("playerchoiceskirm").style.display = "none";
    document.getElementById("playerchoicecav").style.display = "none";
    document.getElementById("opponentpike").style.display = "none";
    document.getElementById("opponentskirm").style.display = "none";
    document.getElementById("opponentcav").style.display = "none";
}

playerchoicepikebutton.addEventListener('click', () => {
    document.getElementById("playerchoicepike").style.display = "block";
    playerchoice = 1;
    // n'importe quel choix du joueur assigne un nombre aléatoire entre 1 et 3 à la variable opponentchoice, qui permet de déterminer le choix de l'adversaire
});

playerchoiceskirmbutton.addEventListener('click', () => {
    document.getElementById("playerchoiceskirm").style.display = "block";
    playerchoice = 2;
    // n'importe quel choix du joueur assigne un nombre aléatoire entre 1 et 3 à la variable opponentchoice, qui permet de déterminer le choix de l'adversaire
});

playerchoicecavbutton.addEventListener('click', () => {
    document.getElementById("playerchoicecav").style.display = "block";
    playerchoice = 3;
    // n'importe quel choix du joueur assigne un nombre aléatoire entre 1 et 3 à la variable opponentchoice, qui permet de déterminer le choix de l'adversaire
});