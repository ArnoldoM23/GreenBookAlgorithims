// 1. Given a dictionary mapping keys to values, return the 3 keys mapping to the top 3 values.
// {'e': 5, 'a': 7, 'c': 3, 'd': 10, 'b': 8}
// -> ['d', 'b', 'a']

function mappingKeysToValues(list) {
	// const result = [];
	// const inList = {};
	// let largest = 0;
	// let largestKey;
	// while(result.length < 3){
	// 	for(var key in list){
	// 		if (!inList[key]) {
	// 			if (list[key] > largest) {
	// 				largest = list[key];
	// 				largestKey = key;
	// 			}
	// 		}
	// 	}
	// 	inList[largestKey] = true;
	// 	result.push(largestKey);
	// 	largestKey = '';
	// 	largest = 0;
	// }

	// Linear algorithm
	const result = [];
	let num1 = 0;
	let num2 = 0;
	let num3 = 0;
	let key1, key2, key3; 
	for(var key in list){
		if (list[key] > num1) {
			key3 = key2;
			key2 = key1;
			key1 = key;
			num3 = num2;
			num2 = num1;
			num1 = list[key];
		}else if(list[key] > num2){
			key3 = key2;
			key2 = key;
			num3 = num2;
			num2 = list[key];
		}else if (list[key] > num3) {
			key3 = key;
			num3 = list[key];
		}
	}
	result.push(key1, key2, key3)
	return result;
}

console.log(mappingKeysToValues({'e': 5, 'a': 7, 'c': 3, 'd': 10, 'b': 8}))