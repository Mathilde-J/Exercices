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

// console.log(morse["..."])  

// console.log(Object.keys(morse));

let trad = "";
function decoder(codeMorse){
  let inputSplit = codeMorse.split(" ");
  // console.log(inputSplit, typeof inputSplit);
  inputSplit.forEach(element => {
    trad += morse[element];
    // console.log(trad);
  });
  return trad;
};
let result = console.log(decoder("-.-. --- ..- -.-. --- ..-"));
