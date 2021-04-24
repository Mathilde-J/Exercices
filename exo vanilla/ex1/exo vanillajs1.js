
window.addEventListener("keydown", function(event){
  
    let audio = document.querySelector(`audio[data-key="${event.key}"]`);
    let key = document.querySelector(`.key[data-key="${event.key}"]`) //selectionne par class avec le "."
    if(!audio) return;//si audio == false (!audio) la fonction s'arrete
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    
    
    // while(audio.currentTime < audio.duration)
    
    if (audio.currentTime >0){
        key.classList.remove('playing');
        audio.pause();
        audio.currentTime = 0;
        return   
    }  
    // key.classList.remove('playing');

    //  console.dir(audio);// Affiche une liste interactive des propriétés de l’objet Javascript spécifié. La sortie est présenté comme un listing hiérarchique avec des triangles qui permettent l’affichage du contenu des objets-enfants.    
} )


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