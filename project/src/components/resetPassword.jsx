import React, {useState, useEffect} from "react";

export default function Reset(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const emailFromStorage = localStorage.getItem("email");
        const passwordFromStorage = localStorage.getItem("password");
        if(emailFromStorage && passwordFromStorage){
            setPassword(passwordFromStorage);
            setEmail(emailFromStorage);
        }
    }, []);

    function handleSubmit(event){
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem(email))
        if(user){
            setIsLoggedIn(true);
            localStorage.removeItem(user.password)
        } else{
            alert("Invalid email");
        }
    }

    function handleClick(event){
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem(email))
        
        user.password = {password};
        localStorage.setItem(email, JSON.stringify(user));
    }

    return(
        <div>
            <h1>Reset</h1>
            <form onSubmit={handleSubmit}>
                <label>email:
                    <input type="email" value={email} 
                    onChange={(event) => setEmail(event.target.value)} />
                </label>
                <button type="submit">Check the email!</button>
            </form>
            {isLoggedIn && 
                <label>New Password:
                    <input type="password" value={password} 
                    onChange={(event) => setPassword(event.target.value)} />
                </label>
            }
            {isLoggedIn &&
                <button onClick={handleClick}>Renew password</button>
            }
        </div>
    )
}   