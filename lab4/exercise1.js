"use strict"

class RegularBulb {
    constructor(){
        this.lumens = "50 - 100";
        this.age = "1 year";
        this.color = "one type";
    }
}


class EnergyBulb {
    constructor(color){
        this.lumens = "5 - 40";
        this.age = "10 year";
        this.color = color;
    }
}

class Factory {
    createBulb (type,color){
        let bulb;
        if (type == "regular" && color ==null){
            bulb = new RegularBulb();
        }
        else  if (type == "energy" && color != null){
            bulb = new EnergyBulb(color);
        }
        return bulb;
    }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}