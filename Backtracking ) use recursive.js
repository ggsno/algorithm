/**
 * Title:
 *   Combinations
 *
 * Link:
 *   https://leetcode.com/problems/combinations/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Discription:
 *   Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 *   You may return the answer in any order.
 *
 * Constraints:
 *   1 <= n <= 20
 *   1 <= k <= n
 *
 * Example:
 *   Input: nums = [1,2,3]
 *   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  const comb = (arr, temp) => {
    if (arr.length === k) {
      result.push(arr);
      return;
    }

    for (let i = temp; i <= n; i++) {
      comb(arr.concat(i), i + 1);
    }
  };

  comb([], 1);

  return result;
};
