import React,{useState,useEffect} from 'react';
import Navbar from "../Hearder/Navbar";
import axios from "axios";
import profipicture from "/Users/borisfotsotene/WebstormProjects/BachelorarbeitFrontendSoccerClubManag/src/image/onana.jpeg"
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ApiService from "../../APIService";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";


 function UserList(props) {

    const [users, setUser] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [token] = useCookies(['myToken']);
    const reload=()=>window.location.reload();
    let history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/auth/all/users/`,{
        })
            .then(response => {
                return setUser(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    },[])

  /*   const deleteUser = () =>{
         ApiService.DeleteTrainingsplan(props.training.id, token['myToken'])
             .then(response => props.deleteTrainingsplanbtn(response))
             .then(() => reload())
             .catch(err => console.log(err))
     }*/

     const updateUserData = () =>{
         history.push('trainingsplan/comment/'+ props.training.id+ '/training')
     }

     const handleClickOpen = () => {
         setOpen(true);
     };

     const handleClose = () => {
         setOpen(false);
     };

    return (
        <div>
            <div className = "navbar">
                <Navbar/>
            </div>

            <div className="userList container">
                {users?.map(user =>{
                    return <a key={user.id} playerposition = {user} href={ "/players/profis/"+ user.id}><p className="userListName row">
                        <img className="col-sm-4" src={profipicture}/> {user.firstName}</p></a>
                })
                }
            </div>
        </div>
    );
};
export default UserList;
