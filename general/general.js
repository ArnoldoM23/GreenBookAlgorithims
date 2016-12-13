// var nouns = ['phone', 'photo','graphe','theos'];
// var gender = ['male', 'female', 'nueter'];
// var number = ['single', 'plural'];
// var cases = ['gen', 'acuse', 'nome', 'dat'];

//  function genertor() {
//  	var randomNouns = Math.floor(Math.random() * nouns.length )
//  	var randomGender  =  Math.floor(Math.random() * gender.length  )
//  	var randomNum  =  Math.floor(Math.random() * number.length )
//  	var randomCase  =  Math.floor(Math.random() * cases.length )
//  	console.log(nouns[randomNouns] + ": " + gender[randomGender]  + ': ' + number[randomNum] + ": " +cases[randomCase])
//  }


//  genertor();


//  function percentageMaker(numberOfQuestions){

//  	for (var i = numberOfQuestions; i >= 0; i--) {
//  		 console.log("number of correct answers: " + i,  "percentage: " +Math.floor( (i / numberOfQuestions) * 100))
//  	}

//  }
// percentageMaker(17)

//find the median in a stream





// --- Day 1: No Time for a Taxicab ---

// You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny Recruiting Document the Elves intercepted start here, and nobody had time to work them out further.

// The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.

// There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?

// For example:

// - Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
// - R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
// - R5, L5, R5, R3 leaves you 12 blocks away.

// How many blocks away is Easter Bunny HQ?

// Input: R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2

// Output: Number of blocks