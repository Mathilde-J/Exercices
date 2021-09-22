// EXO 1---------------------------------------

// ar=[1,2,3,4,10,11];

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// équivalent en synthaxe "normale" :

// function reducer (accumulateur, currentvalue){
//     console.log(accumulateur, currentvalue);
//     return accumulateur + currentvalue;
// }


// console.log(ar.reduce(reducer));


// EXO 2-------------------------------------

// a = [1,6,7,78,90,6,45];
// b = [4,9,2,89,56,4,32];
// result = [0,0]
// function compareTriplets(a, b) {
//     for (let i=0; i<a.length;i++){
//         console.log(a[i], b[i]);
//         if (a[i]<b[i]) {
//             result[1] += 1;
//         } else if (a[i]>b[i]){
//             result[0] += 1;
//         };
//     }console.log(result[0], result[1]);
// };
// // console.log(compareTriplets(a,b))
// compareTriplets(a,b);

// EXO 3------------------------------------

// let ar =[1000000001,1000000002,1000000003,1000000004,1000000005];

// function aVeryBigSum() {
//     let truc = ar.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante);
//     console.log(truc);
// };

// aVeryBigSum(ar)

// EXO 4---------------------------------------------

// var countBits = function(n) {
//     let binaire = (n >>> 0).toString(2);
//     let number = 0;
//     binaire = binaire.split('');
//     binaire.forEach(element => {
//         if (element === '1'){
//             number ++;
//         }
//     });
// return number;
// };
// console.log(countBits(1234));

// EXO 5---------------------------------

// let cardNumber = "21215675783";
// let machin = function maskify(cc) {
//     let str = cc.split("");
//     let machin = "";
//     let truc = "";

//     for (let i=0; i<str.length; i++){
//         if (i<str.length-4){
//             machin += str[i].replace(/[A-Za-z0-9]/,"#");
//         } else{
//             truc += str[i];
//         }

//     }
//     return machin + truc;
// };

// console.log(machin(cardNumber));

// correction :function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

// EXO 6----------------------------------


// function squareDigits(num){
//     let separer = (""+num).split("");
//     // console.log(separer);
//     const map1 = separer.map(x => x * x).join("");
//     separer = parseInt(map1);
//     return separer;
// }
// console.log(squareDigits(167861234));

// correction : function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

//   }
// correction2 : function squareDigits(num){
//     var array = num.toString().split('').map( function(int) {
//       var i = parseInt(int);
//       return i * i;
//     });

//     return parseInt(array.join(""));
//   }

// EXO 7-------------------------------------
// isIsogram("patate");
// function isIsogram(str){
//     let doublon = false;
//     let lettresConnues = ['a', 'b', 'd', 't'];
//     //variable : séparer string initial et mettre chaque lettre dans tableau
//     let unTableau = str.split('');
//     //parcourir chaque élément du tableau avec forEach :
//     for(var i= 0; i < unTableau.length; i++){
//         lettresConnues.forEach(function(element) {
//             console.log(element, unTableau[i]);
//             if (unTableau[i] === element){
//                 console.log("c bon");
//             } else {
//                 console.log("c pa bon");
//             };
//         });
//     };
// };

// EXO 8----------------------------------


// let count =0;
// function persistence(num){
//     var SplitNum = (""+num).split("");
//     // console.log(SplitNum.length);
//     if (SplitNum.length > 1){
//         const reducer = (accumulator, currentValue) => accumulator * currentValue;
//         num = SplitNum.reduce(reducer);
//         count+=1;
//         persistence(num)
//         return count
//     } else return 0;
// };


// corrections :
// function persistence(num, counter = 0) {
//     if(num.toString().length === 1) return counter;
//    num = num.toString().split('').reduce((x,y) => x * y)
//    counter++;
//    return persistence(num, counter)
// }

// function persistence(num) {
//     for (var i = 0; num > 9; i++) {
//       num = num.toString().split('').reduce((t, c) => c * t);
//     }
//     return i;
// }

// -----------------------------------------------------
// function multiply(array) {
//     var sum = 1;
//      for (let i = 0; i < array.length; i++){
//         console.log(sum, array[i]);
//         sum = sum * array[i];
//     }
//     return sum;
// }

// console.log(multiply([1, 2, 3,1, 2, 3,1, 2, 3,]));

// EXO 9--------------------------------

// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// --> regarder les expressions régulières pour selectionner les 1ère lettres des mots après un "-"
// let str = "hello-there-haha-je-m'appelle-mathilde";

// test avec RegExp
// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/

// let masque = /-[a-z]/g;
// let str = "hello-it-is-me-mathile-youhou";
// function toCamelCase(str){
//     let restr = str.match(masque);
//     // let essai = str.toUpperCase();
//     // console.log(typeof (restr));
//     restr.forEach(element => {
//         console.log(element.toUpperCase());
//     });
//     console.log(str);
// }


// console.log(toCamelCase("hello_it_is_me-mathile-youhou"));

// function toCamelCase(str){
//     if (str == ''){
//         return str;
//     } else {
//         let strSplit = str.split(/[-_]/);
//         for (let i=1; i<strSplit.length; i++){
//         strSplit [i] = strSplit[i][0].toUpperCase() + strSplit[i].substr(1);
//     }
//     return strSplit.join("")};
// }
// console.log(toCamelCase(str));
// EXO 10-----------------------------
// test : Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);

// string = "man i need a taxi up to ubud";
// let lastLetterAlphOrder = (string) =>{
//     let StringSplit = string.split(" ");
//     StringSplit.forEach(element => {
//         console.log(element[0]);
//     });
// }

// console.log(lastLetterAlphOrder(string));

// correction : function last(x){
//     return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
//   }

// EXO 11 ----------------------------
// let people = [{
//     age: 83, name: 'joel' },
// {   age: 46, name: 'roger' },
// {   age: 99, name: 'vinny' },
// {   age: 5, name: 'Sarh' },
// {   age: 24, name: 'Lydia' },
// {   age: 87, name: 'Paul' }];

// var OrderPeople = function(people){
//     return people.sort((a, b)=> a.age -b.age);  //complete this function
// };
// let result = OrderPeople(people);
// console.log(result);
// let nombres = [4, 2, 5, 1, 3];
// nombres.sort((a, b) => console.log(a,"-", b , '=', a-b));
// console.log(nombres)

// EXO 12-------------------------------

// function solution(number){
//   // convert the number to a roman numeral
//     let romanDictionary = {
//         M:1000,
//         CM:900,
//         D:500,
//         CD:400,
//         C:100,
//         XC:90,
//         L:50,
//         XL:40,
//         X:10,
//         IX:9,
//         V:5,
//         IV:4,
//         I:1
//     }
//     let romanNumber = "";
//     for(let i in romanDictionary){
//         while (number >= romanDictionary[i]){
//         romanNumber += i;
//         number -= romanDictionary[i];
//         }
//     }
//     return romanNumber;
// }

// Autre solutions:
// function solution(number){
//     // convert the number to a roman numeral
//   var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

//   var ans = '';
//   while(number>0){
//       for(a in roman){
//           if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

//       }
//   }
//   return ans;
//   }


// EXO 13 ------------------------------

// function descendingOrder(num){
//     let numToString = String(num).split('').map(Number);
//     return parseInt(numToString.sort((a, b) => b - a).join(''));
// }

// Autre solution :

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }

// EXO 14 ------------------------------

// let createArrays = function (array) {
//     let arraysLeftRightIndex = [];
//     for (let i = 0; i < array.length; i++) {
//         let newArrayLeft = array.slice(0, i);
//         let newArrayRight = array.slice(i + 1, array.length);
//         arraysLeftRightIndex.push([newArrayLeft, newArrayRight, i]);
//     }
//     return arraysLeftRightIndex;
// }

// let reduceArrays = function (arrayArrayIndex) {
//     //   console.log(arrayArrayIndex);
//     let arrayOne;
//     let arrayTwo;
//     let index;
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     //   console.log(arrayArrayIndex);
//     for (let array of arrayArrayIndex) {
//         if (array[0][0] === undefined) {
//             array[0][0] = 0
//         }
//         if (array[1][0] === undefined) {
//             array[1][0] = 0
//         }
//         console.log(array[0], array[1]);

//     }

// };

// My solution n°2:
// let twoNewArray = function (array) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;

//   for (let i = 0; i < array.length; i++) {
//     let testArray1 = array.slice(0, i).reduce(reducer, 0)
//     let testArray2 = array.slice(i + 1, array.length).reduce(reducer, 0)

//     if (testArray1 === testArray2) {
//       return i
//     }
//   }
//   return -1
// }

// function findEvenIndex(arr) {
//   return twoNewArray(arr)
// }

// function findEvenIndex(arr) {
//     return reduceArrays(createArrays(arr));
// }


// Correction :

// function findEvenIndex(arr)
// {
//   return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((p,c)=>p+c,0)==a.slice(i+1).reduce((p,c)=>p+c,0));
// }

// function findEvenIndex(arr)
// {
//   function sum(arr){
//     return arr.reduce(function(a,b){return a+b;},0);
//   }

//     return arr.findIndex(function(el,i,arr){
//         return sum(arr.slice(0, i)) === sum(arr.slice(i+1,arr.length));
//   });    // 1. sum de : [], [1], [1,2] etc et sum de [1,2,2,1] [1,2,2] etc
//         //2. trouve l'index de l'égalité
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1]));

// function findEvenIndex(arr)
// {
//   let left = 0;
//   let right = arr.reduce((s,n) => s + n, 0);
// //   console.log(left, right);
//   for (let i = 0; i < arr.length; i++) {
//     right -= arr[i];
//     console.log(left, right);
//     if (left === right) return i;
//     left += arr[i];
//     // console.log(left, right);
//   }
//   return -1;
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1]));


// EXO 15 Good vs Evil (codewars)--------------------

//My solution (too long)

// const racesGood = {
//   Hobbits: 1,
//   Men: 2,
//   Elves: 3,
//   Dwarves: 3,
//   Eagles: 4,
//   Wizards: 10
// }

// const racesEvil = {
//   Orcs: 1,
//   Men: 2,
//   Wargs: 2,
//   Goblins: 2,
//   UrukHai: 3,
//   Trolls: 5,
//   Wizards: 10
// }


// // console.log(Object.keys(racesGood), Object.values(racesGood));

// let seperateString = function(stringGoodEvil){
//   let countGoodEvil = [0,0];

//   for(let i = 0; i < stringGoodEvil[0].length; i ++){
//     countGoodEvil[0] += Object.values(racesGood)[i] * stringGoodEvil[0][i];
//   }
//   for(let i = 0; i < stringGoodEvil[1].length; i ++){
//     countGoodEvil[1] += Object.values(racesEvil)[i] * stringGoodEvil[1][i];
//   }
//   return countGoodEvil;
// }

// function goodVsEvil(good, evil){
//   const mapArrays = [good, evil].map(element => element.split(" "));
//   let countResult = seperateString(mapArrays);
//   if(countResult[0] > countResult[1]){
//     return 'Battle Result: Good triumphs over Evil';
//   }

//   if(countResult[0] < countResult[1]){
//     return 'Battle Result: Evil eradicates all trace of Good'
//   }

//   return 'Battle Result: No victor on this battle field'
// };


// Correction :

// function goodVsEvil(good, evil) {
//   var worth = [ [1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10] ];
//   var good = good.split(' ').reduce((s,v,i) => s + worth[0][i] * v, 0);
//   var evil = evil.split(' ').reduce((s,v,i) => s + worth[1][i] * v, 0);
//   if (good > evil) return "Battle Result: Good triumphs over Evil";
//   else if (evil > good) return "Battle Result: Evil eradicates all trace of Good";
//   else return "Battle Result: No victor on this battle field";
//}

// function goodVsEvil(good, evil){
//   var worthGood = [1, 2, 3, 3, 4, 10];
//   var worthEvil = [1, 2, 2, 2, 3, 5, 10];

//   var powerGood = good.split(' ').reduce(function(sum, current, index){ return sum + current*worthGood[index]}, 0);
//   var powerEvil = evil.split(' ').reduce(function(sum, current, index){ return sum + current*worthEvil[index]}, 0);


//    if (powerEvil > powerGood) return 'Battle Result: Evil eradicates all trace of Good';
//    else if (powerGood > powerEvil) return 'Battle Result: Good triumphs over Evil';
//    else return 'Battle Result: No victor on this battle field'
// }

// goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');
// goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0');
// goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0');



// EXO 16 Weird string ----------------
// A REFACTORISER => plus de fonction indivs
// function toWeirdCase(string){
//     let truc="";
//     let stringSplit = string.split(" ")
//     for (const words of stringSplit){
//       stringSplit = words.split("")
//       for (let  i = 0; i < stringSplit.length; i ++){
//         if(i %2 === 0){
//           stringSplit[i] = stringSplit[i].toUpperCase()
//         }
//       }
//       truc +=`${stringSplit.join("")} `
//     }
//   return truc.trim()
// }

// EXEMPLEs DE CORRECTION -------------------
//1
// function toWeirdCase(string) {
//   return string.split(' ').map(function (word) {
//     return word.split('').map(function (letter, index) {
//       return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
//     }).join('');
//   }).join(' ');
// }

// //2
// function toWeirdCaseCharacter(chr, index) {
//   return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
// }

// function toWeirdCaseWord(word) {
//   return word.split("").map(toWeirdCaseCharacter).join("");
// }

// function toWeirdCase(string) {
//   return string.split(" ").map(toWeirdCaseWord).join(" ");
// }


// //3
// function toWeirdCase(string) {

//   function singleWeird(e) {
//     var word = e.split('');
//     for (var i = 0; i < word.length; i += 2) {
//       word[i] = word[i].toUpperCase();
//     }
//     return word.join('');
//   }

//   return string.split(' ').map(function (e) {
//     return singleWeird(e);
//   }).join(' ');
// }

// EXO 17 CODE MORSE

// ma solution :

// const translateCode = function(codeSplitted){
//   let result=[];
//   for (const words of codeSplitted.split("  ")){
//     words.split(" ").map(function(x){
//       if(MORSE_CODE[x]=== undefined){
//         MORSE_CODE[x] = " "
//       }
//       result.push(MORSE_CODE[x])
//     })
//   }
//     return `${result.join("")}`.trim()
// }


// decodeMorse = function(morseCode){
//   return translateCode(morseCode)
// }


// // Autres solutions:

// decodeMorse = function(morseCode){
//   return morseCode
//     .trim()
//     .split(/  | /)
//     .map( (code) => MORSE_CODE[code] || ' ')
//     .join('');
// }


// EXO 18 HUMAN READABLE TIME

// MA SOLUTION :

// let addAZero = function(time){
//   let timePlusZero = `0${time}`
//   return timePlusZero
// }

// function humanReadable(seconds) {
//   let hours = Math.floor((seconds / 3600))
//   let minutes = Math.floor((seconds - (hours * 3600)) / 60)
//   let second = Math.floor((seconds - (hours * 3600)) - (minutes * 60))

//   if(second < 10){
//     second = addAZero(second)
//   }
//   if(minutes < 10){
//     minutes = addAZero(minutes)
//   }
//   if(hours < 10){
//     hours = addAZero(hours)
//   }

//   return `${hours}:${minutes}:${second}`
// }

// Autres solutions:

// function humanReadable(seconds) {
//   var HH, MM, SS;
//   HH = "0" + Math.floor(seconds/3600);
//   seconds -= HH * 3600;
//   MM = "0" + Math.floor(seconds/60);
//   seconds -= MM * 60;
//   SS = "0" + seconds;
//   return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
// }


// function humanReadable(seconds) {
//   const oneMinute = 60
//   const oneHour = oneMinute * 60
//   const H = ('0' + Math.floor(seconds / oneHour)).slice(-2)
//   const M = ('0' + Math.floor(seconds / oneMinute) % 60).slice(-2)
//   const S = ('0' + seconds % 60).slice(-2)
//   return `${H}:${M}:${S}`
// }

// EXO 19 SITE NAME

// let result = []
// const replaceAtIndex = function(string, index, newValue) {
//   if(index === -1){return result}
//     return string.substring(0, index) + newValue + string.substring(index + newValue.length)
// }

// const getIndexOfValue= function(string, value){
//   let indx=[]
//   for(let i = 0; i < string.length; i++){
//     if(string[i]===`${value}` || string[i]===`${value.toUpperCase()}`){
//       indx.unshift(i)
//     }
//   }
//     return indx
// }

// const replaceL = function(urlName){
//  let indexOfL = getIndexOfValue(urlName, "l")
//   for(let i = 0;i < indexOfL.length; i++ ){
//     result.push(replaceAtIndex(urlName, indexOfL[i], "1"))
//   }
//   return result
// }


// const replaceSimilarLetters = function(urlName){
//   for(let i = 0; i < urlName.length; i++){
//     let truc = urlName.replace(urlName[i], '')
//     if(urlName[i]===urlName[i+1] && !result.includes(truc) ){
//       result.unshift(truc)
//     }
//   }
//   return
// }

// const replaceOBy0 = function(urlName){
//   let endUrlName = urlName.substring(urlName.indexOf("."))
//   urlName = urlName.substring(0, urlName.indexOf("."))
//   let indexOfO = getIndexOfValue(urlName, "o")

//   for(let i = 0;i < indexOfO.length; i++ ){
//     result.unshift(replaceAtIndex(urlName, indexOfO[i], "0") + endUrlName)
//   }

// }


// function goodName(name){
//   result = []
//   replaceSimilarLetters(name)
//   replaceOBy0(name)
//   replaceL(name)

//   console.log(result)
//   return result
// }



// EXO 20 multiple of 3 or 5

// function solution(number){
//   let result = 0
//   for(let i = 0; i < number; i++){
//     if(i % 3 === 0 || i % 5 === 0 || i % 3 === 0 && i % 5 === 0){
//       result += i
//     }
//   }
//   return result
// }

// EXO 21 Build Tower

// const spaceAndStarsString = function (nbSpaces){
//   let result = []
//   let star = "*"
//   let spaces = " "
//   for(let i = 0; i < nbSpaces; i++){
//     result.push(`${spaces.repeat((nbSpaces-1)-i)}${star}${spaces.repeat((nbSpaces-1)-i)}`)
//     star += "**"
//   }
//  return result
// }

// function towerBuilder(nFloors) {
//   return spaceAndStarsString(nFloors)
// }

// Autres solutions

// function towerBuilder(nFloors) {
//   var result = [];
//   var starNumber = 1;
//   for (i=1; i<=nFloors; i++) {
//     result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
//     starNumber += 2;
//   }
//   return result;
// }



// EXO 22 Berlin Clock

const secondsBerlinClock = function (numSeconds) {
  if (numSeconds % 2 != 0) {
    return "O"
  }
  return "Y"
}

const hoursBerlinClock = function (numHours, letter) {
  let firstRow = ["O", "O", "O", "O"]
  firstRow = firstRow.fill(letter, 0, numHours)
  const result = firstRow.join("")
  return result

}

const minutesBerlinClock = function (numMinutes) {
  let rowMinutes = ["Y", "Y", "R", "Y", "Y", "R", "Y", "Y", "R", "Y", "Y"]
  rowMinutes = rowMinutes.fill("O", numMinutes)
  return rowMinutes.join("")
}


function berlinClock(time) {
  let hours = parseInt(time.substring(0, 2))
  let minutes = parseInt(time.substring(3, 5))
  let deciemalHr = ((hours / 5) + "").split(".")
  let decimelMns = ((minutes / 5) + "").split(".")

  const brlnClckSnds = secondsBerlinClock(parseInt(time.substring(6)))
  const brlnClckHrs1st = [
    hoursBerlinClock(Math.trunc(hours / 5), "R"),
    hoursBerlinClock(parseInt((deciemalHr[1]) / 2), "R")
  ]
  return `${brlnClckSnds}\n${brlnClckHrs1st[0]}\n${brlnClckHrs1st[1]}\n${minutesBerlinClock(decimelMns[0])}\n${hoursBerlinClock(parseInt((decimelMns[1]) / 2), "Y")}`
}

Autres solutions :

function berlinClock(time) {
  const [hours, minutes, seconds] = time.split(":").map(x => parseInt(x));

  var result = "";
  seconds % 2 == 1 ? (result += "O\n") : (result += "Y\n");
  result += "R".repeat(hours / 5).padEnd(4, "O").concat("\n");
  result += "R".repeat(hours % 5).padEnd(4, "O").concat("\n");
  result += "Y".repeat(minutes/5).padEnd(11, "O").replace(/YYY/g, "YYR").concat("\n");
  result += "Y".repeat(minutes % 5).padEnd(4, "O");

  return result;
}

