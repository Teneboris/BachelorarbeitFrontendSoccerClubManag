import React, {useEffect, useState} from 'react';
import ApiService from "../../APIService";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { TextField} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function Trainingsplanlist(props) {

    const [open, setOpen] = React.useState(false);
   // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [token] = useCookies(['myToken'])
    const [user, setUser] = useState([]);
    const [date, setSelectedDate] = useState(new Date());
    const reload=()=>window.location.reload();
    let history = useHistory()

    const deleteTrainingsplan = () =>{
        ApiService.DeleteTrainingsplan(props.training.id)
            .then(response => props.deleteTrainingsplanbtn(response))
            .then(() => reload())
            .catch(err => console.log(err))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ClickToGiveTheFeedback = () =>{
        history.push('trainingsplan/comment/'+ props.training.id+ '/training')
    }

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
        setUser(JSON.parse(temp))
        console.log(user)
    },[])

    const checkTrainingCommentEnabled = (date) =>{
        var dateArray = date.split(".");
        var trainingsDate = new Date(dateArray[2].substring(0, 4), dateArray[1] -1, dateArray[0]);
        var currentDate = new Date();
        let getDate = currentDate.getTime() >= trainingsDate.getTime();
        return getDate;
    }

    return (
     <div>

        <div type="button" className="stylingDasboardList" onClick={handleClickOpen}>
            {
                        <div key={props.training.id} className = "stylingDasboarddaten">
                            <p><h6>Date</h6>{props.training.date}</p>
                            <p><h6>Title</h6>{props.training.title}</p>
                            <p><h6>Description</h6>{props.training.description}</p>
                        </div>
            }
        </div>

         <Dialog
             open={open}
             TransitionComponent={Transition}
             onClose={handleClose}
             aria-labelledby="alert-dialog-slide-title"
             aria-describedby="alert-dialog-slide-description"
         >
             <DialogTitle id="alert-dialog-slide-title" style = {{textAlign: "center", backgroundColor:"green"}}>Trainingsplan {props.training.date}</DialogTitle>
             <DialogContent dividers>
                 <DialogContent>
                     <DialogContentText id="alert-dialog-slide-description">
                         <Grid container direction={"column"} spacing={5}>
                             <Grid item>
                                 <TextField
                                     //type="date"
                                     format="dd-mm-yyyy"
                                     id="filled-read-only-input"
                                     label="Datum"
                                     value={props.training.date}
                                     InputProps={{
                                         readOnly: true,
                                     }}
                                     variant="filled"
                                     fullWidth
                                 />
                             </Grid>
                             <Grid item>{
                             }
                                 <TextField
                                     id="filled-read-only-input"
                                     label="trainingstime"
                                     format="HH:mm:ss"
                                     value={props.training.trainingstime}
                                     InputProps={{
                                         readOnly: true,
                                     }}
                                     variant="filled"
                                     fullWidth
                                 />
                             </Grid>
                             <Grid item>
                                 <TextField
                                     id="filled-read-only-input"
                                     label="Trainingstitle"
                                     value={props.training.title}
                                     InputProps={{
                                         readOnly: true,
                                     }}
                                     variant="filled"
                                     fullWidth
                                 />

                             </Grid>
                             <Grid item>
                                 {props.training.description ?
                                     <TextField
                                         id="outlined-multiline-static"
                                         label="Description"
                                         InputProps={{
                                             readOnly: true,
                                         }}
                                         variant="filled"
                                         fullWidth
                                         aria-label="maximum height"
                                         value={props.training.description}/>:
                                     null
                                 }
                             </Grid>
                         </Grid>
                     </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                    <div>
                        {user.roles !== undefined && user.roles[0] === "ROLE_PLAYER" && checkTrainingCommentEnabled(props.training.date) === true?
                            <Button variant="contained" style={{backgroundColor: 'green'}} type='button' onClick={ClickToGiveTheFeedback} >
                                Feedback
                            </Button> : checkTrainingCommentEnabled(props.training.date) === false?
                                <Button disabled>
                                    Feedback
                                </Button>:null
                        }
                        {user.roles !== undefined && (user.roles[0] === "ROLE_COACH" || user.roles[0] === "ROLE_ADMIN")?
                            <Button variant="contained"  style={{backgroundColor: 'red'}} type='button' onClick={() => {deleteTrainingsplan()}}>
                                Löschen
                            </Button>:null
                        }
                    </div>
                 </DialogActions>
             </DialogContent>

         </Dialog>
     </div>
    );
}

export default Trainingsplanlist;
