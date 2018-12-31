import { Queue } from './Queue';

export class ArrayQueue<E> implements Queue<E> {

    private data: E[];
    private front: number;
    private queueSize: number;
    private maxSize: number;

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.queueSize = 0;
        this.front = 0;
        this.data = [];
    }

    size(): number {
        return this.queueSize;
    }

    isEmpty(): boolean {
        return this.queueSize === 0;
    }

    enqueue(e: E): void {
        if (this.queueSize === this.maxSize) {
            // Typically we would throw an exption
            return;
        }
        this.data[(this.front + this.queueSize % this.maxSize)] = e;
        this.queueSize++;
    }

    first(): E {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.front];
    }

    dequeue(): E {
        const element = this.data[this.front];
        this.data[this.front] = null;
        this.front = ++this.front % this.maxSize;
        this.queueSize--;
        return element;


    }
}
