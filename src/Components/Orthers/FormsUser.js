import React, {useEffect, useState} from 'react';
import ApiService from "../../APIService";
import {useCookies} from 'react-cookie';


function FormsUser(props) {
    const [first_name, setFirstName] = useState(' ')
    const [last_name, setLastName] = useState(' ')
    const [token] = useCookies(['myToken'])
    const updateUser = () => {
        ApiService.UpdateUser(props.usersignup.user_id, {first_name,last_name}, token['myToken'])
            .then(response => props.updateInformation(response.data))

    }

    const insertUser = () => {
        ApiService.InsertUser({first_name, last_name}, token['myToken'])
            .then(response => props.insertedInformation(response.data))
    }

    useEffect( () =>{
        setFirstName(props.usersignup.first_name);
        setLastName(props.usersignup.last_name)
    }, [props.usersignup])

    return (
        <div>
            {props.usersignup  ? (
                <div className = "mb-3">
                    <label htmlFor="first_name" className = "form-label">Firstname</label>
                    <input type = "text" className = "form-control" id="first_name"
                           value = {first_name} onChange={e => setFirstName(e.target.value)} placeholder="please enter a new firstname"/>
                    <label htmlFor="last_name" className = "form-label">Lastname</label>
                    <input type = "text" className = "form-control" id="last_name"
                           value = {last_name} onChange={e => setLastName(e.target.value)} placeholder="please enter a new lastname"/>
                    <br/>

                    {
                        props.usersignup.user_id ? <button onClick={updateUser} className="btn btn-success" >Update User</button>
                            : <button onClick={insertUser} className="btn btn-success" >Insert User</button>
                    }

                </div>
            ): null}
        </div>
    );
}

export default FormsUser;
