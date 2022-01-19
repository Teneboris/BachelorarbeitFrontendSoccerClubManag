import React, {useState, useEffect} from 'react';
import ApiService from "../../APIService";
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()
    const required = true;
    const disabled = false;

    const loginBtn = () =>{
        ApiService.User_Login({username, password})
            .then( response =>{
                if(response.data.accessToken){
                    localStorage.setItem('jwtToken', JSON.stringify(response.data) )
                    localStorage.setItem('token', response.data.accessToken )
                    history.push('/news')
                }
            })
            .catch(error => console.log(error))
    }
    return (

        <div className = "App">
            <div className='Logstyle' >
            <br/>
            <div className="logTitle">
                <h1>Login</h1>
            </div>
            <br/>
                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "username" >Benutzername</label>
                        <input type="text" className = "form-control" id="username"
                               value={username} autoFocus required onChange={event => setUsername(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "password" >Passwort</label>
                        <input type="password" className="form-control" id="password"
                               value={password} onChange={event => setPassword(event.target.value)} required={required}/>
                    </div>
                    <button onClick={loginBtn} className="btn btn-primary">Login</button>
                </div>
        </div>
    );
}

export default Login;
