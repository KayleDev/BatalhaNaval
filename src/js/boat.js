class Boat {
    constructor(name, direction, size) {
        this.name = name;
        this.direction = direction;
        this.size = size;
    }
}

let Destructor = new Boat("Destructor", "Vertical", 3);
let Titanic = new Boat("Titanic", "Straight", 3);

let MarineBoat = new Boat("MarineBoat", "Vertical", 2);
let PirateBoat = new Boat("PirateBoat", "Straight", 2);

let SimpleMarine = new Boat("SimpleMarine", "Vertical", 1);
let SimplePirate = new Boat("SimplePirate", "Straight", 1);

/*
function boatConstructor(boat) {

} */