export interface Stack<E> {
    size(): number;
    isEmpty(): boolean;
    push(e: E): void;
    top(): E;
    pop(): E;
}
