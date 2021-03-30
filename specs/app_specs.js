const assert = require('assert');
const Paint = require('../paint.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js');
// const { it } = require('mocha');

describe('Paint', function(){

    let paint;

    beforeEach(function(){
        paint = new Paint(10);
    })

    it('should have paint', function(){
        const result = paint.litres;
        assert.strictEqual(result, 10);
    });
    it('should be empty', function(){
        paint = new Paint(0);
        const result = paint.checkIfEmpty(paint);
        assert.strictEqual(result, true)
    });

})