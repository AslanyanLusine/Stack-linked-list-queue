class Queue{
    constructor() {
        this.elements = []
    }

    enqueue(element){
        this.elements.push(element)
       
    }
    dequeue(){
        return this.elements.shift()
    }
    front(){
        return this.elements[0];
    }
    isEmpty(){
        return !this.elements.length
    }
    size(){
        return this.elements.length

    }
    print(){
        return this.elements.join(' ')
    }
}

const queue = new Queue()

queue.enqueue(1); 
queue.enqueue(2); 
queue.enqueue(3); 
 
console.log(queue.print()); // Output: 1 2 3 
 
console.log("Front element: " + queue.front()); // Output: Front element: 
1 
 
queue.dequeue(); 
console.log(queue.print()); // Output: 2 3 
 
console.log("Queue size: " + queue.size());