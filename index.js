// puzzle solver
const puzzleSolver = function(target, puzzle) {
  const n = puzzle.length;
  let queue = [];
  let count = 1;
  queue.push([0, 0, puzzle[0][0], '']);
  
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      if (count === n) {
        if (curr[2] === target) return curr[3];
      } else {
        const nextR = curr[0] + 1;
        const nextC = curr[1];
        queue.push([nextR, nextC, curr[2] * puzzle[nextR][nextC], curr[3] + 'L']);
        queue.push([nextR, nextC + 1, curr[2] * puzzle[nextR][nextC + 1], curr[3] + 'R']);
      }
    }
    count++;
  }
  return 'no valid path';
}


// tests
const puzzle1 = [[2],[4,3],[3,2,6],[2,9,5,2],[10,5,2,15,5]];
const target1 = 720;

const target2 = 2;
const puzzle2 = [[1],[2,3],[4,1,1]];

const target3 = 7;
const puzzle3 = [[1],[2,3],[4,1,1]];


console.log("first puzzle solution: ", puzzleSolver(target1, puzzle1));
console.log("second puzzle solution: ", puzzleSolver(target2, puzzle2));
console.log("when there is no solution:", puzzleSolver(target3, puzzle3));