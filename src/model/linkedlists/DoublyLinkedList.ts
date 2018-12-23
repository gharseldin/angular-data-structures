export class DoublyLinkedList<E> {

    private header: Node<E>;
    private trailer: Node<E>;
    private sizeValue: number = 0;

    constructor() {
        this.header = new Node<E>(null, null, null);
        this.trailer = new Node<E>(null, this.header, null);
        this.header.setNext(this.trailer);
    }

    public size(): number {
        return this.sizeValue;
    }
    public isEmpty(): boolean {
        return this.sizeValue === 0;
    }
    public first(): E {
        if (this.isEmpty())
            return null;
        return this.header.getNext().getElement();
    }
    public last(): E {
        if (this.isEmpty())
            return null;
        return this.trailer.getPrev().getElement();
    }
    public addFirst(element: E): void {
        this.addBetween(element, this.header, this.header.getNext());
    }
    public addLast(element: E): void {
        this.addBetween(element, this.trailer.getPrev(), this.trailer);
    }
    public removeFirst(): E {
        if (this.isEmpty())
            return null;
        return this.remove(this.header.getNext());
    }
    public removeLast(): E {
        if (this.isEmpty())
            return null;
        return this.remove(this.trailer.getPrev());
    }
    public addBetween(e: E, pre: Node<E>, suc: Node<E>): void {
        const node: Node<E> = new Node<E>(e, pre, suc);
        pre.setNext(node);
        suc.setPrev(node);
        this.sizeValue++;
    }
    public remove(node: Node<E>): E {
        const element: E = node.getElement();
        node.getPrev().setNext(node.getNext());
        node.getNext().setPrev(node.getPrev());
        this.sizeValue--;
        return element;
    }
}

class Node<E> {
    private element: E;
    private prev: Node<E>;
    private next: Node<E>;

    constructor(element: E, prev: Node<E>, next: Node<E>) {
        this.element = element;
        this.prev = prev;
        this.next = next;
    }

    public getElement(): E {
        return this.element;
    }
    public getPrev(): Node<E> {
        return this.prev;
    }
    public getNext(): Node<E> {
        return this.next;
    }
    public setPrev(node: Node<E>): void {
        this.prev = node;
    }
    public setNext(node: Node<E>): void {
        this.next = node;
    }
}