// Palidrome: Implement a function to check if a linked list is a palindrome.

function isPalindrome(linkedList) {
	let originalList = '';
	let reversed = '';
	let current = linkedList;
	let temp = previous = null;
	while(current) {
		originalList += current.value;
		temp = current.next;
		current.next = previous;
		previous = current;
		reversed = previous.value + reversed;
		current = temp;
	}
	return originalList === reversed;
}

console.assert(isPalindrome({value: 1, next: {value: 5, next:{ value: 1, next:null }}}) === true);
console.assert(isPalindrome({value: 1, next: {value: 5, next:{ value: 2, next:null }}}) === false);