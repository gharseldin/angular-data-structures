export class SinglyLinkedList<E>{
    // Instance variables of the SinglyLinkedList
    private head: Node<E> = null;
    private tail: Node<E> = null;
    private sizeNumber : number = 0;
    
    constructor(){}

    // Access methods
    size(): number{
        return this.sizeNumber;
    }
    isEmpty(): boolean {
        return this.sizeNumber === 0;
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
        if(this.sizeNumber === 0)
            this.tail = this.head;
        this.sizeNumber++;
    }
    addLast(e:E):void{
        const newest : Node<E> = new Node<E>(e, null);
        if(this.sizeNumber === 0)
            this.head = newest;
        else
            this.tail.setNext(newest);
        this.tail = newest;
        this.sizeNumber++;
    }
    removeFirst():E{
        if(this.isEmpty())
            return null;
        const answer: E = this.head.getElement();
        this.head = this.head.getNext();
        this.sizeNumber--;
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