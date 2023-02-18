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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return null;
  const ans = new TreeNode();
  ans.val = root.val;
  ans.left = invertTree(root.right);
  ans.right = invertTree(root.left);
  return ans;  
};