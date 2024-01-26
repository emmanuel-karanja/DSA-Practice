//DEPTH FIRST SEARCH APPLICATION

const TreeNode = class {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  };
  
  // Sample tree
  const root = new TreeNode(5, new TreeNode(4), new TreeNode(8, new TreeNode(13)));
  
  // Test cases with different target sums
  const testCases = [
    { targetSum: 22, expected: true },
    { targetSum: 9, expected: false },
    { targetSum: 18, expected: true },
    { targetSum: 0, expected: false },
  ];
  
  function hasPathSumRecursive(root, targetSum) {
    //base cases
    if (!root) return false;

    //check if it's a leaf node
    if (!root.left && !root.right && root.val === targetSum) return true;

    return hasPathSumRecursive(root.left, targetSum - root.val) || hasPathSumRecursive(root.right, targetSum - root.val);
  }
  
  function hasPathSumIterative(root, targetSum) {
    if (!root) return false;
  
    const stack = [[root, targetSum]];
    while (stack.length > 0) {
      const [node, remainingSum] = stack.pop();

      if (!node) continue;

      //check if it's a leaf node i.e. it doesn't have either a left node or a right node
      //and if its value is equaly the remaining sum
      if (!node.left && !node.right && node.val === remainingSum) 
      {
        return true;
      }

      //visit the neighbours
      stack.push([node.left, remainingSum - node.val]);
      stack.push([node.right, remainingSum - node.val]);
    }
  
    //
    return false;
  }
  
  console.log("Recursive Approach:");
  for (const { targetSum, expected } of testCases) {
    const result = hasPathSumRecursive(root, targetSum);
    console.log(`Target sum: ${targetSum}, Result: ${result}, Expected: ${expected}`);
  }
  
  console.log("\nIterative Approach:");
  for (const { targetSum, expected } of testCases) {
    const result = hasPathSumIterative(root, targetSum);
    console.log(`Target sum: ${targetSum}, Result: ${result}, Expected: ${expected}`);
  }
  