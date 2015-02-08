/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
  var largerNum;
  
  if (num1 > num2){
    largerNum = num1;
    return largerNum;
  } else {
    largerNum = num2
    return largerNum;
  }
    
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    var largestNum;
    var largerOfFirst2;
    
    if (num1 > num2){
      largerOfFirst2 = num1;
    } else {
       largerOfFirst2 = num2;
    } 
    
    if (largerOfFirst2 > num3){
      largerOfFirst2 = largestNum;
    } else {
       largestNum = num3;
    }

    return largestNum;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// *** make an array of vowels. create loop that takes character and compares to array. if character equals one of the vowels, return true, if not, return false.
// ?? how do you make a loop that compares to array? ?? 
// ---------------------

function isVowel(char){
    var vowels = "aeiou".split();
   
    hasVowel = false;
vowels.forEach(function(currentVowel){
  if (char === currentVowel) {
    hasVowel = true;
  }
});
  return hasVowel;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers){
    var answer = numbers.reduce(function(check, please){
     return check + please;});
};

function multiply(numbers){
    var numsMultiplied = numbers.reduce(function(memo, item){
    return memo + item;      )
    }


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
//
// *** .split makes an array out of the string. .reverse flips each cell of the array around. .join takes an array and turns it back into a string.***
// ---------------------

function reverse(string){
    return string.split("").reverse().join("");
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var theLength = 0;
    var longest;
    for (var index = 0; index < words.length; index++){
      if (words[index].length > theLength){
        var theLength = words[index].length;
        longest = words[index];
      }
    } return longest.length;

}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}