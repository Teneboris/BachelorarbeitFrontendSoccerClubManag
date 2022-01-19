import React,{useState,useEffect} from 'react';
import '../Profil/Profil.css'
import HearderResponsive from "../Hearder/HearderResponsive";
import Navbar from "../Hearder/Navbar";

function UserProfil(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
        setUser(JSON.parse(temp))
    },[])

    return (
        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
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
                           value={user.firstName} />
                </div>
                <div className="m-3">
                    <label htmlFor="last_name" className="form-label">Lastname</label>
                    <input className="form-control"
                         value={user.lastName} />
                </div>
                <div className="m-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="form-control"
                           value={user.email} />
                </div>
                {user.roles !== undefined && user.roles[0] === "ROLE_ADMIN"?
                    <button className="btn btn-primary" type="button">Save</button>:null
                }
            </div>
        </div>
    );
}

export default UserProfil;
