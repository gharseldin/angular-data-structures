import { ArrayQueue } from './ArrayQueue';

describe('Queue implemented using an Array', () => {

    let queue: ArrayQueue<String>;

    beforeEach(() => {
        queue = new ArrayQueue<String>(5);
      });

    it('should return size = 0 when initially created', () => {
        const size = queue.size();
        expect(size).toEqual(0);
    });

    it('should have a size = 1 when enqueuing a string', () => {
        queue.enqueue('first');
        const size = queue.size();
        expect(size).toEqual(1);
    });

    it('should not exceed the maximum size of 5 even after inserting 6 elements', () => {
        queue.enqueue('1');
        queue.enqueue('2');
        queue.enqueue('3');
        queue.enqueue('4');
        queue.enqueue('5');
        queue.enqueue('6');
        const size = queue.size();
        expect(size).toEqual(5);
    });
});
