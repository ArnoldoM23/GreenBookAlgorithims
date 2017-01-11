
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


/*  --=*=--  Tests below.  Do not modify.  --=*=--  */

const expect = require('chai').expect;
const matrix = require('./inputsAndOutputs.js').matrix;
const answer = require('./inputsAndOutputs.js').answer;

describe('allDiagonals', function() {

  describe('basics', function() {
    it('should exist', function() {
      expect( allDiagonals ).to.exist;
    });
    it('should be a function', function() {
      expect( allDiagonals ).to.be.a( 'function' );
    });
    it('should return an array', function() {
      expect( allDiagonals( matrix.twoByTwo ) ).to.be.an( 'array' );
    });
  });

  describe('square matrices', function() {
    it('should handle 1x1 matrix', function() {
      expect( allDiagonals( matrix.oneByOne ) ).to.eql( answer.oneByOne );
    });
    it('should handle 2x2 matrix', function() {
      expect( allDiagonals( matrix.twoByTwo ) ).to.eql( answer.twoByTwo );
    });
    it('should handle 3x3 matrix', function() {
      expect( allDiagonals( matrix.threeByThree ) ).to.eql( answer.threeByThree );
    });
    it('should handle 4x4 matrix', function() {
      expect( allDiagonals( matrix.fourByFour ) ).to.eql( answer.fourByFour );
    });
    it('should handle 5x5 matrix', function() {
      expect( allDiagonals( matrix.fiveByFive ) ).to.eql( answer.fiveByFive );
    });
  });

  describe('tall matrices', function() {
    it('should handle 1x2 matrix', function() {
      expect( allDiagonals( matrix.oneByTwo ) ).to.eql( answer.oneByTwo );
    });
    it('should handle 1x3 matrix', function() {
      expect( allDiagonals( matrix.oneByThree ) ).to.eql( answer.oneByThree );
    });
    it('should handle 1x4 matrix', function() {
      expect( allDiagonals( matrix.oneByFour ) ).to.eql( answer.oneByFour );
    });
    it('should handle 1x5 matrix', function() {
      expect( allDiagonals( matrix.oneByFive ) ).to.eql( answer.oneByFive );
    });
    it('should handle 2x3 matrix', function() {
      expect( allDiagonals( matrix.twoByThree ) ).to.eql( answer.twoByThree );
    });
    it('should handle 2x4 matrix', function() {
      expect( allDiagonals( matrix.twoByFour ) ).to.eql( answer.twoByFour );
    });
    it('should handle 2x5 matrix', function() {
      expect( allDiagonals( matrix.twoByFive ) ).to.eql( answer.twoByFive );
    });
    it('should handle 3x4 matrix', function() {
      expect( allDiagonals( matrix.threeByFour ) ).to.eql( answer.threeByFour );
    });
    it('should handle 3x5 matrix', function() {
      expect( allDiagonals( matrix.threeByFive ) ).to.eql( answer.threeByFive );
    });
    it('should handle 4x5 matrix', function() {
      expect( allDiagonals( matrix.fourByFive ) ).to.eql( answer.fourByFive );
    });
  });

  describe('wide matrices', function() {
    it('should handle 2x1 matrix', function() {
      expect( allDiagonals( matrix.twoByOne ) ).to.eql( answer.twoByOne );
    });
    it('should handle 3x1 matrix', function() {
      expect( allDiagonals( matrix.threeByOne ) ).to.eql( answer.threeByOne );
    });
    it('should handle 3x2 matrix', function() {
      expect( allDiagonals( matrix.threeByTwo ) ).to.eql( answer.threeByTwo );
    });
    it('should handle 4x1 matrix', function() {
      expect( allDiagonals( matrix.fourByOne ) ).to.eql( answer.fourByOne );
    });
    it('should handle 4x2 matrix', function() {
      expect( allDiagonals( matrix.fourByTwo ) ).to.eql( answer.fourByTwo );
    });
    it('should handle 4x3 matrix', function() {
      expect( allDiagonals( matrix.fourByThree ) ).to.eql( answer.fourByThree );
    });
    it('should handle 5x1 matrix', function() {
      expect( allDiagonals( matrix.fiveByOne ) ).to.eql( answer.fiveByOne );
    });
    it('should handle 5x2 matrix', function() {
      expect( allDiagonals( matrix.fiveByTwo ) ).to.eql( answer.fiveByTwo );
    });
    it('should handle 5x3 matrix', function() {
      expect( allDiagonals( matrix.fiveByThree ) ).to.eql( answer.fiveByThree );
    });
    it('should handle 5x4 matrix', function() {
      expect( allDiagonals( matrix.fiveByFour ) ).to.eql( answer.fiveByFour );
    });
  });

});
