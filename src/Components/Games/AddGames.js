// @flow
import * as React from 'react';
import HearderResponsive from "../Hearder/HearderResponsive";
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import APIService from "../../APIService";
import Modal from "react-bootstrap/Modal";
import {useState} from "react";
import {useCookies} from "react-cookie";
import Navbar from "../Hearder/Navbar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function AddGames(props){

    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [gameTime, setGameTime] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['myToken'])
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [date, setSelectedDate] = useState(new Date());
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = useState(false);

    const setDate = (event ) => {
       setSelectedDate(event)
    }

    const addGame = function (){
        APIService.PostGame({title:title,date:date,gameTime:gameTime,address:address,description:description})
            .then(response => props.addgamessplanbtn)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <div>
                <div className = "navbar">
                    <Navbar/>
                </div>
                <br/>
                <br/>
                <div className='addTraininingsplan'>
                    <div className='createTraining'>
                        <h2>Spiel erstellen</h2>
                    </div>
                    <form>
                        <div className="mb-3">
                            <div>
                                <label className = "form-label" htmlFor = "titel">Title*</label>
                                <input type="text" className = "form-control" autofocus id="title" placeholder="Bitte Titel eingeben"
                                       value={title}  onChange={ event => setTitle(event.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className = "form-label" htmlFor = "description" >Adresse*</label>
                            <input  type="text"  className = "form-control" id='description' placeholder="Bitte hier Anschrift eingeben"
                                       value={address} onChange={ event => setAddress(event.target.value)} required />
                        </div>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container  direction={"column"} spacing={1}>
                                <Grid item>
                                    {date !== undefined && date !== null ?
                                        <KeyboardDatePicker
                                            variant="inline"
                                            format="yyyy-dd-MM"
                                            margin="normal"
                                            name="startDate"
                                            fullWidth
                                            required
                                            label="Datumsauswahl"
                                            value={date}
                                            onChange={event => setDate(event)}
                                            KeyboardButtonProps={{
                                                "aria-label": "change date"
                                            }}
                                        />:null
                                    }

                                </Grid>
                                <Grid item>
                                    {date !== undefined && date !== null?
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Zeitauswahl"
                                            fullWidth
                                            required
                                            value={date}
                                            onChange={event => setDate(event)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />:null
                                    }
                                </Grid>
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <div className="mb-3">
                            <label className = "form-label" htmlFor = "description">Deskription*</label>
                            <textarea  type="text"  className = "form-control" id='description' placeholder="Bitte beschreiben Sie hier das Spielformat"
                                       value={description} onChange={ event => setDescription(event.target.value)}></textarea>
                        </div>

                    </form>
                    <button  className='btn btn-primary' onClick={addGame}>Speichern</button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"User Registration successful"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                wollen Sie ein neues Spiel hinzufügen?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button redirect="/trainingsplan" style={{backgroundColor: 'red'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Nein
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem><a className='registration_link' href="/news"> News </a></MenuItem>
                                <MenuItem><a className='registration_link' href="/trainingsplan">Trainingsplan</a></MenuItem>
                                <MenuItem><a className='registration_link' href="/games"> Games</a></MenuItem>
                                <MenuItem><a className='registration_link' href="/players"> Players</a></MenuItem>
                                <MenuItem> <a className='registration_link' href="/message">Message</a></MenuItem>
                            </Menu>
                            <Button onClick={handleClose} style={{backgroundColor: 'green'}} autoFocus>
                                Ja
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </div>
        </div>
    );
};
export default AddGames;
