
import React, {useEffect, useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ApiService from "../../APIService";
import {useHistory} from "react-router-dom";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function GamesList(props) {

    const [open, setOpen] = React.useState(false);
    const [user, setUser] = useState([])
    const reload=()=>window.location.reload();
    let history = useHistory();

    const deleteGamesplan = () =>{
        ApiService.DeleteTrainingsplan()
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

    const ClickTogiveTheFeedback = () =>{
        history.push('trainingsplan/comment/'+ props.game.id + '/game')
    }

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
        setUser(JSON.parse(temp))
        console.log("hier is the user",temp)
    },[])

    const checkTrainingCommentEnabled = (date) =>{
        var dateArray = date.split("-");
        var trainingsDate = new Date(dateArray[2].substring(0, 4), dateArray[1] - 1, dateArray[0]);
        var currentDate = new Date();
        let test = currentDate.getTime() >= trainingsDate.getTime();
        return test;
    }

    return (
        <div>

            <div type="button" className="stylingDasboardList" onClick={handleClickOpen}>
                {
                    <div key={props.game.id} className = "stylingDasboarddaten">
                        <p><h6>Datum</h6>{props.game.date}</p>
                        <p><h6>Anschrift</h6>{props.game.address}</p>
                        <p><h6>Deskription</h6>{props.game.description}</p>
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
                    <DialogTitle id="alert-dialog-slide-title" style = {{textAlign: "center", backgroundColor:"green"}}>{props.game.title}</DialogTitle>
                <DialogContent dividers>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <Grid container direction={"column"} spacing={5}>
                                <Grid item  style = {{width: 400}}>
                                    <TextField
                                        //type="date"
                                        format="dd-mm-yyyy"
                                        id="filled-read-only-input"
                                        label="Datum"
                                        value={props.game.date}
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
                                        label="Anschrift"
                                        value={props.game.address}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="filled"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    {props.game.description ?
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Deskription"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            variant="filled"
                                            fullWidth
                                            aria-label="maximum height"
                                            multiline
                                            rows={2}
                                            rowsMax={10}
                                            value={props.game.description}/>:
                                        null
                                    }
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                            {user.roles !== undefined && user.roles[0] === "ROLE_PLAYER" && props.game.date && checkTrainingCommentEnabled(props.game.date) === true?
                                <Button variant="contained" style={{backgroundColor: 'green'}} type='button' onClick={ClickTogiveTheFeedback} >
                                    Feedback
                                </Button> : checkTrainingCommentEnabled(props.game.date) === false?
                                    <Button disabled>
                                        Feedback
                                    </Button>:null
                            }
                            {user.roles !== undefined && user.roles[0] === "ROLE_ADMIN" && props.game.date?
                                <Button variant="contained"  style={{backgroundColor: 'red'}} type='button' onClick={() => {deleteGamesplan()}}>
                                    Löschen
                                </Button>:null
                            }
                    </DialogActions>
                </DialogContent>

            </Dialog>
        </div>
    );
};
