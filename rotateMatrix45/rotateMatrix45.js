/* jshint esversion: 6 */

/*
 * Rotate a matrix 45 degrees to the right.
 *
 *    Input:    |  Output:
 * -------------+-------------
 * [[10,11,12], | [ [10],
 *  [13,14,15]] |  [13,11],
 *              |  [14,12],
 *              |   [15] ]
 * -------------+-------------
 * [[10,11],    | [ [10],
 *  [12,13],    |  [12,11],
 *  [14,15]]    |  [14,13],
 *              |   [15] ]
 * -------------+-------------
 * [[10,11,12], | [  [10],
 *  [13,14,15], |   [13,11],
 *  [16,17,18]] |  [16,14,12],
 *              |   [17,15],
 *              |    [18]  ]
 */

const rotateMatrix45 = matrix => {
  // Your crappy code here
  const rotatedMatrix = [];
  matrix.forEach((sub, i) => {
  	let counter = i;
  	sub.forEach((val, j) => {
  		if (!rotatedMatrix[counter]) {
  			rotatedMatrix[counter] = [];
  		} 
  		rotatedMatrix[counter++].unshift(val)
  	})
  })
  return rotatedMatrix; 
};

// console.log( rotateMatrix45([ [10,11],[12,13], [14,15] ]) )



/*  --=*=--  Tests below.  Do not modify.  --=*=--  */

const expect = require('chai').expect;
const matrix = require('./inputsAndOutputs.js').matrix;
const answer = require('./inputsAndOutputs.js').answer;

// // Basics
expect( rotateMatrix45 ).to.exist;
expect( rotateMatrix45 ).to.be.a( 'function' );
expect( rotateMatrix45( matrix.twoByTwo ) ).to.be.an( 'array' );

// // // Square Matrices
expect( rotateMatrix45( matrix.oneByOne ) ).to.eql( answer.oneByOne );
expect( rotateMatrix45( matrix.twoByTwo ) ).to.eql( answer.twoByTwo );
expect( rotateMatrix45( matrix.threeByThree ) ).to.eql( answer.threeByThree );
expect( rotateMatrix45( matrix.fourByFour ) ).to.eql( answer.fourByFour );
expect( rotateMatrix45( matrix.fiveByFive ) ).to.eql( answer.fiveByFive );

// // // Tall Matrcies
expect( rotateMatrix45( matrix.twoByThree ) ).to.eql( answer.twoByThree );
expect( rotateMatrix45( matrix.twoByFour ) ).to.eql( answer.twoByFour );
expect( rotateMatrix45( matrix.twoByFive ) ).to.eql( answer.twoByFive );
expect( rotateMatrix45( matrix.threeByFour ) ).to.eql( answer.threeByFour );
expect( rotateMatrix45( matrix.threeByFive ) ).to.eql( answer.threeByFive );
expect( rotateMatrix45( matrix.fourByFive ) ).to.eql( answer.fourByFive );

// // Wide Matrices
expect( rotateMatrix45( matrix.threeByTwo ) ).to.eql( answer.threeByTwo );
expect( rotateMatrix45( matrix.fourByTwo ) ).to.eql( answer.fourByTwo );
expect( rotateMatrix45( matrix.fourByThree ) ).to.eql( answer.fourByThree );
expect( rotateMatrix45( matrix.fiveByTwo ) ).to.eql( answer.fiveByTwo );
expect( rotateMatrix45( matrix.fiveByThree ) ).to.eql( answer.fiveByThree );
expect( rotateMatrix45( matrix.fiveByFour ) ).to.eql( answer.fiveByFour );
