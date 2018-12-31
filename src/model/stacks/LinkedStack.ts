import { Stack } from './Stack';
import { SinglyLinkedList } from '../linkedlists/SinglyLinkedList';

export class LinkedStacke<E> implements Stack<E> {
    linkedList: SinglyLinkedList<E> = new SinglyLinkedList<E>();

    size(): number {
        return this.linkedList.size();
    }

    isEmpty(): boolean {
        return this.linkedList.isEmpty();
    }

    push(e: E): void {
        this.linkedList.addFirst(e);
    }

    top(): E {
        return this.linkedList.first();
    }

    pop(): E {
        return this.linkedList.removeFirst();
    }
}
