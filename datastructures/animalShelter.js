// Animal Shelter: An animal shelter, which holds only dogs and cats, operaters on a striclu 'Firts in fist out basis'. People adopy either the oldest based on arrival time of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and ilplement operations such as enqueue, dequeueAny, dequeueDog, and DequeueCat. 

function AnimalShelter() {
	this.dogQueue = [];
	this.catQueue = [];
	this.counterQueue = [];
	this.dogCounter = 0;
	this.catCounter = 0;
	this.flag;
}

AnimalShelter.prototype.enqueue = function(animal) {
	if (this.flag === undefined) {
		this.flag = animal;
	}
	if (animal === 'dog') {
		if (this.flag !== animal) {
			this.counterQueue.push({ type: 'Cat', counter:  this.catCounter });
			this.catCounter = 0;
			this.flag = animal;
		}
		this.dogQueue.push(animal);
		this.dogCounter++
	}
	if (animal === 'cat') {
		if (this.flag !== animal) {
			this.counterQueue.push({ type: 'Dog', counter:  this.dogCounter });
			this.dogCounter = 0;
			this.flag = animal;
		}
		this.catQueue.push(animal)
		this.catCounter++
	}
}

AnimalShelter.prototype.dequeueAny = function() {
	if(this.counterQueue[0].counter > 0) {
		let dequeue = `dequeue${this.counterQueue[0].type}`
		return this[dequeue]();
	}
	if (this.counterQueue[0].counter <= 0) {
		this.counterQueue[0].shift();
	}
}

AnimalShelter.prototype.dequeueDog = function() {
	if (this.dogQueue.length > 0) {
		if (this.counterQueue.length > 0 ) {
			for (var i = 0; i < this.counterQueue.length; i++) {	
				if (this.counterQueue[i].type === 'Dog') {
					this.counterQueue[i].counter -= 1;
					if(this.counterQueue[i].counter <= 0) {
						this.counterQueue.splice(i, 1);
					}
					return this.dogQueue.shift();	
				}
			}
		}
		return this.dogQueue.shift();
	}
}

AnimalShelter.prototype.dequeueCat = function() {
	if (this.catQueue.length > 0) {
		if (this.counterQueue.length > 0 ) {
			for (var i = 0; i < this.counterQueue.length; i++) {	
				if (this.counterQueue[i].type === 'Cat') {
					this.counterQueue[i].counter -= 1;
					if(this.counterQueue[i].counter <= 0) {
						this.counterQueue.splice(i, 1);
					}
					return this.catQueue.shift();	
				}
			}
		}
		return this.catQueue.shift();
	}
}



const TestShelter = new AnimalShelter();
TestShelter.enqueue('dog');
TestShelter.enqueue('dog');
TestShelter.enqueue('cat');
TestShelter.enqueue('dog');
TestShelter.enqueue('dog');
TestShelter.enqueue('cat');
TestShelter.enqueue('cat');
TestShelter.enqueue('cat');
TestShelter.enqueue('dog');
console.log(TestShelter)
console.log(TestShelter.dequeueAny())
console.log(TestShelter)
console.log(TestShelter.dequeueDog())
console.log(TestShelter.dequeueDog())
console.log(TestShelter.dequeueAny())
console.log(TestShelter)	


