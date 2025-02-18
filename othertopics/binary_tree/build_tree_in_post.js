/**
 * Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. 
 * The function should build a binary tree that has the given in-order and post-order traversal structure. 
 * The function should return the root of this tree.
You can assume that the values of inorder and postorder are unique.

 */

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
    toString(){
      return this.val + ' | left: ' + this.left + ' | right: ' + this.right
    }
  }
  
  const buildTreeInPost = (inOrder, postOrder) => {
    if (inOrder.length === 0) return null;
    const value = postOrder[postOrder.length - 1];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftIn = inOrder.slice(0, mid);
    const rightIn = inOrder.slice(mid + 1);
    const leftPost = postOrder.slice(0, leftIn.length);
    const rightPost = postOrder.slice(leftIn.length, -1);
    root.left = buildTreeInPost(leftIn, leftPost);
    root.right = buildTreeInPost(rightIn, rightPost);
    return root;
  };
  
  
  module.exports = {
    buildTreeInPost,
  };
  
  const result =  buildTreeInPost(
    [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
    [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
  );
  console.log(result.toString())