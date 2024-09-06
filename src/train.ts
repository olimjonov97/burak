//  TASK G
// function getHighestIndex(myArray){

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
 function getDigits(value: String) {
   const arr=value.split('');
   let sorted='';
   for(let i=0; i<= arr.length;i++){
    if(arr[i] >="0" && arr[i]<="9"){
      sorted+=arr[i]
    }
   }
   console.log(sorted)
   
  return console.log(arr);
}
getDigits("44fvfd5dfb8bb5vdd5");

