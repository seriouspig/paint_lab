const Room = require("./room");

const Decorator = function (stock){
    this.stock = [];
}

Decorator.prototype.addCantoStock = function (paint) {
    this.stock.push(paint);
}

Decorator.prototype.calculatePaintinStock = function () {
    paintTotal = 0;
    for (var paint of this.stock) {
        paintTotal += paint.litres
    }
    return paintTotal

}

Decorator.prototype.canPaintRoom = function (room) {
    if (room.area <= this.calculatePaintinStock()) {
        return true;
    } else { return false};
    
}

Decorator.prototype.paintTheRoom = function (room) {
    if ( this.canPaintRoom(room) === true ) {
        room.paintRoom();
    }
    
}



module.exports = Decorator;



// A decorator should:

// - start with an empty paint stock
// - be able to add a can of paint to paint stock
// - be able to calculate total litres paint it has in stock
// - be able to calculate whether is has enough paint to paint a room
// - be able to paint room if has enough paint in stock
