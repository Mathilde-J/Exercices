// let date = new Date();
// let annee = date.getFullYear();
// console.log(annee);

function bisextile(annee){
    if (annee %4 == 0){
        if (annee %100 !== 0){
            console.log("c'est bissextile")
        } else if(annee %400 ==0){
            console.log("annee bissextile")
        } else {
            console.log("pas bisextile")
        }
    } else { console.log("année pas bissextile")}
};


let resulat = bisextile(2004);