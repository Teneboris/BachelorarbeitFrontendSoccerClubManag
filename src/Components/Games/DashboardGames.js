import React, {useState,useEffect} from 'react';
import HearderResponsive from "../Hearder/HearderResponsive";
import './Games.css'
import {useHistory} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {GamesList} from "./GamesList";
import Navbar from "../Hearder/Navbar";

function DashboardGames(props) {

    const [games, setGames] = useState([]);
    const [trainerToken, setTrainerToken] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    let history = useHistory()

    const addGame = () => {
            history.push("/game/addGames");
        }

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(" http://localhost:8080/api/games/getcreatedgames", {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
            .then(response => {
                return setGames(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    }, [])


    const addgamessplanbtn = appendtrainer =>{
        //copy all the previews traininplan
        const new_game = [...games, appendtrainer]
        setGames(new_game)
    }

    const deletegamebtn = function (){
        const new_game = games.filter(mygames =>{
            if(mygames.id === games.id){
                return false
            }
            else{
                return true;
            }
        })
        setGames(new_game)
    }
    return (
        <div className="game-content">
            <div className = "navbar">
                <Navbar/>
            </div>
            <div className="gamesstyling">
                <br/>
                <div className='hearderAddTraningsplan'>
                    <button type="button" className="btn btn-dark" onClick={addGame}> + Spiel hinzufügen</button>

                </div>
                <div className='panelsgames'>
                    {
                       games && games.map((game, i) =>{
                            return (<GamesList type="button"
                                               key={i} game = {game}
                                               addgamessplanbtn={addgamessplanbtn}
                                               deletegamebtn={deletegamebtn}/>)
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default DashboardGames;
