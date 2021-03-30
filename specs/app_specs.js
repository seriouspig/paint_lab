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
    it('should empty itself', function(){
        paint = new Paint(10);
        paint.emptySelf();
        const result = paint.litres;
        assert.strictEqual(result, 0);
    })

})

describe('Room', function(){

    let room;

    beforeEach(function(){
        room = new Room(40);
    })

    it('should have area in sqm', function(){
        const result = room.area;
        assert.strictEqual(result, 40);
    });
    it('should start not painted', function(){
        const result = room.painted;
        assert.strictEqual(result, false)
    });
    it('should be able to be pained', function(){
        room.paintRoom();
        const result = room.painted;
        assert.strictEqual(result, true);
    })

})

describe('Decorator', function(){

    let decorator;

    beforeEach(function(){
        decorator = new Decorator([ {"litres":10}, {"litres":20} ]);
    })

    it('should start with empty paint stock', function(){
        decorator = new Decorator();
        const result = decorator.stock;
        assert.deepStrictEqual(result, []);
    });
    it('should be able to add a can of paint to paint stock', function(){
        paint = new Paint(30);
        decorator.addCantoStock(paint);
        decorator.addCantoStock(paint);
        decorator.addCantoStock(paint);
        const result = decorator.stock.length;
        assert.deepStrictEqual(result, 3)
    });
    it('should be able calculate total litres of paint it has in stock', function(){
        // stock1 = [{"litres": 50}, {"litres": 100}]
        decorator = new Decorator();
        paint1 = new Paint(10);
        paint2 = new Paint(20);
        paint3 = new Paint(30);
        decorator.addCantoStock(paint1);
        decorator.addCantoStock(paint2);
        decorator.addCantoStock(paint3);
        const result = decorator.calculatePaintinStock();
        assert.strictEqual(result, 60);
    });
    it('should be able to calculate wheter it has enough paint to paint the room', function(){
        decorator = new Decorator();
        paint1 = new Paint(10);
        paint2 = new Paint(20);
        paint3 = new Paint(30);
        decorator.addCantoStock(paint1);
        decorator.addCantoStock(paint2);
        decorator.addCantoStock(paint3);
        room1 = new Room(40);
        const result = decorator.canPaintRoom(room1);
        assert.strictEqual(result, true);
    });
    it('should be able to pain room if has enough paint in stock', function(){
        decorator = new Decorator();
        paint1 = new Paint(10);
        paint2 = new Paint(20);
        paint3 = new Paint(30);
        decorator.addCantoStock(paint1);
        decorator.addCantoStock(paint2);
        decorator.addCantoStock(paint3);
        room1 = new Room(60);
        decorator.paintTheRoom(room1);
        const result = room1.painted;
        assert.strictEqual(result, true);
    })


})