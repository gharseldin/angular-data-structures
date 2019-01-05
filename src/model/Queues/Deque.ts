export interface Deque<E> {

    size(): number;

    isEmpty(): boolean;

    first(): E;

    last(): E;

    addFirst(e: E): void;

    addLast(e: E): void;

    removeFirst(): E;

    removeLast(): E;
}
