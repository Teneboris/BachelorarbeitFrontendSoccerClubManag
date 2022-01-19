import React, {useState} from 'react';
import HearderResponsive from "../Hearder/HearderResponsive";
import TextField from '@material-ui/core/TextField';
import './userregister.css';
import ApiService from "../../APIService";
import {FormControl,
    InputLabel, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Navbar from "../Hearder/Navbar";


const useStyle = makeStyles({
    field: {
        marginTop:20,
        marginBottom: 20,
       display:"block",
    }
})
function Userregister(props) {

    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState([])
    const [playerposition, setPlayerposition] = useState([])
    const [confirmPassword, setConfirmPassword] = useState('')
    const classes = useStyle()
    const [firstNameError, setFirstNameError] = useState(false,{firstName:String})
    const [EmailError, setEmailError] = useState(false,{email:String})
    const [lastNameError, setlastNameError] = useState(false,{lastName:String})
    const [userNameError, setUserNameError] = useState(false,{username:String})
    const [roleError, setRoleError] = useState(false,{role:String})
    const [playerpositionError, setPlayerpositionError] = useState(false,{playerposition:String})
    const [passwordError, setPasswordError] = useState(false,{password:String})
    const [confirmPasswordError, setConfirmPasswordError] = useState(false,{confirmPassword:String})
    const [anchorEl, setAnchorEl] = React.useState(null);

    const RegisterBtn = () => {
        if(password === confirmPassword){
            ApiService.RegisterUser({firstName:
                firstName,lastName: lastName,email,username,
                role, playerposition, password,confirmPassword})
                .then(() => handleClickOpen())
                .catch(error => console.log(error))
        }else {
            console.log("Passwords do not match");
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFirstNameError({firstName:''})

        if (firstName === ''){
            setFirstNameError({firstName: "Bitte geben Sie eine Vorname ein"})
        }
        if (lastName === ''){
            setlastNameError({lastName: "Bitte geben Sie eine Nachname ein"})
        }
        if (username === ''){
            setUserNameError({userName: "Bitte geben Sie eine Benutzername ein"})
        }
        if (password === ''){
            setPasswordError({password: "Bitte geben Sie ein passwort ein"})
        }
        if (confirmPassword === ''){
            setConfirmPasswordError({confirmPassword: "Bitte bestätigen Sie das Passwort"})
        }
        if (email === ''){
            setEmailError({email: "Bitte geben Sie eine gültige Email-addresse"})
        }
        if (role === ''){
            setRoleError({role: "Bitte wählen Sie eine Role aus"})
        }
        if (playerposition === ''){
            setPlayerpositionError({playerposition: "Bitte wählen Sie die Position der Spieler aus"})
        }
    }

    const onChangeRole = (e) =>{
        if (e === ''){
            setRoleError({role: "Bitte wählen Sie eine Role aus"})
        }else{
            setRole({role: ''});
        }
        return false;
    }
    const onChangePlayerposition = (e) =>{
        if (e === ''){
            setPlayerpositionError({playerposition: "Bitte wählen Sie die Position der Spieler aus"})
        }else{
            setPlayerposition({playerposition: ''});
        }
        return false;
    }
    const onChangeEmail = (e) =>{
        if (e === ''){
            setEmailError({email: "Bitte geben Sie eine gültige Email-addresse ein"})
        }else{
            setEmail({email: ''});
        }
        return false;
    }

    const onChangeFirstName = (e) =>{
        if (e === ''){
            setFirstNameError({firstName: "Bitte geben Sie eine Vorname ein"})
        }else{
            setFirstNameError({firstName: ''});
        }
        return false;
    }

    const onChangeLastName = (e) =>{
        if (e === ''){
            setlastNameError({lastName: "Bitte geben Sie eine Nachname ein"})
        }else{
            setlastNameError({lastName: ''});
        }
        return false;
    }

    const onChangeUserName = (e) =>{
        if (e === ''){
            setUserNameError({userName: "Bitte geben Sie eine Benutzername ein"})
        }else{
            setUserNameError({userName: ''});
        }
        return false;
    }
    const onChangePassword = (e) =>{
        if (e === ''){
            setPasswordError({password: "Bitte geben Sie ein Passwort ein"})
        }else{
            setPasswordError({password: ''});
        }
        return false;
    }
    const onChangeConfirmpassword = (e) =>{
        if (e === ''){
            setConfirmPasswordError({confirmPassword: "Bitte bestätigen Sie das Passwort"})
        }else{
            setConfirmPasswordError({confirmPassword: ''});
        }
        return false;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
            <br/>
            <form noValidate autoComplete="on" className='registerStyling' onSubmit={handleSubmit}>
                <br/>
                <h4>User Registrierung</h4>
                <TextField
                    required
                    error={Boolean (firstNameError?.firstName)}
                    helperText={(firstNameError?.firstName)}
                    focused
                    id="outlined-uncontrolled"
                    label="Nachname"
                    style={{ margin: 8 }}
                    value={firstName}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.field}
                    onChange={event => onChangeFirstName(event.target.value) || setFirstName(event.target.value)}
                />
                <TextField
                    required
                    error={Boolean (lastNameError?.lastName)}
                    helperText={(lastNameError?.lastName)}
                    id="outlined-uncontrolled"
                    label="Vorname"
                    style={{ margin: 8 }}
                    value={lastName}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.field}
                    onChange={event => onChangeLastName(event.target.value) || setLastName(event.target.value)}
                />
                <TextField
                    required
                    error={Boolean (EmailError?.email)}
                    helperText={(EmailError?.email)}
                    id="outlined-uncontrolled"
                    label="E-mail"
                    style={{ margin: 8 }}
                    value={email}
                    fullWidth
                    type="email"
                    variant="filled"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.field}
                    onChange={event => onChangeEmail(event.target.value) || setEmail(event.target.value)}
                />
                <TextField
                    required
                    error={Boolean (userNameError?.userName)}
                    helperText={(userNameError?.userName)}
                    id="outlined-uncontrolled"
                    label="BenutzerName"
                    style={{ margin: 8 }}
                    value={username}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.field}
                    onChange={event => onChangeUserName(event.target.value) || setUsername(event.target.value)}
                />
                <FormControl fullWidth>
               <Select
                        required
                        error={Boolean (roleError?.role)}
                        helperText={(roleError?.role)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{ margin: 8}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Bitte wählen die Role der Benutzer aus"
                        variant="filled"
                        onChange={event => onChangeRole(event.target.value) || setRole(  [event.target.value])}
                    >
                        <MenuItem value="coach">Trainer</MenuItem>
                        <MenuItem value="player">Spieler</MenuItem>
                    </Select>
                </FormControl>
                <div className="mb-3 mt-3">
                    {role.map(roles =>{
                        if(roles === "player"){
                           return(
                               <FormControl fullWidth>
                                   <InputLabel id="demo-simple-select-label">Bitte wählen die Position der Spieler aus</InputLabel>
                                   <Select
                                       required
                                       error={Boolean (playerpositionError?.playerposition)}
                                       helperText={(playerpositionError?.playerposition)}
                                       labelId="demo-simple-select-label"
                                       id="demo-simple-select"
                                       variant="filled"
                                       onChange={event => onChangePlayerposition(event.target.value) ||  setPlayerposition( [ event.target.value])}
                                   >
                                       <MenuItem value="goalkeeper">Goalkeeper</MenuItem>
                                       <MenuItem value="defence">Defence</MenuItem>
                                       <MenuItem value="midfield">Midfield</MenuItem>
                                       <MenuItem value="storm">Storm</MenuItem>
                                   </Select>
                               </FormControl>)
                        }else {
                            return null;
                        }
                    })
                    }
                </div>
                <TextField
                    required
                    error={Boolean (passwordError?.password)}
                    helperText={(passwordError?.password)}
                    id="outlined-uncontrolled"
                    label="Passwort"
                    type="password"
                    style={{ margin: 8 }}
                    //placeholder="Bitte geben Sie ein Passwort ein"
                    value={password}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.field}
                    onChange={event => onChangePassword(event.target.value) || setPassword(event.target.value)}
                />
                <TextField
                    required
                    error={Boolean (confirmPasswordError?.confirmPassword)}
                    helperText={(confirmPasswordError?.confirmPassword)}
                    id="outlined-uncontrolled"
                    label="Passwort bestätigen"
                    type="password"
                    style={{ margin: 8 }}
                    //placeholder="Bitte betstätigen Sie das Password"
                    value={confirmPassword}
                    fullWidth
                    variant="filled"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.field}
                    onChange={event => onChangeConfirmpassword(event.target.value) || setConfirmPassword(event.target.value)}
                />

                <button onClick={RegisterBtn}  className="btn btn-primary">Senden</button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"User Registration successful"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                       wollen Sie neuer Benutzer registrieren?
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

export default Userregister;
