class QNode {
    value: any;
    next: QNode | null;

    constructor(value: any){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: QNode | null;
    last: QNode | null;
    size: number;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value: any){
        var newNode = new QNode(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last!.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next
        this.size--;
        return temp.value;
    }
}
