// Imagine a (literal) stack of plates. If the stack gets too hight, it might toopple. Therefore, in real life, we would likely start a new stack when the previousstackexceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create new stack once the provious one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave indentically to a single stack. That is, pop() should return the same vaues as it would if there were just a single stack.


function SetOfStacks() {
	this.stackContainer = [[]];
	this.threshold = 2;
};

SetOfStacks.prototype.push = function(value) {
	if (this.stackContainer[this.stackContainer.length - 1].length < this.threshold) {
		this.stackContainer[this.stackContainer.length - 1].push(value);
	} else {
		this.stackContainer.push([]);
		this.stackContainer[this.stackContainer.length - 1].push(value);
	}
	// time complexity is O(1);
};

SetOfStacks.prototype.pop = function() {
	if (this.stackContainer[this.stackContainer.length - 1].length > 0) {
		return this.stackContainer[this.stackContainer.length - 1].pop();
	} else {
		this.stackContainer.pop();
		return this.stackContainer[this.stackContainer.length - 1].pop();
	}
	// time complexity is O(1);
}

SetOfStacks.prototype.popAtIndex = function(index) {
	const poped = this.stackContainer[index].pop();

	for(var i = index + 1; i < this.stackContainer.length; i++){
		if (this.stackContainer[i].length) {
			this.stackContainer[i - 1].push(this.stackContainer[i].shift());
		} else {
			this.stackContainer.pop()
		}
	}


	// can just return pop item at index if you dont care for arranging stacks
	// return this.stackContainer[index].pop();
}


const stacksOnStack = new SetOfStacks();
stacksOnStack.push(1)
stacksOnStack.push(2)
stacksOnStack.push(3)
stacksOnStack.push(4)
stacksOnStack.push(5)
stacksOnStack.push(6)
stacksOnStack.push(7)
console.log(stacksOnStack.stackContainer)
stacksOnStack.pop()
stacksOnStack.popAtIndex(1)
stacksOnStack.popAtIndex(0)
stacksOnStack.pop()
stacksOnStack.popAtIndex(0)
stacksOnStack.pop()
console.log(stacksOnStack.stackContainer)
