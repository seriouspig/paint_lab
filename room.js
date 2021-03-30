const Room = function(area, painted){
    this.area = area;
    this.painted = false;

}



Room.prototype.paintRoom = function () {
        this.painted = true;
    
};

// A room should:

// - have an area in square meters
// - should start not painted
// - should be able to be painted

module.exports = Room;