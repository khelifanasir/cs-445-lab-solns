"use strict"
Array.prototype.removeDuplicatesAsync =function (){
    let arr = this;
  new Promise ((resolve, reject) =>{
     
        let finalArray = []
        for (let each of arr){
               if (finalArray.indexOf(each) == -1){
                   finalArray.push(each)
               }    
           }
           resolve(finalArray) 
      }).then(console.log) 
    
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]