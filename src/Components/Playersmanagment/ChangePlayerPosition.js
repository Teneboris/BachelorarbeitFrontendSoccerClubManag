import React, {useEffect, useState} from 'react';
import './player.css'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {FormControl, InputLabel, makeStyles, Select, TextField} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import axios from "axios";
import Navbar from "../Hearder/Navbar";


const useStyle = makeStyles({
    field: {
        marginTop:20,
        marginBottom: 20,
        display:"block",
    }
})
function ChangePlayerPosition(props){

    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState('')
    const [, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState([])
    const [playerposition, setPlayerposition] = useState([])
    const [confirmPassword, setConfirmPassword] = useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyle()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get("http://localhost:8080/api/auth/users/" + props.match.params.profisID, {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
            .then(response => {
                setPlayerposition(response.data.player[0].name)
                return setUsers(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    }, [])

    return (
        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
            <form noValidate autoComplete="on" className='changeplayerpositionStyling'>
                <h4 className="mt-3">Spielerdaten</h4>
                <TextField
                    id="outlined-uncontrolled"
                    style={{ margin: 8 }}
                    value={users.firstName}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    className={classes.field}
                />
                <TextField
                    id="outlined-uncontrolled"
                    style={{ margin: 8 }}
                    value={users.lastName}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    className={classes.field}
                />
                <TextField
                    id="outlined-uncontrolled"
                    style={{ margin: 8 }}
                    value={users.email}
                    fullWidth
                    type="email"
                    variant="filled"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    className={classes.field}
                />
                <TextField
                    id="outlined-uncontrolled"
                    style={{ margin: 8 }}
                    value={users.username}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    className={classes.field}
                />
                <TextField
                    id="outlined-uncontrolled"
                    style={{ margin: 8 }}
                    value={playerposition}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Hier die Position ändern</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        variant="filled"
                        onChange={event => setPlayerposition( [ event.target.value])}
                    >
                        <MenuItem value="goalkeeper">Goalkeeper</MenuItem>
                        <MenuItem value="defence">Defence</MenuItem>
                        <MenuItem value="midfield">Midfield</MenuItem>
                        <MenuItem value="storm">Storm</MenuItem>
                    </Select>
                </FormControl>

                <button  className="btn btn-primary mt-3">Speichern</button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"User Registration successful"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           Kliken Sie bitte auf Nächste und wählen Sie Ihre Ziel
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
            </form>
        </div>
    );
}

export default ChangePlayerPosition
