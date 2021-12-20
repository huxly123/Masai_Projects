function getNumberOfIslands(binaryMatrix) {
  let ans = 0;
  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        if (binaryMatrix[i - 1][j] === 1 && binaryMatrix[i - 1][j]!==undefined) {
          ans++;
        }
        if (binaryMatrix[i][j - 1] == 1) {
          ans++;
        }
        if (binaryMatrix[i + 1][j] == 1) {
          ans++;
        }
        if (binaryMatrix[i][j + 1] == 1) {
          ans++;
        }
      }
    }
  }
  return ans;
}
let arr = [[1, 0, 1, 0]];

console.log(getNumberOfIslands(arr));


// function markIsland(binaryMatrix, rows, cols, i, j):
//     q = new Queue()
//     q.push([i,j])
//     while (!q.isEmpty()):
//         item = q.pop()
//         x = item[0]
//         y = item[1]
//         if (binaryMatrix[x][y] == 1):
//             binaryMatrix[x][y] = -1
//             pushIfValid(q, rows, cols, x-1, y)
//             pushIfValid(q, rows, cols, x, y-1)
//             pushIfValid(q, rows, cols, x+1, y)
//             pushIfValid(q, rows, cols, x, y+1)
    
    
// function pushIfValid(q, rows, cols, x, y):
//     if (x >= 0 AND x < rows AND y >= 0 AND y < cols):
//         q.push([x,y])