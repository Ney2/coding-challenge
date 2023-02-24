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
var postorderTraversal = function(root) {
   const stack = []
  const result = []
  const push = (node) => {
    if (node) {
      stack.push(node)
    }
  }
  const pop = () => {
    while (stack.length > 0) {
      const node = stack.pop()
      result.push(node.val)
      push(node.left)
      push(node.right)
    }
  }
  push(root)
  pop()
  return result.reverse()   
};