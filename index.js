function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
    O(n^2)
*/

/*
  In my own words
    Function takes 2 arguments; an array and target. 
    if any 2 numbers in the array add up to the target
    then return true, otherwise return false
*/

/* 
  Add your pseudocode here
    create a for loop 
      if the number in array is less than target push into new array
      look through each item in the array 
        look through the rest of the pile 
          check if first and second add to the target 
          if so return true 
      else return false    
*/

/*
  Add written explanation of your solution here
    iterate through array once, to get our first number
    (using to a for loop to accomplish this, storing number as i)
    iterate through array a second time to get our second number 
    (using to a for loop to accomplish this, storing number as j)
    add the two numbers togeter to see if the sum equals the target 
    (Using bracket notation to access values in the array)
    if sum equals target return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0, 1, 2], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 12, 4, 3, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([6], 6));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 6));
}

module.exports = hasTargetSum;
