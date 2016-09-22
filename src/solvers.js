/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
// Make new board with 0s
  var solution = new Board({'n': n});
  var matrix = solution.rows();
  var columns = matrix[0].length;
  var currRow = 0;
  var currCol = 0;
  for (var row = 0; row < columns; row ++) {
    solution.togglePiece(currRow, currCol);
    currRow++;
    currCol++;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return matrix;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var count
  var count = 0;
  // make new board
  var board = new Board ({'n': n});
  // get matrix from board (this.rows())
  var matrix = this.rows();

  // make recursion function that takes in matrix and adds rook
    // loop through each square in matrix
      // copies current matrix
      // adds 1 rook to first empty position found
      // if no conflict
        // if number of rooks greater than n
          // count ++
          // return
        // else continue recursion on new matrix
      // else conflict
        //return



  // execute recursion function on empty matrix



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
