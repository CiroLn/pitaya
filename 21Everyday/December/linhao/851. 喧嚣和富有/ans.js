/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const arr = []; // arr 结构 [ [0, ...], [1, ...], [2, ...], ...]
  for (let i = 0; i < quiet.length; i++) {
    arr[i] = [i]; // 先把自己放入
    let dup = false; // 重复标识
    for (let j = 0; j < richer.length; j++) {
      // 第二个判断，不重复添加
      if (arr[i].includes(richer[j][1]) && !arr[i].includes(richer[j][0])) {
        arr[i].push(richer[j][0]);
        dup = true;
      }
      // 如果有增加，需要重新遍历一次
      if (dup && j == richer.length - 1) {
        console.log("-----dup-------", j);
        j = -1; // 重新循环
        dup = false;
      }
    }
  }
  console.log(arr);
  const ans = [];
  for (let n = 0; n < arr.length; n++) {
    const item = arr[n];
    ans[n] = item[0];
    for (let m = 0; m < item.length; m++) {
      if (quiet[ans[n]] > quiet[item[m]]) {
        ans[n] = item[m];
      }
    }
  }
  console.log("---------- ans ------");
  console.log(ans);
  return ans;
};

const richer1 = [
  [1, 0],
  [2, 1],
  [3, 1],
  [3, 2],
  [4, 3],
  [5, 3],
  [6, 3],
];
const richer = [
  [0, 7],
  [7, 6],
  [6, 5],
  [5, 4],
  [4, 3],
  [3, 2],
  [2, 1],
];
const quiet = [3, 2, 5, 4, 6, 1, 7, 0];
loudAndRich(richer, quiet);
