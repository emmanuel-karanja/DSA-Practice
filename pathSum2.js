
const TreeNode = class {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  };

function pathSum(root, targetSum) {
    if (!root) return [];
  
    const paths = [];
    const currentPath = [];
  
    function dfs(node, remainingSum) {
      if (!node) return;
  
      //add to path
      currentPath.push(node.val);
      remainingSum -= node.val;
  
      //if it's a leaf node and it satisfies the condition
      if (!node.left && !node.right && remainingSum === 0) {
        //Create a copy to avoid modifying original path
        //this is why my previous impl of permutation was failing, I was not making a copy
        paths.push([...currentPath]);
      }
  
      //visit the neighbours i.e. the two of them.
      dfs(node.left, remainingSum);
      dfs(node.right, remainingSum);
  
      //remove from path
      currentPath.pop();
    }
  
    dfs(root, targetSum);
    return paths;
  }
  
  // Example usage
  const root = new TreeNode(5, new TreeNode(4, null, new TreeNode(11, left = new TreeNode(7), right = new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4)));
  const targetSum = 22;
  
  const paths = pathSum(root, targetSum);
  console.log(paths);
  