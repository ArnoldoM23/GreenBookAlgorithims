/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
	const characters = {};
	const result = [];
	let counter = 0;
	for (var i = 0; i < string.length; i++) {
		if(!characters[string[i]]) {
			characters[string[i]] = { index: counter };
			result[counter] = [string[i], 1]
			counter++
		}else{
			result[characters[string[i]].index][1]++ ;
		}
	}
	result.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] > b[0];
		} else{
			return a[1] < b[1];
		}
	})
	return result
  // return result;
};


console.log(characterFrequency('miaaiaaippi'))

