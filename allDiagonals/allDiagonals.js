/* jshint esversion: 6 */

/*
 * Given a matrix, return all diagonals.
 *
 *    Input:    |  Output:
 * -------------+-------------
 * [[10,11,12], | [[13],
 *  [13,14,15]] |  [10,14],
 *              |  [11,15],
 *              |  [12],
 *              |  [10],
 *              |  [11,13],
 *              |  [12,14],
 *              |  [15]]
 * -------------+-------------
 * [[10,11],    | [[14],
 *  [12,13],    |  [12,15],
 *  [14,15]]    |  [10,13],
 *              |  [11],
 *              |  [10],
 *              |  [11,12],
 *              |  [13,14],
 *              |  [15]]
 * -------------+-------------
 * [[10,11,12], | [[16],
 *  [13,14,15], |  [13,17],
 *  [16,17,18]] |  [10,14,18],
 *              |  [11,15],
 *              |  [12],
 *              |  [10],
 *              |  [11,13],
 *              |  [12,14,16],
 *              |  [15,17],
 *              |  [18]]
 */
const allDiagonals = matrix => {
  // Your crappy code here
  const newMatrix = [];
  const length = matrix.length;
  if (length === 1) {
  	return matrix
  }
  
  for (var i = length - 1; i >= 0 ; i--) {
  	if(i === 0){
  		newMatrix.push(makeDiagnolArray(i, 0, length, matrix, "MAJOR"))
  		matrix[0].forEach((val, j) => {
  			if (j !== 0) {
  				newMatrix.push(makeDiagnolArray(i, j, length, matrix, "MAJOR"))
  			}
  		})
  		newMatrix.push([matrix[i][i]])
  	}else{
  		
  		newMatrix.push(makeDiagnolArray(i, 0, length, matrix, "MAJOR"))	
  	}
  }

  if (matrix[0].length === 1) {
  	newMatrix.pop();
  	return newMatrix;
  }

  for (var i = 0; i < length ; i++) {
  	if(i === 0){
  		matrix[0].forEach((val, j) => {
  			if (j !== 0 ) {
  				newMatrix.push(makeDiagnolArray(i, j, length, matrix, "MINOR"))
  			}
  		})
  	}else{
  		if (i === length - 1) {
  			newMatrix.push([matrix[i][matrix[i].length - 1]])
  			return newMatrix
  		}else{

  			newMatrix.push(makeDiagnolArray(i, matrix[i].length - 1, length, matrix, "MINOR"))
  		}
  	}
  }
  return newMatrix;
};


function makeDiagnolArray(i, start, end, matrix, majorMinor) {
  const diagonals = [];
  for(let j = i; j < end; j++){
    if (matrix[i][start] !== undefined) {
      diagonals.push(matrix[i][start]);
      if(majorMinor === "MAJOR"){
	      i++;
	      start++;
	    }
	    if (majorMinor === "MINOR") {
	      i++;
	      start--;
	    }
    }else{
    	return diagonals
    }
  }
  return diagonals;
}





// for (var i = 0; i < matrix.length; i++) {
//   matrix[i]
//   if (i === 0 || i === matrix.length - 1) {
//     newMatrix.push([matrix[i][0]]);
//     newMatrix.push([matrix[i][matrix[i].length - 1]]);
//   }
//   if (i === 0) {
//     matrix[i].forEach((val, j )=>{
//       if(j === 0){
//         newMatrix.push( makeDiagnolArray(i,j, matrix.length, matrix,"MAJOR") )
//       }else if (j === matrix[i].length - 1) {
//         newMatrix.push( makeDiagnolArray(i,j, matrix.length, matrix,"MINOR") )
//       }else{
//         newMatrix.push(makeDiagnolArray(i, j, matrix.length, matrix, "MAJOR"))
//         newMatrix.push(makeDiagnolArray(i, j, matrix.length, matrix, "MINOR"))
//       }
//     })
//   }else
//   if (i !== matrix.length - 1) {
//     newMatrix.push(makeDiagnolArray(i, 0, matrix.length, matrix, "MAJOR"))
//     newMatrix.push(makeDiagnolArray(i, matrix[i].length - 1, matrix.length, matrix, "MINOR"))
//   }
// }

console.log(allDiagonals([[10],[13]]))


/*  --=*=--  Tests below.  Do not modify.  --=*=--  */

const expect = require('chai').expect;
const matrix = require('./inputsAndOutputs.js').matrix;
const answer = require('./inputsAndOutputs.js').answer;

// Basics
expect( allDiagonals ).to.exist;
expect( allDiagonals ).to.be.a( 'function' );
expect( allDiagonals( matrix.twoByTwo ) ).to.be.an( 'array' );

// Square Matrices
expect( allDiagonals( matrix.oneByOne ) ).to.eql( answer.oneByOne );
expect( allDiagonals( matrix.twoByTwo ) ).to.eql( answer.twoByTwo );
expect( allDiagonals( matrix.threeByThree ) ).to.eql( answer.threeByThree );
expect( allDiagonals( matrix.fourByFour ) ).to.eql( answer.fourByFour );
expect( allDiagonals( matrix.fiveByFive ) ).to.eql( answer.fiveByFive );

// Tall Matrcies
expect( allDiagonals( matrix.oneByTwo ) ).to.eql( answer.oneByTwo );
expect( allDiagonals( matrix.oneByThree ) ).to.eql( answer.oneByThree );
expect( allDiagonals( matrix.oneByFour ) ).to.eql( answer.oneByFour );
expect( allDiagonals( matrix.oneByFive ) ).to.eql( answer.oneByFive );
expect( allDiagonals( matrix.twoByThree ) ).to.eql( answer.twoByThree );
expect( allDiagonals( matrix.twoByFour ) ).to.eql( answer.twoByFour );
expect( allDiagonals( matrix.twoByFive ) ).to.eql( answer.twoByFive );
expect( allDiagonals( matrix.threeByFour ) ).to.eql( answer.threeByFour );
expect( allDiagonals( matrix.threeByFive ) ).to.eql( answer.threeByFive );
expect( allDiagonals( matrix.fourByFive ) ).to.eql( answer.fourByFive );

// Wide Matrices
expect( allDiagonals( matrix.twoByOne ) ).to.eql( answer.twoByOne );
expect( allDiagonals( matrix.threeByOne ) ).to.eql( answer.threeByOne );
expect( allDiagonals( matrix.threeByTwo ) ).to.eql( answer.threeByTwo );
expect( allDiagonals( matrix.fourByOne ) ).to.eql( answer.fourByOne );
expect( allDiagonals( matrix.fourByTwo ) ).to.eql( answer.fourByTwo );
expect( allDiagonals( matrix.fourByThree ) ).to.eql( answer.fourByThree );
expect( allDiagonals( matrix.fiveByOne ) ).to.eql( answer.fiveByOne );
expect( allDiagonals( matrix.fiveByTwo ) ).to.eql( answer.fiveByTwo );
expect( allDiagonals( matrix.fiveByThree ) ).to.eql( answer.fiveByThree );
expect( allDiagonals( matrix.fiveByFour ) ).to.eql( answer.fiveByFour );
