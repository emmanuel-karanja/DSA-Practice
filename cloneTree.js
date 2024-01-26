function cloneBinaryTree(node) {
    if (!node) return null; // Base case: Empty tree
  
    const cloneNode = new TreeNode(node.val); // Create the cloned node
    cloneNode.left = cloneBinaryTree(node.left); // Recursively clone left subtree
    cloneNode.right = cloneBinaryTree(node.right); // Recursively clone right subtree
  
    return cloneNode;
  }
  