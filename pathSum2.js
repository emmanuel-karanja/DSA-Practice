
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
  
      //is a leaf node and remainingSum===0
      if (!node.left && !node.right && remainingSum === 0) {
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
  const root = new TreeNode(5)
  const left=new TreeNode(7);
  const right=new TreeNode(9)
  root.left=left;root.right=right;
  const targetSum = 12;
  
  const paths = pathSum(root, targetSum);
  console.log(paths);
  