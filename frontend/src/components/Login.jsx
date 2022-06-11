import React, {useState} from "react";
import { Divider } from "@mui/material";
import './Auth.css'
import { axios } from "../api";
import { useSelector, useDispatch } from 'react-redux'
import { load_user } from "../store/slices/authSlice";

export default function Login(props){
    const dispatch = useDispatch()

	const [formData, updateFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axios
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axios.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				
				console.log(res);
                dispatch(load_user(res.data.access))
				//console.log(res.data);
			});
	};


    return (
        <div className="auth-wrapper">
            <h2>Login</h2>
            <div className='login-form'>
                <div className='login-form-field'>
                    <p>Email</p>
                    <input onChange={handleChange} name="email" id='email' type='email'></input>
                </div>
                <div className='login-form-field'>
                    <p>Password</p>
                    <input onChange={handleChange} name="password" id='password' type='password'></input>
                </div>

            </div>

            <div className='auth-buttons'>
                <button onClick={handleSubmit}>Login</button>
                <center><span>Forgot Password?</span></center>
                <Divider style={{fontSize: '0.7rem', margin: '30px 0'}}><p >OR</p></Divider>
                <center>Don't have account? <span onClick={() => props.changeState(false)}> Register here</span></center>
            </div>

        </div>
    )
}