interface ICar {
    name:string;
    acceleration:number;
     
    honk():void
    accelerate(speed:number):void 
}

class Car implements ICar {
    name:string;
    acceleration:number=0;
    constructor(name:string) {
        this.name = name;
        this.acceleration = 0;
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed:number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car: Car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60