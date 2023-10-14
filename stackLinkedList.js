class Stack{
    constructor() {
        this.top = null
        this.size = 0
    }

    push(val) {
        const node = new Node(val);
        node.next = this.top;
        this.top = node;
        this.size++;
        
    }
    pop() {
        if (this.isEmpty()) {
          return null;
        }
        const val = this.top.val;
        this.top = this.top.next;
        this.size--;
        return val;
      }
    
      peek() {
        if (this.size === 0) {
          return null;
        }
        return this.top.val;
      }
    
      isEmpty() {
        return this.size === 0;
      }
    
      getSize() {
        return this.size;
       
    }
}
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const stack = new Stack(); 
stack.push(1); 
stack.push(2); 
console.log(stack.pop()); // Should print 2
console.log(stack.peek()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1

