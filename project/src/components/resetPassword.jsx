import React, {useState, useEffect} from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

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
        } else{
            alert("Invalid email");
        }
    }

    function handleClick(event){
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem(email));
        user.password = password;
        localStorage.setItem(email, JSON.stringify(user));
    }

    return(
        <div>
            <h1>Reset</h1>
            <form onSubmit={handleSubmit}>
                <MDBInput
                    className="my-4 w-50"
                    type="email"
                    id="form2Example1"
                    placeholder="Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                <MDBBtn type="submit" className="mb-4" block>
                    Check the Email
                </MDBBtn>
            </form>
            {isLoggedIn &&
                <MDBInput
                className="mb-4 w-25"
                type="password"
                id="form2Example2"
                placeholder="New Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            }
            {isLoggedIn &&
                <MDBBtn type="submit" className="mb-4" onClick={handleClick} block>
                Reset Password
                </MDBBtn>
            }           
            
        </div>
    )
}   