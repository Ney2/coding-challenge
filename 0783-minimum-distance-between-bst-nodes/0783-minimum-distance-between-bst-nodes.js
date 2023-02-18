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
var minDiffInBST = function(root) {
  let min = Infinity
  let previous = null
  const ans = (node) => {
    if (!node) {
      return
    }
    if (node.left) {
      ans(node.left)
    }
    const possibleMin = Math.abs(node.val - previous)
    if ((previous !== null) && (possibleMin < min)) {
      min = possibleMin
    }
    previous = node.val
    if (node.right) {
      ans(node.right)
    }
  }
  ans(root)
  return min
};