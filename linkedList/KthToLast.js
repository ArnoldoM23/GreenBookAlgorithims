// Implement an algorithm to find the Kth to last element of a singly linked list.


function findKToLast(linkedlist, Kth){
	let reversedList = temp = null;
	let current = linkedlist;
	while(current){
		temp = current.next;
		current.next = reversedList;
		reversedList = current;
		current = temp;
	}
	let i = 1;
	while(i <= Kth){
		if (i === Kth) {
			return reversedList.value
		}
		reversedList = reversedList.next;
		i++
	}
}

console.log(findKToLast({value: 1, next: {value: 2, next:{value: 3, next:null}}}, 2))