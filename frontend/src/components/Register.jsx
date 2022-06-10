import React from "react";
import { Divider } from "@mui/material";
import './Auth.css'

export default function Register(props){
    return (
        <div className="auth-wrapper">
        <h2>Register</h2>
            <div className='login-form'>
                <div className='login-form-field'>
                    <p>Username</p>
                    <input></input>
                </div>
                <div className='login-form-field'>
                    <p>Email</p>
                    <input></input>
                </div>

            </div>
            <div className='login-form'>
                <div className='login-form-field'>
                    <p>Password</p>
                    <input></input>
                </div>
                <div className='login-form-field'>
                    <p>Repeat Password</p>
                    <input></input>
                </div>

            </div>

            <div className='auth-buttons'>
                <button>Register</button>
                <center><span>Resend Verification</span></center>
                <Divider style={{fontSize: '0.7rem', margin: '30px 0'}}><p >OR</p></Divider>
                <center>Already have an account? <span onClick={() => props.changeState(true)}> Login here</span></center>
            </div>           
        </div>
    )
}