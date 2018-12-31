import { Queue } from './Queue';

export interface CircularQueue<E> extends Queue<E> {
    rotate(): void;
}
