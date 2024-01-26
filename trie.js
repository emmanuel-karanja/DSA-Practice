class TrieNode{
    constructor(){
        this.children={};
        this.isEndOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }

    insert(word){
        let current=this.root;
        for(const char of word){
            //check if it exists
            if(!current.children[char]){
                current.children[char]=new TrieNode();
            }//descend on that node
            current=current.children[char];
        }

        current.isEndOfWord=true;
    }

    search(word){
        let current=this.root;
        for(const char of word){
            if(!current.children[char]){
                return false;
            }
            current=current.children[char];
        }

        return current.isEndOfWord;
    }

    startsWith(word){
        let current=this.root;
        for(const char of word){
            if(!current.children[char]){
                return false;
            }//else
            current=current.children[char];
        }
        //if we got this far, we found the prefix
        return true;
    }
}