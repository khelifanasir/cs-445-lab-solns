"use strict"

Array.prototype.removeDuplicatesAsync = async function (){
    try {
        let arr = this;
        let result = await new Promise ((resolve) =>{
          
             let finalArray = []
             for (let each of arr){
                    if (finalArray.indexOf(each) == -1){
                        finalArray.push(each)
                    }    
                }
                resolve(finalArray) 
           })
           console.log(result) 
    } catch (error) {
        console.log(error)
    }
  
    
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]