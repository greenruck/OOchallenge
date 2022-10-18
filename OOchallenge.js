class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model =model;
        this.year = year;
    }
    toString(){
        console.log(`The vehicle is a ${this.make}  ${this.model}  from ${this.year}`);
    }
    honk(){
        console.log('BEEP!');
    };
    numWheels(){
        console.log(4);
    };
}
class Garage {
    constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity;
}
add(newVehicle){
    if(!(newVehicle instanceof Vehicle)){
        return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity){
        return "Sorry, we are full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle Added!";
}
}

const myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
    }
        numWheels(){
            console.log(2);
        };
        revEngine(){
            console.log('VROOOM!');
        };

}

