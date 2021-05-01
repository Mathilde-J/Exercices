
let audios = document.querySelectorAll('audio');
audios.forEach(audio => audio.addEventListener('ended', removeTransition));

//enlever l'animation et ajoute une class quand audio joue
function removeTransition(event){ //fonction appellée quand la transition a finie
    this.classList.remove('playing');
    let key = document.querySelector(`.key[data-key="${event.srcElement.dataset.key}"]`);//selectionne par class avec le "."
    key.classList.remove('playing');
}


//Quand on touche certaines touches du clavier, un son est émis
let AudiobyKey= function(audio, key){
    if(!audio) return;//si audio === false (!audio) la fonction s'arrete
    key.classList.add('playing');
    audio.classList.add("playing")
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener("keydown", (event)=>{
    let audio = document.querySelector(`audio[data-key="${event.key}"]`);// selectionne les uadio qui ont le data-key de la touche pressée
    let key = document.querySelector(`.key[data-key="${event.key}"]`);//selectionne par class avec le "." selectionne les keys de la touche prssée

    AudiobyKey(audio,key);

    if(key.dataset.key === " "){
        buttonStop(audio, key);
    }
});


//fonction stop
function buttonStop(audio, key){
    audio = document.querySelectorAll(".playing")[1];
    key  = document.querySelectorAll(".playing")[0];
    key.classList.remove('playing');
    audio.classList.remove('playing');
    audio.pause();
    audio.currentTime = 0;
    return
}

//appuyer sur la touche relance l'audio
//création d'un bouton stop pour arreter tout son
// if (audio.currentTime >0){  ou key.dataset.key === " "
//     console.log("merde")
//     key.classList.remove('playing');
//     audio.pause();
//     audio.currentTime = 0;
//     return
// }
//  console.dir(audio);// Affiche une liste interactive des propriétés de l’objet Javascript spécifié. La sortie est présenté comme un listing hiérarchique avec des triangles qui permettent l’affichage du contenu des objets-enfants.




