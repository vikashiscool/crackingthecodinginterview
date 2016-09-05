//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabccccaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letter (a-z).


// Input: aabccccaa  
// Output:  a2b1c5a3

// Pseudocode

function compressString(str){

  var obj = {}; //create empty object
  //convert string to an object (obj) with keys as letters and values as count
  for (var i = 0; i<str.length; i++){
    var letter = str[i];
    if (!(letter in obj)){
      obj[str[i]] = 1; //use bracket notation because str[i] is a string. If you're dealing with variable names, then you use dot-notation. If you're dealing with a STRING as a key, then you have to use brackets. You CAN'T use obj."blah"... only obj["blah"]
      // http://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets
    }
    else{
      obj[str[i]] += 1;
    }       
  }
//create new array literal kvObjectToArray that will have all keys and values pushed to it as you iterate through obj
  var kvObjectToArray = [];
// //iterate through the object for(key in object)
  for (keys in obj){
// //push keys and values into a new array
    kvObjectToArray.push(keys);
    kvObjectToArray.push(obj[keys]);
  }

  var output = kvObjectToArray.toString().replace(/\,/g,"");  //Convert the array to a string and use regex to replace commas in that string with a nothing (basically, splice out commas)
  return output;
}


//JSON.stringify(object) //Converse JS values to JSON strings, optionally 







function pairSumSequence(n){
  var sum = 0;
  for(var i=0; i<n; i++) {
    sum += pairSum(i, i+1);
  }
  return sum;
}

function pairSum(a, b){
  return a + b;
}
