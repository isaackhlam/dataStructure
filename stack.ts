class SNode {
    value: any;
    next: SNode | null;
    
    constructor(value: any){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    first: SNode | null;
    last: SNode | null;
    size: number;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value: any){
        var newNode = new SNode(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

