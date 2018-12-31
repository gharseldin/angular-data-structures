import { CircularQueue } from './CircularQueue';
import { CircularlyLinkedList } from '../linkedlists/CircularlyLinkedList';

export class CircularLinkedQueue<E> implements CircularQueue<E> {
    linkedList = new CircularlyLinkedList<E>();

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

    rotate(): void{
        this.linkedList.rotate();
    }
}


