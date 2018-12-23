export class SinglyLinkedList<E>{
    // Instance variables of the SinglyLinkedList
    private head: Node<E> = null;
    private tail: Node<E> = null;
    private sizeValue : number = 0;
    
    constructor(){}

    // Access methods
    size(): number{
        return this.sizeValue;
    }
    isEmpty(): boolean {
        return this.sizeValue === 0;
    }
    first():E{
        if(this.isEmpty())
            return null;
        return this.head.getElement();
    }
    last(): E {
        if(this.isEmpty())
            return null;
        return this.tail.getElement();
    }

    // Update methods
    addFirst(e:E):void{
        this.head = new Node(e, this.head);
        if(this.sizeValue === 0)
            this.tail = this.head;
        this.sizeValue++;
    }
    addLast(e:E):void{
        const newest : Node<E> = new Node<E>(e, null);
        if(this.sizeValue === 0)
            this.head = newest;
        else
            this.tail.setNext(newest);
        this.tail = newest;
        this.sizeValue++;
    }
    removeFirst():E{
        if(this.isEmpty())
            return null;
        const answer: E = this.head.getElement();
        this.head = this.head.getNext();
        this.sizeValue--;
        if(this.isEmpty())
            this.tail = null;
        return answer;
    }
}

class Node<E> {
    private element:E;
    private next: Node<E>;
    constructor(e:E, n:Node<E>){
        this.element = e;
        this.next = n;
    }
    getElement():E {
        return this.element;
    }
    getNext():Node<E> {
        return this.next;
    }
    setNext(n: Node<E>):void{
        this.next = n;
    }
}