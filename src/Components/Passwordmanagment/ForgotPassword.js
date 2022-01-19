import React, {useState} from 'react';
import PasswordChangesuccessful from "./PasswordChangesuccessful";
import {useHistory} from 'react-router-dom'
import ApiService from "../../APIService";
import {useCookies} from "react-cookie";



function ForgotPassword(props) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [token] = useCookies(['myToken'])
    const users = ApiService.getAllUsers()

    let history = useHistory()
        console.log("Check please valid email or macht password");

    const successfulchangespassword = () =>{

        if(password === confirmPassword && email === users.email) {
            ApiService.ChangePassword(users.id, {password, email}, token['myToken'])
                .then(history.push('/forgotpassword/passwordchangesuccessfully'))

        }else{
            console.log("Check please valid email or macht password");
        }

    }


    return (

        <div className = "App">
            <div className='Logstyle' >

                <div className="logTitle">
                    {<h1>Change Password</h1>}
                </div>

                <div className="mb-3">
                    <label className = "form-label" htmlFor = "username" >Password</label>
                    <input type="password" className = "form-control" id="username" placeholder="please enter new password"
                           value={password}  onChange={ event => setPassword(event.target.value)}  autoFocus />
                </div>
                <div className="mb-3">
                    <label className = "form-label" htmlFor = "confirmPassword" >ConfirmPassword</label>
                    <input type="password" className = "form-control" id="confirmPassword" placeholder="please new confirmpassword"
                           value={confirmPassword}  onChange={ event => setConfirmPassword(event.target.value)}  required/>
                </div>
                <div className="mb-3">
                    <label className = "form-label" htmlFor = "email" >Email</label>
                    <input type="email" className = "form-control" id="email" placeholder="please enter email"
                           value={email}  onChange={ event => setEmail(event.target.value)}  required/>
                </div>
                <button onClick={successfulchangespassword} className="btn btn-primary" >Reset Password</button>
            </div>

        </div>
    );
}

export default ForgotPassword;
