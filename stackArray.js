class Stack{
    constructor() {
        this.storage = [];
    }

    push(element) {
        this.storage = [...this.storage,element]
        return this;
    }
    pop(){
        if(!this.storage.length){
            return "empty array"
        }
        let element = this.storage[this.storage.length - 1];
        this.storage.pop()
        return element;
    }

    isEmpty() {
        return !this.storage.length
    }
    top() {
        return this.storage[this.storage.length - 1]
    }

    getSize() {
        return this.storage.length
    }
}

const stack = new Stack(); 
stack.push(1); 
stack.push(2); 
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1 