interface bankAccount1  { 
	money: number, 
	deposit(value:number):void
};

let bankAccount: bankAccount1 = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
};

interface myself1  { 
	name: string, 
	bankAccount: typeof bankAccount, 
	hobbies: string [],
  
}; 
let myself: myself1 = { 
	name: "John", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);