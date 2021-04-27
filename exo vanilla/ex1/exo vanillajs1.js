//Quand on touche certaines touches du clavier, un son est émis
let AudiobyKey= (audio, key )=>{
    if(!audio) return;//si audio == false (!audio) la fonction s'arrete
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


window.addEventListener("keydown", (event)=>{
    let audio = document.querySelector(`audio[data-key="${event.key}"]`);
    let key = document.querySelector(`.key[data-key="${event.key}"]`);//selectionne par class avec le "."
    AudiobyKey(audio, key);
});

//appuyer sur la touche relance l'audio
//création d'un bouton stop pour arreter tout son 
// if (audio.currentTime >0){
//     console.log("merde")
//     key.classList.remove('playing');
//     audio.pause();
//     audio.currentTime = 0;
//     return   
// }
//  console.dir(audio);// Affiche une liste interactive des propriétés de l’objet Javascript spécifié. La sortie est présenté comme un listing hiérarchique avec des triangles qui permettent l’affichage du contenu des objets-enfants.    



// test pour faire enlever l'animation
function removeTransition(event){ //fonction appellée quand la transition a finie
    // console.log(event)
    if(event.propertyName !=='transform') return;
    // console.log(event.propertyName);//console.log le propertyname à la fin de la transition
    // console.log(this);
    this.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
