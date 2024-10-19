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
// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!"));

//Task N

// function palindromCheck(str: string) {
//   const strArray = str.split('').join('');
//   console.log(strArray)
//   const reversedArr = strArray.split('').reverse().join('');
//   console.log(reversedArr)
//   if (strArray=== reversedArr) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

// }
// palindromCheck("son");
// palindromCheck("dad");

//TASK P
// function objectToArray(obj: { [key: string]: any }): any[][] {

//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// function hasProperty(obj: { [key: string]: any }, prop: string): boolean {

//     return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false
//TASK R

// function calculate(expression: string): number {
//   // Matnni bo'sh joylardan ajratamiz
//   const parts = expression.split(" ");
//   // Ajratilgan qismlardan birinchi va uchinchi qismni sonlarga o'tkazamiz
//   const num1 = parseInt(parts[0], 10);
//   const operator = parts[1];
//   const num2 = parseInt(parts[2], 10);

//   let result: number;
  
//   // Operatorni tekshirib, amalni bajarish
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       throw new Error("Invalid operator");
//   }

//   return result;
// }

// console.log(calculate("1 + 3")); // 4


// function expression(arr:[]){
//   console.log(arr);
//   for (let i = 0; i >= arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// function calculate(strParameter: any){
//   const value = strParameter.split("");

//   expression(value);
// }

// calculate("1+2");

//TASK S

// function missingNumber(arr: number[]): number {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i) {
//       return i;
//     }
//   }

//   return arr.length;
// }

// console.log(missingNumber([3, 0, 1]));
// /*TASK T*/
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {

//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

//TASK U
// function sumOdds(n:number):number {
//   let count = 0;

//   for (let i = 0; i < n; i++) {
   
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count; 
// }

// console.log(sumOdds(9)); 
// console.log(sumOdds(11));
//TASK V
// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {}; // Natijani saqlaydigan object

//   for (let char of str) {
//     if (result[char]) {
//       result[char]++; 
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result; 
// }


// console.log(countChars("hello")); 
//TAsk w
// function chunkArray(arr: number[], size: number): number[][] {
//   const result: number[][] = [];
  
//   for (let i = 0; i < arr.length; i += size) {
//     const chunk = arr.slice(i, i + size);
//     result.push(chunk);
//   }

//   return result;
// }


// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


function countOccurrences(obj: any, key: string): number {
    let count = 0;

    
    for (const prop in obj) {
      
        if (prop === key) {
            count++;
        }
       
        if (typeof obj[prop] === 'object') {
            count += countOccurrences(obj[prop], key);
        }
    }

    return count;
}


const myObj = {
    model: 'Bugatti',
    steer: {
        model: 'HANKOOK',
        size: 30
    }
};

console.log(countOccurrences(myObj, 'model')); // 2