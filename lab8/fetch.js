
window.onload = function f (){
    fetchUser()
    document.getElementById("ref").onclick = () =>{
        document.getElementById("list").innerHTML = ''
        fetchUser()
    }
 }
 
 function fetchUser(){
     fetch (`https://randomuser.me/api/?results=5`)
     .then (response => response.json())
     .then (users => {
          console.log(users)
        //let div = document.getElementById("list").innerHTML
        for (let key in users.results){
           // console.log(users.results[key])
            document.getElementById("list").innerHTML += 
            `<img src="${users.results[key].picture.large}" alt="pic">
            <li>${users.results[key].name.first} ${users.results[key].name.last}</li>
            <li>${users.results[key].phone}</li>
            <li>${users.results[key].email}</li>
            <br><br>`
        }
        
     })
    
 }