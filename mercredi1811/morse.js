// const morseTable = {
//   "..." : "s",
//   "---" : "o"
//  }
//  function afficherValeur(valeurRecue,index,tab){
//    console.log("valeur Recue = "+ valeurRecue);
//    console.log("index Recue = "+ index);
//    console.log("tab Recue = "+ tab);
   
//  }


// function decoder(chaineMorse){
//    arrayOfChaineMorse = chaineMorse.split(" ");
//     arrayOfChaineMorse.forEach(afficherValeur);
//     //arrayOfChaineMorse.forEach(function (morseLetter){
//      //   console.log(morseLetter);
// //      if (morseLetter === "...") {
// //      console.log("s");
// //  }if(morseLetter === "---"){
// //      console.log("o");
// //      }
//  //   });
// }

// console.log(decoder("... --- ... ---"));


// ----------------------------NIVEAU 2 MOI----------------

// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// console.log(person["firstName"]);

let morse = {
  ".-" : "a",                        
  "-..." : "b",                       
  "-.-." : "c",                      
  "-.." : "d",                     
  "." : "e",                         
  "..-." : "f",             
  "--." : "g",
  "...." : "h",
  ".." : "i", 
  ".---" : "j",
  "-.-" : "k", 
  ".-.." : "l",
  "--" : "m",  
  "-." : "n",
  "---" : "o",
  ".--." : "p",
  "--.-" : "q",
  ".-." : "r", 
 "..." : "s",
  "-" : "t", 
  "..-" : "u", 
  "...-" : "v",
  ".--" : "w", 
  "-..-" : "x", 
  "-.--" : "y",
  "--.." : "z",
  ".---- ": "1", 
  "..---" : "2",
  "...--" : "3",
  "....-" : "4", 
  "....." : "5", 
  "-...." : "6",
  "--..." : "7",
  "---.." : "8",
  "----." : "9",
  "-----" :"0"
}

console.log(morse["..."])  

console.log(typeof morse)



function MorseDecode(Codeenmorse){
  console.log("je suis là")
  let code = Codeenmorse.split("");

  
  return code;
}


let resultat = console.log(MorseDecode("..."))

