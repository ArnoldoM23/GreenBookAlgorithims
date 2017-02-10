// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height;

function minimalTree(treeList){
	let midpoint = Math.floor(treeList.length / 2);
	let miniTree = new BinarySearchTree(treeList.splice(midpoint, 1)[0]);
	let rightSide = treeList.slice(midpoint);
	let leftSide = treeList.slice(0, midpoint);
	while(leftSide.length > 0 || rightSide.length > 0) {
		let leftMidpoint = Math.floor(leftSide.length / 2);
		let rightMidpoint = Math.floor(rightSide.length / 2);
		if (leftSide.length) {
			miniTree.insert(leftSide.splice(leftMidpoint, 1)[0]);
		}
		if (rightSide.length) {
			miniTree.insert(rightSide.splice(rightMidpoint, 1)[0]);
		}
	}
	return miniTree;
}

var BinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
	if (value > this.value) {
		if (this.right === null) {
			this.right = new BinarySearchTree(value);
		}else{
			this.right.insert(value);
		}
	} else if(value < this.value) {
		if (this.left === null) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	}
}


let testList = [1,2,3,4,5]

let testTree = {
	value: 3,
	right: { 
		value: 5, 
		right: null, 
		left: {value: 4, right: null, left: null }, 
	},
	left: { 
		value: 2, 
		right: null, 
		left: {value: 1, right: null, left: null } 
	}
}
let test1 = JSON.stringify(minimalTree(testList));
let test2 = JSON.stringify(testTree);

console.assert(test1 === test2)

