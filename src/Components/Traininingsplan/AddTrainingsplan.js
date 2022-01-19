import React, {useState, useEffect, Component} from 'react';
import APIService from "../../APIService";
import {useCookies} from "react-cookie";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Navbar from "../Hearder/Navbar";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import './Trainingsplan.css'

function AddTrainingsplan(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['myToken'])
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [date, setSelectedDate] = useState(new Date());
    const [trainingstime, setTrainingstime] = useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = useState(false);

    const setDate = (event ) => {
        setSelectedDate(event)
    }

    const addTrainingsplan = function (){
       APIService.CreateTraininingsplan({title:title,date:date,trainingstime:trainingstime,description:description})
           .then(response => props.addtraningsplanbtn)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (

        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
            <br/>
            <br/>
            <div className='addTraininingsplan'>
                <div className='createTraining'>
                    <h2>Training erstellen</h2>
                </div>
                <form>
                    <div className="mb-3">
                            <div>
                                <label className = "form-label" htmlFor = "title" >Titel*</label>
                                <input type="" className = "form-control" id="title" placeholder="Bitte Titel hier eingeben"
                                       value={title}  onChange={ event => setTitle(event.target.value)} required/>
                            </div>
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container  direction={"column"} spacing={1}>
                            <Grid item>
                                {date !== undefined && date !== null ?
                                    <KeyboardDatePicker
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        name="startDate"
                                        label="Datumauswahl"
                                        fullWidth
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
                        <label className = "form-label" htmlFor = "description" >Description</label>
                        <textarea  type="text"  className = "form-control" id='description' placeholder="Bitte beschreiben Sie hier das Trainingsformat"
                                   value={description} onChange={ event => setDescription(event.target.value)} required ></textarea>
                    </div>
                </form>
                <button  className='btn btn-primary' onClick={addTrainingsplan}>Speichern</button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"User Registration successful"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            wollen Sie einer neuer Trainings hinzufügen?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button redirect="/trainingsplan" style={{backgroundColor: 'red'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Nein
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
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
    );
}

export default AddTrainingsplan;
