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
