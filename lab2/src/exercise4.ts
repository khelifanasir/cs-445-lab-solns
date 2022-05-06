interface baseObject1 {
    width: number;
    length: number;
    calcSize?():number
}


let baseObject : baseObject1= { 
	width: 0, 
	length: 0 
}; 
let rectangle: baseObject1 = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10