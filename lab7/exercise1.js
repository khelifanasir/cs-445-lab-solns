"use strict"

async function isPrimeAsync(num){ 
    try {
        const result = await new Promise((resolve, reject) =>{
            for (let i=2; i < num; i++){
                if(num % i == 0){
                    setTimeout(function(){reject({prime: false})},500)
                } else{
                    setTimeout(function(){resolve({prime:true})},500)
                }
            }
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
   
   }
   
   console.log('start');
   isPrimeAsync(7)
   console.log('end');
   
//    async function isPrimeAsync(num){     
//        try {
//            const result = await new Promise((resolve, reject) =>{
//                for (let i=2; i < num; i++){
//                    if(num % i == 0){
//                        setTimeout(reject, 500,{prime: false})
//                    } else{
//                        setTimeout(resolve, 500,{prime: true})  
//                    }
//                }
//            })
//            console.log(result)
//        } catch (error) {
//            console.log(error)
//        }
      
//       }
        
//    console.log('start');
//    isPrimeAsync(7)
//    console.log('end');
   
   // Output:
   // start
   // end
   // { prime: true }
   