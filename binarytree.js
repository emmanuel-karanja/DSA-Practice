class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function balanceTree(tree) {
    const sortedValues = [];
  
    // In-order traversal to get sorted values:
    //To serialize a tree, I believe you'd just 
    function inOrderTraversal(node) {
      if (node) {
        inOrderTraversal(node.left);
        sortedValues.push(node.value);
        inOrderTraversal(node.right);
      }
    }

    function createTree(values) {
        if (values.length === 0) return null;
      
        const mid = Math.floor(values.length / 2);
        const root = new TreeNode(values[mid]);
      //we've already picked the mid value for the root, so we want all elements after mid
      //to go the right subtree and all elements before it to go to the left subtree.
        root.left = createTree(values.slice(0, mid));
        root.right = createTree(values.slice(mid + 1));
      
      
        return root;
      }

      inOrderTraversal(tree);
    
  
    // Create balanced AVL tree from sorted values:
    return createTree(sortedValues);
  
  }
  

  