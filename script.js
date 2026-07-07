const bouton = document.getElementById("startButton");

bouton.addEventListener("click", () => {

    document.body.style.transition = "1s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        alert(
`❤️ Bonjour mon cœur ❤️

Aujourd'hui commence une aventure.

Pendant les 31 prochains jours...

Une nouvelle surprise t'attendra.

Je t'aime.

— Hugo ❤️`
        );

        document.body.style.opacity = "1";

    },1000);

});
