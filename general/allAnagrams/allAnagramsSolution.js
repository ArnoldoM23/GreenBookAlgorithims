/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
// create an object to store the each anagram. The onject will also prevent from having duplicates
  var uniqueOutput = {};
// create a subrutine that will recurse. It should take an empty string will use to add the letters of each anagram. The second parameter should be the string that we are making anagrams of.
  (function anagram (ana, str) {
    // base case. If the string being passed in is empty create a new property in our storage object with the anagram as the key and give it a value of 1 or true.
    if (str === '') { uniqueOutput[ana] = true; }
// loop over the length of the string that is being passed in.
    for(let i = 0; i < str.length; i++){
    // invoke the recursive function passing in the empty string and concatnate it with the current letter. The second parameter will be the string being sliced starting at zero and slicing the number of i. plus concatate it with the another slice of the string starting at i plus one.
      anagram(`${ana}${str[i]}`, `${str.slice(0, i)}${str.slice(i + 1)}`)
    }
    // invoke the recursive function passing in an empty string as the anagram and the string being checked as the second parameter.
  })('', string);
// once completed return the the object keys as an array this can be done by using Object.keys method.
  return Object.keys(uniqueOutput);
};


console.log(allAnagrams('abc'))
















