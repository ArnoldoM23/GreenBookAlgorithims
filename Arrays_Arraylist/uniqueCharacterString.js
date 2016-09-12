// Implement an algorithm to determine if a string has all unique characters. 
// You can only use arrays.

var unique = function(string){
	var alphabet = [];
	if (string.lengh > 26) {
		return false;
	}
	for(var i = 0; i < string.length; i++){
		if (alphabet.indexOf(string[i]) === -1) {
			alphabet.push(string[i]);
		}else{
			return false;
		}
	}
	return true;
}
console.log(unique("uniqe "))
