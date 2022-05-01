"use strict"

const shoppingCart = (function(){
    let basket = []
    return {
        upsertItem(item){
            for (let i=0; i < basket.length; i++){
                if (basket[i].id == item.id){
                    basket[i] = item
                }
            }
            if (!basket.includes(item)){
                basket.push(item);
            } 
          
          },
         getItemsCount(){
              let count = 0
              for (let each of basket){
                  count++
              }
              return count
          },

        getTotalPrice() {
            let totalPrice = basket.reduce((previous, current) =>
            previous + (current.product.price * current.count) 
        ,0)
        return totalPrice
        },
        removeItemById(id){
            basket = basket.filter(function(item){
                 if(item.id !=id ){ 
                 return item}
                })
        }
    
        
    }
})()

console.log(shoppingCart)

const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309

