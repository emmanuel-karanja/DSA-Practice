/**I'd use inorder traversal, using markers */

class TreeNode{
    constructor(value=null){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function serialize(root){
    let asArray=[];
   
    inOrderTraversal(root)

    function inOrderTraversal(root){
        if(root){
            inOrderTraversal(root.left)
            asArray.push(root.value);
            inOrderTraversal(root.right);
        }
    }

    //now we have an array of the values: we need markers, we use '#' as the marker
    const asStr=asArray.join('#');
    //save to file.
    return asStr;

}

function deSerialize(str){
    //we convert it back to the array
    const values=str.split('#');
    const mappedValues=values.map((item)=> parseInt(item))
    
    function createTree(arr){
        if (arr.length === 0) return null;
      
        const mid = Math.floor(arr.length / 2);
        const root = new TreeNode(arr[mid]);
     
        root.left = createTree(arr.slice(0, mid));
        root.right = createTree(arr.slice(mid + 1));
      
      
        return root;
    }

    return createTree(mappedValues);

    //we do an inorder traversal to build the tree.
}

const root=new TreeNode(2);
const left=new TreeNode(1);
const right=new TreeNode(3)

root.left=left; root.right=right;

console.log("Tree:",root)
const serial=serialize(root)
console.log("Serialized:",serial);
console.log("deserialized:",deSerialize(serial))