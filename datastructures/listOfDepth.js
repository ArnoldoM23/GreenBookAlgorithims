// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth


function listOfDepth(binaryTree) {
	const result = [];
	const queue = [binaryTree];
	let counter = 0, depthLength = queue.length, current;
	let list = new LinkedList();
	while(queue.length) {
		if (counter === depthLength) {
			counter = 0;
			depthLength = queue.length;
			result.push(list);
			list = new LinkedList();
		} else {
			current = queue.shift();
			list.addToTail(current.value)
			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
			counter++
		}	
	}
	result.push(list);
	return result;
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

let testTree = {
	value: 3,
	right: { 
		value: 5, 
		right: {value: 6, right: {value: 10, right: null, left: null } , left: {value: 11, right: null, left: null }  } , 
		left: {value: 4, right: {value: 12, right: null, left: null } , left: {value: 13, right: null, left: null }  }, 
	},
	left: { 
		value: 2, 
		right: {value: 3, right: {value: 14, right: null, left: null } , left: {value: 15, right: null, left: null }  } , 
		left: {value: 1, right: {value: 16, right: null, left: null } , left: {value: 17, right: null, left: null }  } 
	}
}

console.log(listOfDepth(testTree))
