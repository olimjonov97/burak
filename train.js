
function getHighestIndex(myArray){

    let maxValue =Math.max(...myArray)
    console.log(maxValue)

    return myArray.indexOf(maxValue)

}
console.log(getHighestIndex([5, 21, 12, 1, 8]));

//  for (let i = 0; i < myArray.length; i++) {
//    // console.log("I value =>", myArray[i]);
//    for (let j = 0; j <= i; j++) {
//      console.log("I value =>", myArray[i]);
//      console.log("J value =>", myArray[j]);
//    }
//    console.log(">>>>>>>>>>>");
//  }