const bouton = document.getElementById("startButton");

const cinema = document.getElementById("cinema");

const story = document.getElementById("storyText");

const phrases = [

"Il existe des milliards d'étoiles...",

"Mais il n'y avait qu'une seule Lucile ❤️",

"Et tout a commencé...",

"...sur un bateau en Martinique 🌴"

];

bouton.addEventListener("click",()=>{

document.querySelector(".hero").style.display="none";

cinema.classList.remove("hidden");

let i=0;

function suivante(){

story.style.opacity=0;

setTimeout(()=>{

story.innerHTML=phrases[i];

story.style.opacity=1;

i++;

if(i<phrases.length){

setTimeout(suivante,3000);

}else{

setTimeout(fin,3500);

}

},700);

}

suivante();

});

function fin(){

story.innerHTML=`

✨

<br><br>

❤️ Clique pour ouvrir ton enveloppe ❤️

`;

story.style.cursor="pointer";

story.onclick=()=>{

document.body.innerHTML=`

<div style="

height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:#050816;

color:white;

font-family:Poppins,sans-serif;

padding:30px;

text-align:center;

">

<div>

<h1 style="font-family:'Great Vibes',cursive;font-size:70px;">

Mon cœur ❤️

</h1>

<p style="font-size:22px;line-height:1.8;max-width:700px;">

Aujourd'hui commence une aventure.

<br><br>

Pendant les 31 prochains jours,

je voudrais simplement te rappeler

à quel point tu comptes pour moi.

<br><br>

Depuis le 20 avril 2024,

tu rends ma vie plus belle.

<br><br>

Je t'aime.

<br><br>

❤️ Hugo

</p>

</div>

</div>

`;

};

}
