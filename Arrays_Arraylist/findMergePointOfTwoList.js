const findMergePoint = (list1, list2) => {
	const hash = {};
	let longestList = list1.size > list2.size ? list1.head : list2.head;
	let smallestList = list1.size < list2.size ? list1.head : list2.head;
	
	 console.log(longestList)
	while(longestList.next) {
		
		hash[longestList.value] = longestList.next.value;
		longestList = longestList.next;
	}
	while(smallestList.next){
		if (hash[smallestList.value] === smallestList.next.value) {
			return smallestList.next.value;
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
		}
		this.tail.next = this.node(value);
		this.tail = this.tail.next
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

const listTwo = new linkList();
listTwo.insert(1)
listTwo.insert(3)
listTwo.insert(4)
console.log(listTwo.head.next)

console.log(findMergePoint(listOne, listTwo));