import { expect } from 'chai';
import 'mocha';
import { ArrayQueue } from './ArrayQueue';

describe('Queue implemented using a Array', () => {

    it('should return size = 0', () => {
        const queue: ArrayQueue<String> = new ArrayQueue<String>(10);
        const size = queue.size();
        expect(size).to.equal(0);
    });
});
