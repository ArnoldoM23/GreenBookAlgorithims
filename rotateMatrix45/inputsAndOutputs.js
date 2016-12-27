/* jshint esversion: 6 */

/* These are for the tests. Do not modify this file. */

const buildMatrix = (width, height) => {
  const matrix = [];
  let count = 1;
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(count++);
    }
    matrix.push(row);
  }
  return matrix;
};

exports.matrix = {
  oneByOne     : buildMatrix(1,1),
  oneByTwo     : buildMatrix(1,2),
  oneByThree   : buildMatrix(1,3),
  oneByFour    : buildMatrix(1,4),
  oneByFive    : buildMatrix(1,5),

  twoByOne     : buildMatrix(2,1),
  twoByTwo     : buildMatrix(2,2),
  twoByThree   : buildMatrix(2,3),
  twoByFour    : buildMatrix(2,4),
  twoByFive    : buildMatrix(2,5),

  threeByOne   : buildMatrix(3,1),
  threeByTwo   : buildMatrix(3,2),
  threeByThree : buildMatrix(3,3),
  threeByFour  : buildMatrix(3,4),
  threeByFive  : buildMatrix(3,5),

  fourByOne    : buildMatrix(4,1),
  fourByTwo    : buildMatrix(4,2),
  fourByThree  : buildMatrix(4,3),
  fourByFour   : buildMatrix(4,4),
  fourByFive   : buildMatrix(4,5),

  fiveByOne    : buildMatrix(5,1),
  fiveByTwo    : buildMatrix(5,2),
  fiveByThree  : buildMatrix(5,3),
  fiveByFour   : buildMatrix(5,4),
  fiveByFive   : buildMatrix(5,5),
};

exports.answer = {
  oneByOne     : [[1]],
  oneByTwo     : [[2],[1]], // ???
  oneByThree   : [[3],[2],[1]], // ???
  oneByFour    : [[4],[3],[2],[1]], // ???
  oneByFive    : [[5],[4],[3],[2],[1]], // ???

  twoByOne     : [[1],[2]], // ???
  twoByTwo     : [[1],[3,2],[4]],
  twoByThree   : [[1],[3,2],[5,4],[6]],
  twoByFour    : [[1],[3,2],[5,4],[7,6],[8]],
  twoByFive    : [[1],[3,2],[5,4],[7,6],[9,8],[10]],

  threeByOne   : [[1],[2],[3]], // ???
  threeByTwo   : [[1],[4,2],[5,3],[6]],
  threeByThree : [[1],[4,2],[7,5,3],[8,6],[9]],
  threeByFour  : [[1],[4,2],[7,5,3],[10,8,6],[11,9],[12]],
  threeByFive  : [[1],[4,2],[7,5,3],[10,8,6],[13,11,9],[14,12],[15]],

  fourByOne    : [[1],[2],[3],[4]], // ???
  fourByTwo    : [[1],[5,2],[6,3],[7,4],[8]],
  fourByThree  : [[1],[5,2],[9,6,3],[10,7,4],[11,8],[12]],
  fourByFour   : [[1],[5,2],[9,6,3],[13,10,7,4],[14,11,8],[15,12],[16]],
  fourByFive   : [[1],[5,2],[9,6,3],[13,10,7,4],[17,14,11,8],[18,15,12],[19,16],[20]],

  fiveByOne    : [[1],[2],[3],[4],[5]], // ???
  fiveByTwo    : [[1],[6,2],[7,3],[8,4],[9,5],[10]],
  fiveByThree  : [[1],[6,2],[11,7,3],[12,8,4],[13,9,5],[14,10],[15]],
  fiveByFour   : [[1],[6,2],[11,7,3],[16,12,8,4],[17,13,9,5],[18,14,10],[19,15],[20]],
  fiveByFive   : [[1],[6,2],[11,7,3],[16,12,8,4],[21,17,13,9,5],[22,18,14,10],[23,19,15],[24,20],[25]]
};
