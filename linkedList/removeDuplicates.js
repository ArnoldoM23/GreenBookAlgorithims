// Write code that removes duplicates from an unsorted linked list.


function removedDuplicated(linklist){
	const duplicates = {};
	function recurse(currentNode, prevNode){
		if (currentNode === null) {
			return;
		}
		if (!duplicates[currentNode.value]) {
			duplicates[currentNode.value] = true;
			recurse(currentNode.next, currentNode)
		} else {
			prevNode.next = currentNode.next;
			currentNode.next = null;
		}
	}
	recurse(linklist, linklist);
	return linklist
}


console.log(removedDuplicated())