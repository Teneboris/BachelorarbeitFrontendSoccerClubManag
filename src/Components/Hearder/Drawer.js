import React, {useEffect, useState} from "react";
import {
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles, MenuItem
} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme)=>({
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    icon:{
        color: "red"
    },
    drawerContainer: {
        padding: "100px 10px",
    },
}));

 function DrawerComponent(props) {

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorElManagment, setAnchorElManagment] = React.useState(null);
     const [anchorEl, setAnchorEl] = React.useState(null);
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

     const logoutBtn = ()=>{
         localStorage.removeItem("jwtToken")
         history.push('/')
     }

     const handleClickonManagment = (event) => {
         setAnchorElManagment(event.currentTarget);
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

     const handleClose = () => {
         setAnchorEl(null);
     };
     const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
     };

     return (
        <>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer open={openDrawer}
                    onClose={() => setOpenDrawer(false)}>
      {/*          <div className="profilstyle">
                    <Button color="secondary"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        {user !== undefined ?
                            user?.firstName : "konto"
                        }
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={ProfilPush}>Profile</MenuItem>
                        <MenuItem onClick={logoutBtn}>Logout</MenuItem>
                    </Menu>
                </div>*/}
                <List className={`${classes.drawerContainer}`}>
                    <ListItem >
                        <ListItemText>
                            <Link to="/news" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Link to="/trainingsplan" className={classes.link}>Trainingsplan</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Link to="/games" className={classes.link}>Spielplan</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem >
                        <ListItemText>
                            <Link to="/players" className={classes.link}>Spieler</Link>
                        </ListItemText>
                    </ListItem>
                    {user?.roles[0] === "ROLE_ADMIN" ?
                        <div>
                            <ListItem >
                                <ListItemText>
                                    <Link onClick={handleClickonManagment} className={classes.link}>Verwaltung</Link>
                                </ListItemText>
                            </ListItem>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorElManagment}
                                keepMounted
                                open={Boolean(anchorElManagment)}
                                onClose={handleCloseManagment}
                            >
                                <MenuItem onClick={createUser}>Erstellen neuer Benutzer</MenuItem>
                                <MenuItem onClick={creategames}>Erstellen neuer Spiel</MenuItem>
                            </Menu>
                        </div> :null
                    }
                    <ListItem >
                        <ListItemText>
                            <Link to= "/message" className={classes.link}>Nachrichten</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default DrawerComponent
