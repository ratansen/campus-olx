import React, {useState, useHistory} from "react";
import { Divider } from "@mui/material";
import './Auth.css';
import { axios } from "../api";
import { open_login } from "../store/slices/authModalSlice";
import { useDispatch } from "react-redux";


export default function Register(){

    const dispatch = useDispatch()

	// const initialFormData = Object.freeze({
	// 	email: '',
	// 	username: '',
	// 	password: '',
	// });

	const [formData, updateFormData] = useState({
        	email: '',
        	username: '',
        	password: '',
         });

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		// e.preventDefault();
		console.log(formData);

		axios
			.post(`user/create/`, {
				email: formData.email,
				user_name: formData.username,
				password: formData.password,
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};

    return (
        <div className="auth-wrapper">
        
        <h2>Register</h2>
            <div className='login-form'>
                <div className='login-form-field'>
                    <p>Username</p>
                    <input onChange={handleChange} name='username' id='username'></input>
                </div>
                <div className='login-form-field'>
                    <p>Email</p>
                    <input onChange={handleChange} name='email' id='email' type='email'></input>
                </div>

            </div>
            <div className='login-form'>
                <div className='login-form-field'>
                    <p>Password</p>
                    <input value={formData.password} onChange={handleChange} name='password' id='password' type='password'></input>
                </div>
                <div className='login-form-field'>
                    <p>Repeat Password</p>
                    <input type='password' onChange={handleSubmit}></input>
                </div>

            </div>

            <div className='auth-buttons'>
                <button type="submit" onClick={handleSubmit}>Register</button>
                <center><span>Resend Verification</span></center>
                <Divider style={{fontSize: '0.7rem', margin: '30px 0'}}><p >OR</p></Divider>
                <center>Already have an account? <span onClick={() => dispatch(open_login())}> Login here</span></center>
            </div>           
        </div>
    )
}