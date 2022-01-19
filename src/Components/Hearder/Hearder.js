import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useHistory} from 'react-router-dom'
import './hearder.css'


function Hearder(props) {

    let [user, setUser] = useState(undefined);

    const [anchorEl, setAnchorEl] = React.useState(null);
    let history = useHistory()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
        setUser(JSON.parse(temp))
        console.log(user)
    },[])


    const ProfilPush = () => {
        history.push(`/profile/`+user.id)
    }


    const logoutBtn = ()=>{
        localStorage.removeItem("jwtToken")
        history.push('/')
    }

    return (

            <nav className="navbar navbar-expand navbar-dark bg-success">
                <div className="container-fluid">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <a className="navbar-brand mt-2 mt-lg-0" href="/news">
                            <h3 className='logo'>VirtCoaching</h3>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/news">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/trainingsplan">Trainingsplan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/games">Games</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/players">players</a>
                                </li>
                                {user !== undefined && user.roles[0] === "ROLE_COACH" ?
                                    <li className="nav-item">
                                        <a className="nav-link" href="/trainer">Coach</a>
                                    </li> : null
                                }
                                {user !== undefined && user.roles[0] === "ROLE_ADMIN" ?
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin">Administrator</a>
                                    </li> : null
                                }

                                <li className="nav-item">
                                    <a className="nav-link" href="/message">Message</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/hearderRespo">ResponsiveHearder</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="d-flex align-items-center">

                        <a className="text-reset me-3" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>

                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            {user !== undefined ?
                                user.firstName : "konto"
                            }
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={ProfilPush}>Profile</MenuItem>
                            <MenuItem onClick={logoutBtn}>Logout</MenuItem>
                        </Menu>
                    </div>

                </div>
            </nav>

    );
}

export default Hearder;
