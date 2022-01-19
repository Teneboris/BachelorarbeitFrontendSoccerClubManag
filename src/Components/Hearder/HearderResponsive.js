import React, { useState, useEffect } from "react";
import respobsiveLogo from "/Users/borisfotsotene/WebstormProjects/BachelorarbeitFrontendSoccerClubManag/src/image/logo.png"

import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from '@material-ui/core/Badge';
import {Link as RouterLink, useHistory} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import "../Hearder/hearder.css"
import Tab from '@material-ui/core/Tab';
import profipicture from "../../image/onana.jpeg";

function HearderResponsive(props) {

    const [user, setUser] = useState(undefined);
    const [space] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    let history = useHistory()


    const headersData = [
        {
            label: "News",
            href: "/news",
        },
        {
            label: "Trainingsplan",
            href: "/trainingsplan",
        },
        {
            label: "Games",
            href: "/games",
        },
        {
            label: "Players",
            href: "/players",
        },

        user?.roles[0] === "ROLE_COACH" ?
            {
                label: "Coach",
                href: "/trainer",
            }
        :space,

     /*   user !== undefined && user.roles[0] === "ROLE_ADMIN" ?
        {
            label: "Administrator",
            href: "/admin",
        }
        :space,*/

         user?.roles[0] === "ROLE_ADMIN" ?
            {
                label: "Management",
                href: "/admin/createuser",
            }
            :space,


        {
            label: "Message",
            href: "/message",
            badge:{
                badgeContent:4
            }
        },


    ];

    const menu = [
        {
            name: "Sessions",
            menuItems: [
                {
                    name: "Book a Session",
                    onClick: () => {},
                    href:""
                },
                {
                    name: "[S] Host a session",
                    onClick: () => {},
                    href:""
                }
            ]
        },
        {
            name: "Store",
            menuItems: [
                {
                    name: "Purchase",
                    onClick: () => {}
                },
                {
                    name: "Sell",
                    onClick: () => {}
                }
            ]
        }
    ];

    const ResponsiveLogo = () =>{
        let logo = <img className="ononastyling" src={respobsiveLogo}/>
        console.log(logo)
        return logo;
    }

    const useStyles = makeStyles(() => ({
        header: {
            backgroundColor: "green",
            paddingRight: "79px",
            paddingLeft: "118px",
            "@media (max-width: 900px)": {
                paddingLeft: 0,
            },
        },
        logo: {
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            color: "#FFFEFE",
            textAlign: "left",
        },
        menuButton: {
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px",
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        },
        drawerContainer: {
            backgroundImage:"url('/Users/borisfotsotene/WebstormProjects/BachelorarbeitFrontendSoccerClubManag/src/image/logo.jpg')",
            padding: "30px 30px",
        },
    }));

    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });


    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);


    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));


        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{femmecubatorLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return label != null? (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            ): null;
        });
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            <p href='/news'>VirtCoaching</p>
            {/*<img className="ononastyling" src={respobsiveLogo}/>*/}
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return label != null? (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {label}
                </Button>

            ): null;
        });
    };

    return (
        <header>
            <AppBar className={header}>

                <Toolbar>
                    {mobileView ? displayMobile() : displayDesktop()}
                    <div className="profil">
                        <Button color="secondary"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            {user !== undefined ?
                                user?.firstName : "konto"
                            }
                        </Button>
                        <Tab
                            label={
                                <Badge  color="secondary" badgeContent={4}>
                                    Item One
                                </Badge>
                            }
                        />
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
                    </div>
                </Toolbar>
            </AppBar>
        </header>

    );
}

export default HearderResponsive;
