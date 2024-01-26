function kthSmallest(root, k) {
    let count = 0;
    let result = null;
  
    const inorderTraversal = (node) => {
        //
      if (node === null) return;
  
      inorderTraversal(node.left);
      count++;
      if (count === k) {
        result = node.val;
        return; // Stop traversal early after finding the kth smallest
      }
      inorderTraversal(node.right);
    };
  
    inorderTraversal(root);
    return result;
  }
  