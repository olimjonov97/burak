/* 
 Project Standards:

 --Logging Standards by Morgan
 -- Naming Standards 
   ==>> CAMEL CASE >>  function, variable, method,  goHome
   =>>  claass PASCAL  MemberService
   folder =>> KEBAB  MORGAN_FORMAT
   css =>  SNAKE CASE     
 -- ERROR handling
  
*/
/*
traditional FD > BSSR > EJS FrameWork orqali amalga oshiriladi (Admin)

Modeern FD  SPA => Json Data => React Library (user's application)

*/
/*
  
*/

/* 
Traditional API 
Rest API
Graphical API
*/
//  TASK G
// function getHig hestIndex(myArray){

//     let maxValue =Math.max(...myArray)
//     console.log(maxValue)

//     return myArray.indexOf(maxValue)

// }
// console.log(getHighestIndex([5, 21, 12, 1, 8]));
// function getHighestIndex(myArray:Number[]=[]) {

//   let maxIndex:number=0;

//   for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray.length; j++) {
//       console.log(
//         `Comparing myArray[${i}] = ${myArray[i]} with myArray[${j}] = ${myArray[j]}`
//       );

//       if (myArray[i] > myArray[maxIndex]) {
//         maxIndex = i;
//       }
//     }
//   }

//   return maxIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 101, 8]));

// console.log("Hello MIT");

//TASK H
// function isPositive(value: number) {
//   return value > 0;
// }
// function getPositive(arr: number[]) {
//   return arr.filter(isPositive).join("");
// }
// console.log(getPositive([1, -4, 2]));
// console.log(getPositive)
// getPositive([-5, 10, -2, 3]);
// getPositive([0, -1, -2, 4, 5])

//TASK H-2
// function getDigits(value: String) {
//   const arr = value.split("");
//   let sorted = "";
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] >= "0" && arr[i] <= "9") {
//       sorted += arr[i];
//     }
//   }
//   console.log(sorted);

//   return console.log(arr);
// }
// getDigits("44fvfd5dfb8bb5vdd5");
// function majorityElement(input: number[]): { maxNum: number; maxCount: number } {
//   let maxNum = 0;
//   let maxCount = 0;

//   for (let i = 0; i < input.length; i++) {
//     let count = 0;

//     for (let j = 0; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         count++;
//       }
//     }

//     // Update maxNum and maxCount if the current number's count is greater
//     if (count > maxCount) {
//       maxCount = count;
//       maxNum = input[i];
//     }
//   }

//   return { maxNum, maxCount };
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// TASK J

// function findLongestWord(str: string) {
//   const words = str.split(/\W+/);
//   console.log(words);
//   let longestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
//     if (longestWord.length < words[i].length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

// // Funksiyani sinash
// console.log(findLongestWord("I came from Uzbekistan!"));
//TASK K
// function countVowels(input: string): number {

//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let count = 0;

//     for (let char of input) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Misol
// console.log(countVowels("string")); // 1
//TASK L
function reverseSentence(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseSentence("we like coding!"));



