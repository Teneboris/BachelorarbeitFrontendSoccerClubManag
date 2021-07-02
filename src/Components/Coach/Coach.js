import React, {useEffect, useState} from 'react';
import Hearder from "../Hearder/Hearder";
import './Coach.css'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router-dom";
import axios from "axios";
import CoachMessageList from "./CoachMessageList";
import {useCookies} from "react-cookie";

function Coach(id) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [postmessage, setPostMessage] = useState([])
    const [feedbacksToCoachs, setfeedbacksToCoachs] = useState([])
    let history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const addtrainings = () =>{
        history.push('/trainer/addtraningsplan')
    }

    const receivedMessageBtn = function (appendmessage){
        const new_postMessage = [...postmessage, appendmessage]
        setPostMessage(new_postMessage )
    }

    const deletePostedMessagebtn = function (){
        const new_postMessage = postmessage.filter(mypostmessage =>{
            if(mypostmessage.id === postmessage.id){
                return false
            }
            else{
                return true;
            }
        })
        setPostMessage(new_postMessage)
    }

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/message/getfeedback`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return setfeedbacksToCoachs(response.data)
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
                        <MenuItem onClick={addtrainings}>Add Training</MenuItem>
                        <MenuItem >Start Elf</MenuItem>
                    </Menu>
                </div>
                <h4>Nachricht</h4>
                <br/>
                <br/>
                <div className='adminStyling container'>
                    <br/>
                        {
                            feedbacksToCoachs.map(function(feedbacksToCoach, i){
                            return  <CoachMessageList key={i} feedbacksToCoach={feedbacksToCoach}/>
                        })
                        }
                </div>
            </form>


        </div>
    );
}

export default Coach;
