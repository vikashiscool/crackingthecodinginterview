// Given a string, write a function to check if it is a permutation of a palindrome (same backward and forward). Permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// Test cases:
// Input: cat act
// Output: true

//Pseudocode:
//Eliminate white space
//Iterate through the String
//Create a dictionary that gives you the number of times each letter is encountered. 

//2 cases
// If an even number of characters, iterate through the string, create a dictionary, and if the value for each key (character) is even, then return true.
// If an odd number of characters, iterate through the string, create a dictionary, and if the value for each key (character) is even plus one allowable odd, return true. 

function palindromePermutation(word){
  //remove white space and push to new string
  var dictionary = {};
  var stringNoSpaces = word.replace(/\s/g, "");
  var sumOfLetters = 0;

  if (stringNoSpaces.length === 0 || stringNoSpaces.length === 1) {return true;}
  else{

  for(var i = 0; i<stringNoSpaces.length; i++){
    var key = stringNoSpaces[i];
    if(!(key in dictionary)) {
      dictionary[stringNoSpaces[i]] = 1;
      //add key to dictionary with value of 1
    } else {
      dictionary[stringNoSpaces[i]] += 1;
    }
  }
}
  for (var key in dictionary){
    sumOfLetters += dictionary[key] % 2;
    // if(stringNoSpaces.length % 2 === 0 && dictionary[key] % 2 === 0) {
    //   return true;}
    // else if(stringNoSpaces.length % 2 === 1 &&  ){
    //   return true;}
    // else {
    //   return false;}
  }

  return sumOfLetters < 2;


}