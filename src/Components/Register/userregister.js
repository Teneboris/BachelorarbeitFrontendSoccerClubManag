import React, {useState} from 'react';
import Hearder from "../Hearder/Hearder";
import './userregister.css';
import ApiService from "../../APIService";
import {useHistory} from "react-router-dom";

function Userregister(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState([])
    const [confirmPassword, setConfirmPassword] = useState('')
    let history = useHistory()

    const RegisterBtn = () => {
        if(password === confirmPassword){
            ApiService.RegisterUser({firstName: firstName,lastName: lastName,email,username,role, password,confirmPassword})
                .then(() => history.push('/confirmregistration'))
                .catch(error => console.log(error))
        }else {
            console.log("Passwords do not match");
        }
    }

    const dropdownOptions = [
        {
            label: "The Color Red",
            value: "red",
        },
        {
            label: "The Color Green",
            value: "green",
        },
        {
            label: "The Color Blue",
            value: "blue",
        },
    ]

    return (

        <div>

            <div>
                <Hearder/>
            </div>
            <br/>
            <br/>
            <div className='registerStyling container'>
                <h4>Register</h4>
                <br/>
                <br/>
                <div className="mb-3">

                    <label className = "form-label" htmlFor = "firt_name" >Firstname</label>
                    <input type="text" className = "form-control" id="firt_name" placeholder="please enter firstname"
                           value={firstName} onChange={event => setFirstName(event.target.value)} autoFocus required/>
                </div>
                <div className="mb-3">

                    <label className = "form-label" htmlFor = "last_name" >Lastname</label>
                    <input type="text" className = "form-control" id="last_name" placeholder="please enter lastname"
                           value={lastName} onChange={event => setLastName(event.target.value)} required/>
                </div>
                <div className="mb-3">

                    <label className = "form-label" htmlFor = "email" >Email</label>
                    <input type="email" className = "form-control" id="email" placeholder="please enter email"
                           value={email} onChange={event => setEmail(event.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className = "form-label" htmlFor = "username" >Username</label>
                    <input type="text" className = "form-control" id="username" placeholder="please enter username"
                           value={username}  onChange={ event => setUsername(event.target.value)} required/>
                </div>

                <select className="form-select" aria-label="Default select example" id="data-type" onChange={event => setRole( role =>[...role,  event.target.value])} required>
                    <option selected>select user</option>
                    <option value="coach">Coach</option>
                    <option value="player">Player</option>
                </select>
                <div className="mb-3">
                    <label className = "form-label" htmlFor = "password" >Passwort</label>
                    <input type="password" className = "form-control" id="password" placeholder="please enter password"
                           value={password} onChange={event => setPassword(event.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label className = "form-label" htmlFor = "comfirmpassword" >ComfirmPasswort</label>
                    <input type="password" className = "form-control" id="comfirmpassword" placeholder="please enter comfirmpassword"
                           value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}required/>
                </div>
                <button onClick={RegisterBtn}  className="btn btn-primary">Register</button>
            </div>

        </div>
    );
}

export default Userregister;
