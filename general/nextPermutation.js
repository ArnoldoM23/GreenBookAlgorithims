/* Basic version */
/* 
 * Computes the next lexicographical permutation of the specified array of numbers in place,
 * returning whether a next permutation existed. (Returns false when the argument
 * is already the last possible permutation.)
 */


function nextPermutation(string){
 	string = string.split('');
 	let i = string.length - 1;
 	while(i > 0 && string[i - 1] >= string[i]){
 		i--;
 	}
 	if (i  <= 0) {
 		return 'No Answer';
 	}
 	let j = string.length - 1;
 	while(string[j] <= string[i - 1]){
 		j--;
 	}
 	let temp = string[i - 1];
 	string[i - 1] = string[j]
 	string[j] = temp;
 	j = string.length - 1;
 	while(i < j){
 		temp = string[i];
 		string[i] = string[j];
 		string[j] = temp;
 		i++;
 		j--;
 	}
 	return string.join('');
}

console.log(nextPermutation('dkhc'))