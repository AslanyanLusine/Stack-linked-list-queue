class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    append(data) {
        let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
    } else {
      let lastElem;
      let current = this.head;
      while (current) {
        lastElem = current;
        current = current.next;
      }
      lastElem.next = newNode;
      this.size++;
    }
  
    
    }
    prepend(data) {
        let newNode = new Node(data);
     if (!this.head) {
        this.head = newNode;
        } else {
            let current = this.head;
            this.head = newNode;
            newNode.next = current
        }
        this.size++;

    }
    insert(data,index){
        if(index < 0 || index > this.size) return false;
        if(index === 0) {
            this.head = data;
            data.next = this.head;
        } else {
        let tempVal = this.head.next;
        this.head.next = data;
        data.next = tempVal
        }
    }
    removeAt(index){

    }
    remove(data){
        if(this.size > 0) {
            this.prepend(data);
            return this;

        } else {
            return false
        }

    }
    getSize() {
        return this.size
    }
    isEmpty() {
        if(this.size === 0) {
            return true
        }
        return false;
    }
    printList() {
        let current = this.head
        let str = "";
        while(current){
            str += current.data + " ";
            current = current.next
        };
        return str
    }
}


const list = new LinkedList(); 
list.append(1); 
list.append(2);
list.append(3); 
list.prepend(0); 
console.log(list)
list.remove(0)
console.log(list)
//list.insert(4, 3); 
//console.log(list)
//console.log(list.printList()); // Output: 0 1 2 3
//console.log("Size:", list.getSize()); // Output: Size: 4 
//list.remove(2); 
//list.removeAt(2); 
//list.printList(); // Output: 0 1
//console.log("Size:", list.getSize()); // Output: Size: 2

