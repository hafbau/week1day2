// ## Problem Statement:
// * Write a node program
// * It takes unlimited command line arguments
// * Goes through each and prints out the sum
// * Skips arguments that aint whole number
// * Do not support whole numbers

var arguments = process.argv;
var numbers = arguments.slice(2);

function sumNumber(nums) {
  var sum = 0, len = nums.length;
  for(let i = 0; i < len; i++) {
    var number = Number(nums[i]);
    if(number && number > 0) {
      sum += number
    }
  }
  return sum
}

console.log(sumNumber(numbers));