/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const maxH = [];
  const maxV = [];
  const vgrid = [];
  const cols = grid[0].length;

  for (let n = 0; n < cols; n++) {
    vgrid.push([]);
  }

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    maxH.push(Math.max(...row));

    for (let j = 0; j < row.length; j++) {
      vgrid[j][i] = row[j];
    }
  }

  for (let i = 0; i < vgrid.length; i++) {
    const row = vgrid[i];
    maxV.push(Math.max(...row));
  }

  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    for (let j = 0; j < row.length; j++) {
      if (row[j] < maxH[i] && row[j] < maxV[j]) {
        const min = Math.min(maxH[i], maxV[j]);
        ans += min - row[j];
      }
    }
  }

  return ans;
};

const grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];

maxIncreaseKeepingSkyline(grid);