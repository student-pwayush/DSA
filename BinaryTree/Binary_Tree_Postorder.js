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
let result;
function Postorder(root) {
    if(root == null) return null;

    Postorder(root.left);

    Postorder(root.right);

    result.push(root.val);
}


var postorderTraversal = function(root) {
   result = [];
    Postorder(root);
    return result; 
};