var MedianStream = function () {
  // TODO: Implement!
  this.maxHeap = [];
  this.minHeap = [];
};

MedianStream.prototype = {
  insert: function (val) {
    if (this.maxHeap.length === 0 && this.maxHeap.length === 0) {
    	this.maxHeap.push(val);
    }else if (val > this.peekMedian()) {
    	this.heapInsert(val, 'min');
    }else{
    	this.heapInsert(val, 'max');
    }
  },
  peekMedian: function () {
  	if (this.maxHeap.length > this.minHeap.length || this.minHeap.length > this.maxHeap.length) {
  		return this.maxHeap.length > this.minHeap.length ? this.maxHeap[0] : this.minHeap[0];
  	}
  	return (this.maxHeap[0] + this.minHeap[0]) / 2; 
  },
  size: function () {
    return this.maxHeap.length + this.minHeap.length;
  },
  heapInsert: function(val, minOrMax){
  	var heap = minOrMax + 'Heap';
  	this[heap].push(val);
    if (Math.abs(this.minHeap.length - this.maxHeap.length) >= 2) {
    	minOrMax === 'min' ?  this.heapInsert(this.minHeap.shift(), 'max') : this.heapInsert(this.maxHeap.shift(), 'min')
    }
    var i = this[heap].length - 1;
    var current = this[heap][i];
    var parentIndex = this.findParentIndex(i);
    var parent = this[heap][parentIndex];
    if (minOrMax === 'min' && parent > current) {
    	this.minHeap[parentIndex] = current;
    	this.minHeap[i] = parent;
    }
    if (minOrMax === 'max' && parent < current) {
    	this.maxHeap[parentIndex] = current;
    	this.maxHeap[i] = parent;
    }
  },
  findParentIndex: function(i){
  	var test = Math.floor((i - 1) / 2);
    return test;
  },
  findChildIndeces: function(parentIndex){
    return {
        child2: (parentIndex * 2) + 1,
        child1: parentIndex * 2
    }
  }
};


 var mStream = new MedianStream();
 mStream.insert(1);
 mStream.insert(7);
 mStream.insert(2);
 mStream.insert(6);
 mStream.insert(5);
 console.log(mStream.peekMedian()); 
 // [1,2,6,7,5]
 // child1 3
 // child2  
 
 // console.log(Math.floor((4 - 1) / 2))
