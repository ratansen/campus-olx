import React from "react";
import { Divider } from "@mui/material";
import './Auth.css'
export default function Login(props){
    return (
        <div className="auth-wrapper">
            <h2>Login</h2>
            <div className='login-form'>
                <div className='login-form-field'>
                    <p>Email</p>
                    <input type='email'></input>
                </div>
                <div className='login-form-field'>
                    <p>Password</p>
                    <input type='password'></input>
                </div>

            </div>

            <div className='auth-buttons'>
                <button>Login</button>
                <center><span>Forgot Password?</span></center>
                <Divider style={{fontSize: '0.7rem', margin: '30px 0'}}><p >OR</p></Divider>
                <center>Don't have account? <span onClick={() => props.changeState(false)}> Register here</span></center>
            </div>

        </div>
    )
}