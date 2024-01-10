/**
 * Title:
 *   Minimum Absolute Difference in BST
 *
 * Link:
 *   https://leetcode.com/problems/minimum-absolute-difference-in-bst/?envType=study-plan-v2&envId=top-interview-150
 *
 * Discription:
 *   Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
 *
 * Constraints:
 *   The number of nodes in the tree is in the range [2, 104].
 *   0 <= Node.val <= 105
 *
 * Example:
 *   Input: root = [4,2,6,1,3]
 *   Output: 1
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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let diff = Infinity;
  let prev = null;

  DFS(
    root,
    (node) => {
      if (prev !== null) {
        diff = Math.min(diff, Math.abs(prev.val - node.val));
      }
      prev = node;
    },
    "IN_ORDER"
  );

  return diff;
};

function DFS(node, callback, type) {
  if (!node) return;
  if (type === "PRE_ORDER") callback(node);
  DFS(node.left, callback, type);
  if (type === "IN_ORDER") callback(node);
  DFS(node.right, callback, type);
  if (type === "POST_ORDER") callback(node);
}

// iterative solution
var getMinimumDifferenceByIterate = function (root) {
  const stack = [];
  let diff = Infinity;
  let prev = null;
  let cur = root;

  while (stack.length || cur) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    const popped = stack.pop();
    if (prev !== null) {
      diff = Math.min(diff, Math.abs(prev.val - popped.val));
    }
    prev = popped;
    cur = popped.right;
  }

  return diff;
};
