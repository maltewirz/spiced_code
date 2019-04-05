// do not repeat! return this.width * this.height

function Rectangle(a, b) {
    this.width = a;
    this.height = b;
}

function Square(n) {
    this.width = n;
    this.height = n;
}

Square.prototype.getArea = function() {
    return this.width * this.height;
};

Rectangle.prototype.getArea = Square.prototype.getArea;

var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20

var square = new Square(4);
console.log(square.getArea()); //16
