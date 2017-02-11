// Intersection: Given two (singly) linked lists, determine if the two lists intersect. Retrun the intesectind node. Node that

const findMergePoint = (list1, list2) => {
	const hash = {};
	let longestList = list1.size > list2.size ? list1.head : list2.head;
	let smallestList = list1.size < list2.size ? list1.head : list2.head;
	while(longestList.next) {
		hash[longestList.value] = longestList.next.value;
		longestList = longestList.next;
	}
	while(smallestList.next){
		if (hash[smallestList.value] === smallestList.next.value) {
			return smallestList;
		}
		smallestList = smallestList.next;
	}
	return null;
}

const linkList = function () {
	this.head = null;
	this.tail = null;
	this.size = 0;
}

linkList.prototype = {
	insert(value){
		if (!this.head) {
			this.head = this.node(value);
			this.tail = this.head;
			this.size++;
		}
		this.tail.next = this.node(value);
		this.tail = this.tail.next
		this.size++;
	},
	node(value){
		return { value: value, next: null };
	}
}


const listOne = new linkList();
listOne.insert(1)
listOne.insert(2)
listOne.insert(3)
listOne.insert(4)
listOne.insert(5)

const listTwo = new linkList();
listTwo.insert(1)
listTwo.insert(1)
listTwo.insert(3)
listTwo.insert(4)
// console.log(listTwo.head.next)

console.log(findMergePoint(listOne, listTwo));