// write a method that receives one argument (string) and outputs that string with its letters in reverse order
function reverseString(str) {
  // if str = "", then return str
  if(str === "") return str;

  // create an empty array that will hold the reversed string (as an array)
  let reversedString = [];

  // convert str string argument to array
  str = [...str];

  // loop over the letters in the argument (str), starting from the beginning of the string
  for(i in str) {
    // add ("unshift") each letter to the BEGINNING of the reversed string variable
    reversedString.unshift(str[i]);
  }

  // convert the reversed string array to a string
  reversedString = reversedString.join('');

  // return reversed string variable
  return reversedString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'emop'");
  console.log("=>", reverseString("pome"));
  
  console.log("");

  console.log("Expecting: ''");
  console.log("=>", reverseString(""));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
