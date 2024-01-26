class LRUCache {
    //use a doubly linked list for the store
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map(); //use this to get O(1) time
      this.head = null; //doubly linked list is used for keeping track of priority of the nodes i.e.
      //if a node is accessed recently e.g. get or put, we add it to head and if it's not, we remove
      //the tail
      this.tail = null;
    }
  
    get(key) {
      const node = this.cache.get(key);
      if (node) {
        this._moveToHead(node);
        return node.value;
      }
      return -1;
    }
  
    put(key, value) {
      const node = this.cache.get(key);
      if (node) {
        node.value = value;
        this._moveToHead(node);
      } else {
        const newNode = { key, value };
        this.cache.set(key, newNode);
        this._addToHead(newNode);
        //eviction is done after a put operation
        if (this.cache.size > this.capacity) {
          const tail = this._removeTail();
          this.cache.delete(tail.key);
        }
      }
    }
  
    _moveToHead(node) {
      if (node === this.head) {
        return;
      }
      if (node === this.tail) {
        this.tail = node.prev;
      }
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }
      this._addToHead(node);
    }
  
    _addToHead(node) {
      node.prev = null;
      node.next = this.head;
      if (this.head) {
        this.head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
    }
  
    _removeTail() {
      const tail = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = tail.prev;
        this.tail.next = null;
      }
      return tail;
    }
  }
  