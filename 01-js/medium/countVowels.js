/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ["a", "e", "i", "o", "u", "A", "O", "I", "E", "U"]
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) /*finding that the element of string is 
      present in the vowels array or not. if present then increment the count variable by 1*/ {
            count++;
        }
    }
    return count;
}

module.exports = countVowels;