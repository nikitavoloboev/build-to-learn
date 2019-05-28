// https://wsvincent.com/javascript-two-sum-find-all-pairs-match-target-value/
const twoSum = (arr, target) => {
  let map = {};
  results = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      results.push([map[arr[i]], arr[i]]);
    } else {
      map[target - arr[i]] = arr[i];
    }
  }
  return results;
};

console.log(twoSum([2, 7, 11, 15], 9));
