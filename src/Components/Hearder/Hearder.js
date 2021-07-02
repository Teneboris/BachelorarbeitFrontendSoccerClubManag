import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useHistory} from 'react-router-dom'


function Hearder(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    let history = useHistory()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const ProfilPush = () => {
        history.push(`/profile/${props.match.params.profilID}`)
    }



    const logoutBtn = ()=>{
        localStorage.removeItem("jwtToken")
        history.push('/')
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-expand navbar-dark nav-pills bg-success">

            <div className="container-fluid">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="/news">
                        <h3 className='logo'>VirtCoaching</h3>
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                            <a className="nav-link" href="/trainer">Coach</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/players">players</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin">Administrator</a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">

                    <a className="text-reset me-3" href="#">
                        <i className="fas fa-shopping-cart"></i>
                    </a>

                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Konto
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem  onClick={ProfilPush}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem  onClick={logoutBtn}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>
        </nav>
    );
}

export default Hearder;
