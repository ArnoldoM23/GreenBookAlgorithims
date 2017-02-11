// Implement an algorithm to delte a node in the middle (any node but the first or last, not neccessarily the exact middle) of a singly linked list, given only access to that node.

function deleteMiddleNode(linkedlist) {
	let node = linkedlist;
	// if given entire list and removing the middle node
	// let counter = 0;
	// let middleIndex;
	// while(node){
	// 	counter++;
	// 	node = node.next;
	// }
	// middle = Math.floor(counter / 2);
	// counter = 0;
	// node = linkedlist;
	// while(counter < middle){
	// 	if (counter === middle - 1 && node.next !== null) {
			// let temp = node.next
			// node.next = temp.next;
			// temp.next = null;
	// 	}
	// 	counter++
	// 	node = node.next;
	// }

	// Given access to the node.
	let temp = node.next
	node.next = temp.next;
	temp.next = null;
	return linkedlist;
} 

const testList = {value: 1, next: {value: 2, next:{value: 3, next:{value: 4, next:null}}}}

console.log(deleteMiddleNode(testList))