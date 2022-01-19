import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import axios from "axios";
import profipicture from "/Users/borisfotsotene/WebstormProjects/BachelorarbeitFrontendSoccerClubManag/src/image/onana.jpeg"
import Navbar from "../Hearder/Navbar";

function Playersprofis(props) {

    const [clickkable] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);
    let [user, setUser] = useState(undefined);
    let [user_coach, setUser_coach] = useState([]);
    const [allegmein] = useState('Allegmein');
    const [angriff] = useState('Angriff');
    let history = useHistory()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
        setUser(JSON.parse(temp))
    },[])

    const ChangePlayerPosition = () =>{
        history.push('/players/profis/' + props.match.params.profisID +'/playerdata')
    }

    const GoToreceivedMessage = () =>{
        history.push('/players/profis/' + user.firstName + '/message')
    }

/*    const angriff1 = () =>{
        <p>this is Angriff</p>
    }
    const general=()=>{
        {
           <p>this is Allgemein</p>
        }

        <div>
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        </div>
    }*/

    const selectProfilDate = [
        { key: "o1", value: "Allegemein" },
        { key: "o2", value: "angriff" },
        { key: "o3", value: "Abwehr" }
    ];

    useEffect(() => {
        axios.get(`http://localhost:8080/api/auth/all/users/`,{
        })
            .then(response => {
                return setUser_coach(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    },[])

    return (
        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
            <div className="playerprofilsytling container">

                <div className="selectActionStyling">
                    { user?.roles[0] === "ROLE_COACH"?
                        <Button className="changeplayerposition" aria-controls="simple-menu" aria-haspopup="true" onClick={ChangePlayerPosition}>
                            Ändern der Spielerposition
                        </Button>:null
                    }
                </div>

                <h4>Profis</h4>
                <hr/>
                <img className="ononastyling" src={profipicture}/>
                <br/>
                <div>
                    <h4>Daten</h4>
                    <hr/>
                    <div>
                        <div className="profisstatistikstyling">
                            <h5>Statistic Onana</h5>
                            <table className="table table-bordered border">
                                <thead className="thead-dark">
                                <tr>
                                    <div className="dataprofissytling">
                                        <div>{allegmein}</div>
                                        <div>{angriff}</div>
                                        <div>Abwehr</div>
                                        <div>Pässe</div>
                                        <div>Disziplin</div>
                                    </div>
                                </tr>
                                </thead>
                            </table>
                            {allegmein?<p>this is Allegemein</p>:null ||

                                angriff?<p>this is Angriff</p>:null
                            }
                        </div>



                        <div className="profisstatistikstyling-left">
                            <h5>person Data</h5>
                            <table className="table">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="row">geboren am:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">02-12-1996</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Land:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">Kamerun</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Größe:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">182 cm</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Gewicht:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">84 kg</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Rücknummer:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">1</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Position:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">Goalkeeper</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Biherige Vereine:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">Chelsea</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Beim  Alax seit:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">12-04-2012</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Alle Videos zum Spieler:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                   <a href="#"><td scope="col">zu dem videos</td></a>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Playersprofis;
