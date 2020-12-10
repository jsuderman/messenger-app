import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { Button } from "@material-ui/core"
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {

    const history = useHistory();
    const [ {}, dispatch ] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
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
                    <Button onClick={signIn} className="login__google">Sign in with Google</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
