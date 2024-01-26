/**You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

APPROACH:

1. Find all the valid paths to the leaf and combine them to form a number


*/

const TreeNode = class {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  };

function pathSum3(root,targetSum){
    if (!root) return [];
  
    const paths = [];
    const currentPath = [];
  
    function dfs(node, remainingSum) {
      if (!node) return;
      
  
      //add to path
      currentPath.push(node.value);
      //update the sum
      remainingSum -= node.value;
  
      //if it's a leaf node and it satisfies the condition
      if (!node.left && !node.right && remainingSum === 0) {
        //we use the spread to copy the 
        paths.push([...currentPath]);
      }
  
      //visit the neighbours i.e. the two of them.
      dfs(node.left, remainingSum);
      dfs(node.right, remainingSum);
  
      //remove from path
      currentPath.pop();
    }
  
    dfs(root, targetSum);

    //this is the type of shit that signals right
    const summedValues= paths.filter((path)=>path.length>0)//remove empty paths
                             .map((path)=>parseInt(path.join('')))//join the elements of each path
    

    return summedValues;
}

const root = new TreeNode(5, new TreeNode(4, null, new TreeNode(11, left = new TreeNode(7), right = new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4)));
const targetSum = 22;

const total = pathSum3(root, targetSum);
console.log("pathsTotal:",total);