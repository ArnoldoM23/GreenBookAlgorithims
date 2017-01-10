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



/*  --=*=--  Tests below.  Do not modify.  --=*=--  */
const expect = require('chai').expect;
const matrix = require('./inputsAndOutputs.js').matrix;
const answer = require('./inputsAndOutputs.js').answer;

describe('rotateMatrix45', function() {

  describe('basics', function() {
    it('should exist', function() {
      expect( rotateMatrix45 ).to.exist;
    });
    it('should be a function', function() {
      expect( rotateMatrix45 ).to.be.a( 'function' );
    });
    it('should return an array', function() {
      expect( rotateMatrix45( matrix.twoByTwo ) ).to.be.an( 'array' );
    });
  });

  describe('square matrices', function() {
    it('should handle 1x1 matrix', function() {
      expect( rotateMatrix45( matrix.oneByOne ) ).to.eql( answer.oneByOne );
    });
    it('should handle 2x2 matrix', function() {
      expect( rotateMatrix45( matrix.twoByTwo ) ).to.eql( answer.twoByTwo );
    });
    it('should handle 3x3 matrix', function() {
      expect( rotateMatrix45( matrix.threeByThree ) ).to.eql( answer.threeByThree );
    });
    it('should handle 4x4 matrix', function() {
      expect( rotateMatrix45( matrix.fourByFour ) ).to.eql( answer.fourByFour );
    });
    it('should handle 5x5 matrix', function() {
      expect( rotateMatrix45( matrix.fiveByFive ) ).to.eql( answer.fiveByFive );
    });
  });

  describe('tall matrices', function() {
    it('should handle 2x3 matrix', function() {
      expect( rotateMatrix45( matrix.twoByThree ) ).to.eql( answer.twoByThree );
    });
    it('should handle 2x4 matrix', function() {
      expect( rotateMatrix45( matrix.twoByFour ) ).to.eql( answer.twoByFour );
    });
    it('should handle 2x5 matrix', function() {
      expect( rotateMatrix45( matrix.twoByFive ) ).to.eql( answer.twoByFive );
    });
    it('should handle 3x4 matrix', function() {
      expect( rotateMatrix45( matrix.threeByFour ) ).to.eql( answer.threeByFour );
    });
    it('should handle 3x5 matrix', function() {
      expect( rotateMatrix45( matrix.threeByFive ) ).to.eql( answer.threeByFive );
    });
    it('should handle 4x5 matrix', function() {
      expect( rotateMatrix45( matrix.fourByFive ) ).to.eql( answer.fourByFive );
    });
  });

  describe('wide matrices', function() {
    it('should handle 3x2 matrix', function() {
      expect( rotateMatrix45( matrix.threeByTwo ) ).to.eql( answer.threeByTwo );
    });
    it('should handle 4x2 matrix', function() {
      expect( rotateMatrix45( matrix.fourByTwo ) ).to.eql( answer.fourByTwo );
    });
    it('should handle 4x3 matrix', function() {
      expect( rotateMatrix45( matrix.fourByThree ) ).to.eql( answer.fourByThree );
    });
    it('should handle 5x2 matrix', function() {
      expect( rotateMatrix45( matrix.fiveByTwo ) ).to.eql( answer.fiveByTwo );
    });
    it('should handle 5x3 matrix', function() {
      expect( rotateMatrix45( matrix.fiveByThree ) ).to.eql( answer.fiveByThree );
    });
    it('should handle 5x4 matrix', function() {
      expect( rotateMatrix45( matrix.fiveByFour ) ).to.eql( answer.fiveByFour );
    });
  });

});
