// You’re given the pointer to the head node of a linked list. Change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

// Input Format 
// You have to complete the Node* Reverse(Node* head) method which takes one argument - the head of the linked list. You should NOT read any input from stdin/console.

// Output Format 
// Change the next pointers of the nodes that their order is reversed and return the head of the reversed linked list. Do NOT print anything to stdout/console.

// Sample Input

// NULL 
// 2 --> 3 --> NULL

// Sample Output

// NULL
// 3 --> 2 --> NULL
// Explanation 
// 1. Empty list remains empty 
// 2. List is reversed from 2,3 to 3,2
// 3. Time constraint linear
// { v: 1, { v:2, n:{ v:3, n: { v:4, n:{ v:5, n:null } } } } }
function Node(value){
	this.value = value;
	this.next = null;
}


function reverseLinkList(linkedList) {
	// Iterate over list and get the length;
	// var values = [];
	// while(linkedList){
	// 	values.unshift(linkedList.value);
	// 	linkedList = linkedList.next;
	// }
	// var reversedList = new Node(values.shift());
	// var node = new Node(values.shift());
	// reversedList.next = node
	// while(values.length > 0){
	// 	node.next = new Node(values.shift());
	// 	node = node.next;
	// }
	// return reversedList;
	// time complexity: O(n) = linear;
	// space complexity: O(n) = linear;
	let current = linkedList;
	let previous = temp = null;
	while(current !== null) {
		temp = current.next;
		current.next = previous;
		previous = current;
		current = temp;
	}
	return previous
	// time complexity: O(n) = linear;
	// space complexity: O(1) = constants space;
}

console.log(reverseLinkList({ value: 1, next:{ value:2, next:{ value:3, next: { value:4, next:{ value:5, next:null } } } } }))