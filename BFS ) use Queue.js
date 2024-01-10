/**
 * Title:
 *   Binary Tree Right Side View
 *
 * Link:
 *   https://leetcode.com/problems/binary-tree-right-side-view/?envType=study-plan-v2&envId=top-interview-150
 *
 * Discription:
 *   Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 *
 * Constraints:
 *   The number of nodes in the tree is in the range [0, 100].
 *   -100 <= Node.val <= 100
 *
 * Example:
 *   Input: root = [1,2,3,null,5,null,4]
 *   Output: [1,3,4]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];
  const results = [];
  const queue = [root];

  while (queue.length) {
    let i = queue.length;

    let cur = null;
    while (i--) {
      cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    results.push(cur.val);
  }
  return results;
};
