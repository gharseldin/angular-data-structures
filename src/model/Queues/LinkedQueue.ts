import { Queue } from './Queue';
import { SinglyLinkedList } from '../linkedlists/SinglyLinkedList';

export class LinkedQueue<E> implements Queue<E> {

    private linkedList = new SinglyLinkedList<E>();

    size(): number {
        return this.linkedList.size();
    }

    isEmpty(): boolean {
        return this.linkedList.isEmpty();
    }

    enqueue(e: E): void {
        this.linkedList.addLast(e);
    }

    first(): E {
        return this.linkedList.first();
    }

    dequeue(): E {
        return this.linkedList.removeFirst();
    }
}
