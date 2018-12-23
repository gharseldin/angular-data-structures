
export class CircularlyLinkedList<E>{

    private size: number;
    private tail: Node<E>;

    constructor() { }

    getSize(): number {
        return this.size;
    }
    isEmpty(): boolean {
        return this.size === 0;
    }
    first(): E {
        if (this.isEmpty())
            return null;
        return this.tail.getNext().getElement();
    }
    last(): E {
        if (this.isEmpty())
            return null;
        return this.tail.getElement();
    }
    rotate(): void {
        if (!this.isEmpty())
            this.tail = this.tail.getNext();
    }
    addFirst(element: E): void {
        if (this.isEmpty()) {
            this.tail = new Node<E>(element, null);
            this.tail.setNext(this.tail);
        } else {
            const node: Node<E> = new Node(element, null);
            node.setNext(this.tail.getNext());
            this.tail.setNext(node);
        }
        this.size++;
    }
    addLast(element: E): void {
        this.addFirst(element);
        this.rotate();
    }
    removeFirst(): E {
        if (this.isEmpty())
            return null;
        const node: Node<E> = this.tail.getNext();
        if (this.size === 1)
            this.tail = null;
        else
            this.tail.setNext(node.getNext());
        this.size--;
        return node.getElement();
    }

}
class Node<E> {
    private element: E;
    private next: Node<E>;
    constructor(e: E, n: Node<E>) {
        this.element = e;
        this.next = n;
    }
    getElement(): E {
        return this.element;
    }
    getNext(): Node<E> {
        return this.next;
    }
    setNext(n: Node<E>): void {
        this.next = n;
    }
}