
import React, {useEffect, useState} from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery, Button, MenuItem,
} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import DrawerComponent from "./Drawer";
import Menu from "@material-ui/core/Menu";
import profipicture from "/Users/borisfotsotene/WebstormProjects/BachelorarbeitFrontendSoccerClubManag/src/image/logo.png"

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
    },
    header: {
        backgroundColor: "green",
        height: 65,
        position:"sticky",
        justifyContent: "center",
        fontSize: 1.2,
        top:0,
        display:"flex",
        zIndex:999,
        paddingRight: "79px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        textDecoration:"none",
        color: "#FFFEFE",
        cursor: "pointer",
        display:"flex",
        alignItems:"center",
        backgroundColor:"#ff8177",
        backgroundImage:'linear-gradient(to top , #ff0844 0%, #ffb199)',
        backgroundSize:100,
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        display:"flex",
        alignItems:"center",
        listStyle:"none",
        justifyContent:"center",
        width:100,
        height:70,
        marginLeft: theme.spacing(7),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
            transition:"all 0.3s ease"
        },
    },
}));

 function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
     const [anchorEl, setAnchorEl] = React.useState(null);
     const [anchorElManagment, setAnchorElManagment] = React.useState(null);
    let [user, setUser] = useState(undefined);
    let history = useHistory()

     useEffect(() => {
         let temp = localStorage.getItem('jwtToken');
         setUser(JSON.parse(temp))
         console.log(user)
     },[])

     const ProfilPush = () => {
         history.push(`/profile/`+user.id)
     }

     const ClickOnLogo = () => {
         history.push(`/news`)
     }

     const logoutBtn = ()=>{
         localStorage.removeItem("jwtToken")
         history.push('/')
     }

     const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
     };

     const handleClickonManagment = (event) => {
         setAnchorElManagment(event.currentTarget);
     };

     const handleClose = () => {
         setAnchorEl(null);
     };

     const handleCloseManagment = () => {
         setAnchorElManagment(null);
     };

     const createUser = () =>{
         history.push( "/admin/createuser")
     }

     const creategames = () =>{
         history.push("/admin/creategames")
     }

     const UserList = () =>{
         history.push("/players/users/")
     }

     return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar className={`${classes.header} ${classes.toolbar}`}>
                {isMobile ? (
                    <div class="toolbar-icon">
                    <DrawerComponent />
                    <Typography variant="h6" className="logostyling" onClick={ClickOnLogo}>
                        {/*<img className="logostyling" src={profipicture}/>*/}
                       AnoSoccerChat
                    </Typography>
                    </div>
                ) : (
                    <div class="toolbar-icon">
                    <Typography variant="h6" className="logostyling" onClick={ClickOnLogo}>
                        {/*<img className="logostyling" src={profipicture}/>*/}
                        AnoSoccerChat
                    </Typography>
                    <div className={classes.navlinks}>
                        <div className={classes.navlinks}>
                            <Link to="/news" className={classes.link}>
                                Home
                            </Link>
                            <Link to="/trainingsplan" className={classes.link}>
                                Trainingsplan
                            </Link>
                            <Link to="/games" className={classes.link}>
                                Spielplan
                            </Link>
                            <Link to="/players" className={classes.link}>
                                Spieler
                            </Link>
                            {user?.roles[0] === "ROLE_ADMIN" ?
                                <div>
                                    <Link className={classes.link} onClick={handleClickonManagment}>
                                        Verwaltung
                                    </Link>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorElManagment}
                                        keepMounted
                                        open={Boolean(anchorElManagment)}
                                        onClose={handleCloseManagment}
                                    >
                                        <MenuItem  onClick={createUser}>Erstellen neuer Benutzer</MenuItem>
                                        <MenuItem onClick={creategames}>Erstellen neuer Spiel</MenuItem>
                                    </Menu>
                                </div>:null

                            }

                            <Link to= "/message" className={classes.link}>
                                Nachrichten
                            </Link>
                        </div>
                    </div>
                    </div>
                )}
                <div className="profilstyle">
                    <Button color="secondary"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        {user !== undefined ?
                            user?.firstName : "konto"
                        }
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={UserList}>Benutzer</MenuItem>
                        <MenuItem onClick={ProfilPush}>Profile</MenuItem>
                        <MenuItem onClick={logoutBtn}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
