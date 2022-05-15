//const {from} = rxjs;
window.onload = function f (){
    //fetchUser()
    document.getElementById("btn").onclick = () =>{
      let numbEmployee =  document.getElementById("input").value; 
        fetchUser(numbEmployee)
    }
 }
 
 function fetchUser(numbEmployee){
     fetch (`https://randomuser.me/api/?results=${numbEmployee}`)
     .then (response => response.json())
     .then (users => {
          console.log(users)
           //let div = document.getElementById("list").innerHTML
        // from(users.result)
        // .subscribe(user =>{
        //     document.getElementById("list").innerHTML += 
        //     `
        //     <li><span>${user.results[key].name.first} ${user.results[key].name.last}</span></li>
        //     <li>Location</li>
        //     <li>${user.results[key].location.street.number} " " ${user.results[key].location.street.name}</li>
        //     <li>${user.results[key].location.city},${user.results[key].location.state} </li>
        //     <br><br><br>`
        // });
        // let div = document.getElementById("list").innerHTML
        for (let key in users.results){
           // console.log(users.results[key])
            document.getElementById("list").innerHTML += 
            `
            <li><span>${users.results[key].name.first} ${users.results[key].name.last}</span></li>
            <li>Location</li>
            <li>${users.results[key].location.street.number} " " ${users.results[key].location.street.name}</li>
            <li>${users.results[key].location.city},${users.results[key].location.state} </li>
            <br><br><br>`
        }
        
     })
    
 }