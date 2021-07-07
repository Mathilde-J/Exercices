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

// EXO 12------------------  !!!!!!!!! EN PYTHON

// import functools
// count = 0
// finalCount = 0

// def persistence(num):
//     global count
//     global finalCount

//     x = [int(a) for a in str(num)]

//     if len(x) >= 2:
//         num = functools.reduce(lambda a, b: a * b, x)
//         count += 1
//         persistence(num)
//     else:
//         finalCount = count
//         count = 0
//     return finalCount

// correction !!!!!! en python !!!!!!!!!!!
// import operator
// def persistence(n):
//     i = 0
//     while n>=10:
//         n=reduce(operator.mul,[int(x) for x in str(n)],1)
//         i+=1
//     return i

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

