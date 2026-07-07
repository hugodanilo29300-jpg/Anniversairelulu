// ==============================
// NOTRE UNIVERS ❤️
// Version 1
// ==============================

const startButton = document.getElementById("startButton");

const today = new Date();

const hours = today.getHours();

let message = "";

if (hours < 12) {
    message = "☀️ Bonjour mon cœur ❤️";
} else if (hours < 18) {
    message = "💜 Coucou Lulu ❤️";
} else {
    message = "🌙 Bonne soirée mon cœur ❤️";
}

const subtitle = document.querySelector(".subtitle");

subtitle.innerHTML = message + "<br><br>31 jours pour te rappeler combien je t'aime.";

startButton.addEventListener("click", () => {

    alert(
`❤️ Bienvenue dans Notre Univers ❤️

Aujourd'hui commence une aventure.

Chaque jour, une nouvelle enveloppe t'attendra.

Je t'aime.

— Hugo ❤️`
    );

});
