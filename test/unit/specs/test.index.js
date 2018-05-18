'use strict';

describe('General specs', () => {
    describe('should compare the same values', () => {
        it('native: console.assert', () => {
            console.assert(1);
        });

        it('native: assert', () => {
            const assert = require('assert');
            assert.equal(true, 1);
        });

        it('lib: should', () => {
            const should = require('should');
            should(5).be.exactly(5);
        });

        it('lib: expect', () => {
            const expect = require('expect.js');
            expect(5).to.be.a('number');
        });

        it('lib: better-assert', () => {
            const assert = require('better-assert');
            assert(true === true);
        });
    });
});
