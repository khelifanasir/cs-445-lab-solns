"use strict"

function isPrime(num){
    
    return new Promise ((resolve,reject) =>{
        for (let i=2; i < num; i++){
            if (num % i == 0){
           setTimeout(reject, 500,{prime: false}) 
        } else {
            setTimeout(resolve, 500,{prime: true}) 
       
        }
}})   
}
 

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

// Output:
// start
// end
// { prime: true }


const isPrime = function(num){
  return  new Promise((resolve,reject) =>
        setTimeout(function(){
            for (let i=2; i < num; i++){
                if (num % i == 0){
                   reject({prime: false})
            } else {
               resolve({prime: true})
           
            }
         
        }},500))   
}

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

