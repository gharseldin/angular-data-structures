import { CircularLinkedQueue } from './CircularLinkedQueue';

function initializeWith3Elements(queue: CircularLinkedQueue<String>): void {
    queue.enqueue('one');
    queue.enqueue('two');
    queue.enqueue('three');
}

describe('Circular Queue implemented using a Linked List' , () => {

    let queue: CircularLinkedQueue<String>;

    beforeEach(() => {
        queue = new CircularLinkedQueue<String>();
    });

    it('has size = 0 when instantiated', () => {
        const size = queue.size();
        expect(size).toEqual(0);
    });

    it('has size = 3 when enquing 3 elements', () => {
        initializeWith3Elements(queue);
        const size = queue.size();
        expect(size).toEqual(3);
    });

    it('has a first element of two and last of two after rotating', () => {
        initializeWith3Elements(queue);
        queue.rotate();
        const first = queue.dequeue();
        queue.dequeue();
        const last = queue.dequeue();

        expect(queue.size()).toEqual(0);
        expect(first).toEqual('two');
        expect(last).toEqual('one');
    });

});
