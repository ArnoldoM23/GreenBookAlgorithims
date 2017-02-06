// imagine a histogram (bar graph ). Design algorithm to compoute the volume of water it could hold if someone poured water accross the top. You can assume htat each histogram bar has a width on 1.

// input= [0,0,4,0,0,6,0,0,3,0,5,0,1,0,0]
// output = 26;


// function howMuchWaterContain(list){
// 	// iterate over list and find the largest number and store the index as a midpoint
// 	// iterate from midpoint to left to find the next largest bar 
// 	// iterate from midpoint to right to find the next largest bar
// 	// calculate 
// }

var input = [1, {a: 2}, [3], [[4, 5], 6], 7];
function flatten(input){
	var placeholder = [input], output= [], i, lastIndex = [-1];
	while(placeholder.length){
		input = placeholder.pop();
		i = lastIndex.pop() + 1;
		console.log("placeholder", placeholder, "lastIndex", lastIndex)
		for (; i < input.length; i++) {
			if (Array.isArray(input[i])) {
				console.log("inside if",input[i])
				placeholder.push(input);
				lastIndex.push(i);
				input = input[i];
				i = -1;
			}else{
				output.push(input[i])
			}
		}
	}
	return output;
}

console.log(flatten(input))