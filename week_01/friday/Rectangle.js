// Object.prototype.getArea = function() {
//     return (this.width * this.height);
// }; NOTE From David: NEVER DO THIS!

function getArea() {
    return (this.width * this.height);
}

Square.prototype.getArea = getArea;

Rectangle.prototype.getArea = getArea;

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

