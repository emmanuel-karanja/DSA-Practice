class TreeNode{
    constructor(value=null,left=null,right=null){
        this.value=value;
        this.right=right;
        this.left=left;
    }
}

function rightHandSide(root){
    
    const values=[];
    function rightSide(root){
        if(root){
            values.push(root.value)
            rightSide(root.right);
        }
    }

    rightSide(root);

    return values;
}

const root=new TreeNode(3,new TreeNode(1),new TreeNode(2));
console.log("right:",rightHandSide(root))