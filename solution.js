// ## Problem Statement:
// * Write a node program
// * It takes unlimited command line arguments
// * Goes through each and prints out the sum
// * Skips arguments that aint whole number
// * Do not support whole numbers

var arguments = process.argv;
var numbers = arguments.slice(2);

function splitArray(nums) {
  console.log('In SplitArray.nums: ', nums)
}

splitArray(numbers);