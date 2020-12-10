import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { Button } from "@material-ui/core"

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((error) => alert(error.message));
    };

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/")
        })
        .catch((error) => alert(error.message));
    };

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => console.log(result))
        .catch((error) => console.log(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gHHNnMlTrTG5gZOYNOwju3BGVWUAWNbL7g&usqp=CAU"
                alt=""
                />
                <div className="login__text">
                    <h1>Login</h1>
                    <form>
                        <h3>Email</h3>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                        <h3>Password</h3>
                        <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                        <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                    </form>
                    <p>
                        Sign up to access chatrooms
                    </p>
                    <button onClick={register} className="login__registerButton">Create Account</button>
                    <Button onClick={signIn} className="login__google">Sign in with Google</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
