//Diameter or width is the longest path between two nodes in the tree
//*This is the correct implementation

class Node{
  constructor(value=null){
    this.right=null;
    this.left=null;
    this.value=value;
  }
}

function height(root){
  if(!root) return 0;
  let leftHeight=height(root.left);
  let rightHeight=height(root.right);

  return Math.max(leftHeight,rightHeight)+1;
}

function diameterRecursive(root) {
    if (!root) return 0; // Height, diameter
  
  
    const leftHeight=height(root.left);
    const rightHeight=height(root.right);
    //we add 1 to account for the root's contribution to the height
    const currentHeight=leftHeight+rightHeight+1;

    const leftDiameter=diameterRecursive(root.left);
    const rightDiameter=diameterRecursive(root.right);
   
  
    const currentDiameter = Math.max(leftDiameter, rightDiameter, currentHeight);
  
    return currentDiameter;
  }

  // Driver Code
  root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(3)
  root.left.left = new Node(4)
  root.left.right = new Node(5)
  
  
  function diameter(root) {
    if (!root) return 0;
       return diameterRecursive(root); // Return only the diameter
  }
  
  
  console.log("diameter:",diameter(root))