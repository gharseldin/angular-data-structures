export interface Queue<E> {

    size(): number;

    isEmpty(): boolean;

    enqueue(e: E): void;

    first(): E;

    dequeue(): E;

}
