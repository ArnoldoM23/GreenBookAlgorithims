/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

// implemented with reduce

var balancedParens = function(string){

	return !string.split('').reduce(function(prev, curr){
		if(prev < 0) {return prev}
		if ( curr === "(" ) { return ++prev}
		if ( curr === ")" ) { return --prev}
		return prev;
	}, 0)
}
console.log(balancedParens('()()'))



// implemented with a stack.

// var balancedParens = function(input){
// 	var stack = [];
// 	var brackets = {
// 		"[": "]",
// 		"{": "}",
// 		"(": ")"
// 	};

// 	var flag = false;
// 	for(var i = 0; i < input.length; i++){
// 		if (input[i] === "{" || input[i] === "(" || input[i] === "[") {
// 			stack.push(input[i]);
// 		}
// 		if (input[i] === "}" || input[i] === ")" || input[i] === "]") {
// 			var current = stack.pop();
// 			if (brackets[current] === input[i]) {
// 				flag = true;
// 			}else{
// 				return false;
// 			}
// 		}
// 	}
// 	if (stack.length > 0) {
// 		return false;
// 	}
// 	return flag;
// };



