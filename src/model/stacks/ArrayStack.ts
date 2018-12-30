import { Stack } from "./Stack";
export class ArrayStack<E> implements Stack<E> {

    private data: E[];
    private t = -1;

    constructor() { }

    public size(): number {
        return this.t + 1;
    }

    public isEmpty(): boolean {
        return this.t === -1;
    }

    public push(e: E): void {
        this.data[++this.t] = e;
    }

    public top(): E {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.t];
    }

    public pop(): E {
        if (this.isEmpty()) {
            return null;
        }
        const answer: E = this.data[this.t];
        this.data[this.t] = null;
        this.t--;
        return answer;
    }
}
