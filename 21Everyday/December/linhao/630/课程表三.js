/**
 * @param {number[][]} courses
 * @return {number}
 */
// 不完全正确
var scheduleCourse = function (courses) {
  courses = courses.sort((a, b) => {
    if(a[1] - b[1] > 0) {
      return 1;
    }else if(a[1] - b[1] < 0) {
      return -1;
    }else {
      return a[0] - b[0];
    }
  });

  console.log(courses);

  let timeline = 0;
  let count = 0;
  for (let i = 0; i < courses.length; i++) {
    const temp = courses[i];
    if (timeline + temp[0] <= temp[1]) {
      count++;
      timeline += temp[0];
    }
  }

  return count;
};

const courses11 = [
  [100, 200],
  [200, 1300],
  [1000, 1250],
  [2000, 3200],
];

const courses = [[5,5],[4,6],[2,6]];

let ans = scheduleCourse(courses);

console.log(ans);
