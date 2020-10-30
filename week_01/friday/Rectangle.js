Object.prototype.getArea = function() {
    return (this.width * this.height);
};

function Square(n) {
    this.width = n,
    this.height = n;
}

function Rectangle(w,h) {
    this.width = w,
    this.height = h;
}

var square = new Square(4);
square.getArea(); //16

var rect = new Rectangle(4, 5);
rect.getArea(); //20

