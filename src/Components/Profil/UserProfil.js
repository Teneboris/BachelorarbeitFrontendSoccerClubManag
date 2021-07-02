import React,{useState,useEffect} from 'react';
import Hearder from "../Hearder/Hearder";
import '../Profil/Profil.css'
import axios from "axios";


function UserProfil(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        var token = localStorage.getItem('token');
        console.log(props.match.params.profilID)
        axios.get(`http://localhost:8080/api/auth/all/users/` + props.match.params.profilID,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                return setUsers(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    },[])

        console.log(users)

    return (
        <div>
            <div>
                <Hearder/>
            </div>

            <br/>
            <br/>
            <div className="userprofilstyling container">
                <img
                    src="../image/profilLogo.png"
                    className="rounded-circle"
                    height="180"
                />
                <h4>person Data</h4>
                <br/>
                <div className="m-3">
                    <label htmlFor="first_name" className="form-label">Firstname</label>
                    <input className="form-control"
                           />
                </div>
                <div className="m-3">
                    <label htmlFor="last_name" className="form-label">Lastname</label>
                    <input className="form-control"
                           />
                </div>
                <div className="m-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="form-control"
                           />
                </div>
            </div>
                <button className="btn btn-primary" type="button">Save</button>
            </div>
    );
}

export default UserProfil;
