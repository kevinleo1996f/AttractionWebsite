import React from "react";


function listener(){
  
    const a = document.getElementById('regis')
    a.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = a.elements['name'];
        const user = nameInput.value;
        console.log(user);
    })
}

export default function Reg(){

    return(
        <form id="regis">
            <input type="text" id="name" name="username" placeholder="Username"/>
            <button onClick={listener} value="Submit" type="submit">Submit</button>
        </form>
    )
}