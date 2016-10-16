// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str, compare){
  if(str === compare) {return true;}

  if(str.length === compare.length){
    for(var i = 0; i<str.length; i++){
      var j=0; //counter
      if (str.charAt(i) !== compare.charAt(i)){
        j++;
      }
    }
    if j
  }
  if(str.length === compare.length+1 || str.length === compare.length-1){

  }
  else return false;
}