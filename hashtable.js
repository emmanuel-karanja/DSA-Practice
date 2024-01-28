class HashTable {
    constructor(initialCapacity = 16) {
      this.capacity = initialCapacity;
      this.table = new Array(this.capacity).fill(null);
      this.size = 0;
    }
  
    // _hash(key) {
    //   // Simple hashing function for demonstration
    //   const hashed = key.toString().length % this.capacity;
    //   return hashed;
    // }

    _hash(key,size) {
    // Same hash function for simplicity
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % size;
  } 
  
    _resize() {
        const newSize = this.capacity * 2;
        const newTable = new Array(newSize);
      
        for (let i = 0; i < this.capacity; i++) {
            let chain=this.table[i] || [];
          if (chain) {
            for (let [key,value] of chain) {
                //rehash
              const newIndex = this._hash(key, newSize);
              if (!newTable[newIndex]) {//the current chain doesn't exist
                newTable[newIndex] = [];
              }
              newTable[newIndex].push([key,value]);
            }
          }
        }
      
        this.capacity = newSize;
        this.table = newData;
      }
      
  
    set(key, value) {
      const index = this._hash(key,this.capacity);
      let chain = this.table[index];
  
      //we have a chain at that index, we try to find if the key exists and update the value

      //update existing
      if (chain) {
        for (let i = 0; i < chain.length; i++) {
          if (chain[i][0] === key) {
            chain[i][1] = value; // Update existing value
            return;
          }
        }
        //add a new key value pair
        chain.push([key, value]); // Add to existing chain
      } else {
        //create a new key value pair
        this.table[index] = [[key, value]]; // Create a new chain
      }
  
      //increment size
      this.size++;
  
      // Resize if load factor exceeds 0.75
      if (this.size / this.capacity > 0.75) {
        this._resize();
      }
    }
  
    get(key) {
      const index = this._hash(key,this.capacity);
      const chain = this.table[index];
  
      if (chain) {
        for (const [k, v] of chain) {
          if (k === key) {
            return v;
          }
        }
      }
  
      return undefined;
    }
  
    delete(key) {
      const index = this._hash(key);
      let chain = this.table[index];
  
      if (chain) {
        //if we have a chain, 
        /**an alternative way is chain.filter(([k,v])=> v!==key ) 
         * reassign filtered to the current index's chain
        */
        for (let i = 0; i < chain.length; i++) {
          if (chain[i][0] === key) {
            chain.splice(i, 1);
            this.size--;
            return true;
          }
        }
      }
  
      return false;
    }
  }
  