class Square {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

let normalSquare = new Square(20, 20, "#FF0000");
let destroyedSquare = new Square(20, 20, "#000000");
let destroyedBoat = new Square(20, 20, "#0000FF");