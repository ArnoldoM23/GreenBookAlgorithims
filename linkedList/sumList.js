// Sum List: You have a two numbers represented by a linked list, whre each node cntains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two number and returns the sum as linked list;

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) that is (617 + 295)
// Output: 2 -> 1 -> 9 that is 912

function sumList(linkedList1, linkedList2) {
	const resultList = new LinkedList();
	function recurse(linkedList1, linkedList2, remainder){
		if (!linkedList1 && !linkedList2) {
			return;
		}
		remainder += linkedList1.value + linkedList2.value;
		let numbers = remainder + '';
		if (numbers.length > 1) {
			remainder = Number(numbers[0])
			resultList.addToTail(Number(numbers[1]));
		} else {
			resultList.addToTail(remainder);
			remainder = 0;
		}
		recurse(linkedList1.next, linkedList2.next, remainder);
	}
	recurse(linkedList1, linkedList2, 0);
	return resultList;
}

var LinkedList = function(){
  this.head = null;
  this.tail = null;
}
LinkedList.prototype.addToTail = function(value){
  var node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  }else{
    this.tail.next = node;
    this.tail = this.tail.next; 
  }
};

function Node(value){
  this.value = value;
  this.next = null;
};

let number1 = {value: 7, next: {value: 1, next:{ value: 6, next:null }}};
let num2 = {value: 5, next: {value: 9, next:{value: 2, next:null}}};
console.log(sumList(number1, num2))







