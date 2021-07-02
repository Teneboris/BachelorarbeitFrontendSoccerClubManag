import React, {useEffect, useState} from 'react';
import Hearder from "../Hearder/Hearder";
import './Admin.css'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router-dom";
import Trainingsdashboardlist from "../Traininingsplan/Trainingsdashboardlist";
import axios from "axios";
import DashboardAdminList from "./DashboardAdminList";

function DashboardAdmin(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [feedbacks, setFeedback] = useState([])
    let history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const collapseNews = () => {
        if(feedbacks !== null)
        history.push('/admin/postnews')
    }

    const CreateGames = () => {
        history.push('/admin/creategames')
    }

    const CreateUser = () => {
        history.push('/admin/createuser')
    }

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/message/getfeedback`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return setFeedback(response.data)
            })
            .catch(error => {

                return console.log(error)
            })
    },[])

    return (
        <div>
            <div>
                <Hearder/>
            </div>
            <br/>
            <br/>
            <form>
                <br/>
                <br/>
                <div className="selectActionStyling">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Please select your action
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                            <MenuItem onClick={collapseNews}>Post News</MenuItem>
                            <MenuItem onClick={CreateGames} >Post Games</MenuItem>
                            <MenuItem onClick={CreateUser} >Register User</MenuItem>
                    </Menu>
                </div>
                <h4>Nachricht</h4>
                <br/>
                <br/>
                <div className='adminStyling container'>
                    <br/>
                    {
                        (feedbacks).map(function (feedback, i){
                            return <DashboardAdminList  key={i} feedback = {feedback}/>
                        })
                    }
                </div>
            </form>

        </div>
    );
}

export default DashboardAdmin;
