// given a string write a fucntion to check if it si a permutation of a palindrome. 
// a palindrome is a word of phrase that is the same forwards and backwords. 
// a permutation is a rearrangement of letters.  The palindrome does not need to be limited
// to just dictionary words.  



function palindromePermutation (string) {
	var dict = {};
	var sumOfLetters = 0;
	
	var str = string.replace(/\s/g, ""); 
	
	for(i=0; i<str.length; i++) {
	 	if (!(str[i] in dict)) {
			dict[str[i]] = 1;
		}
		else {
			dict[str[i]] += 1;
		}	
	}
	
	for (var key in dict) {
		sumOfLetters += dict[key] % 2; 
	}

	return sumOfLetters < 2;
	
}


palindromePermutation('ab') //-> False
palindromePermutation('aba') //-> True
palindromePermutation('Tact Coa') //-> True





 

