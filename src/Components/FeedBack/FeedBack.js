import React, {useState, Component, useEffect} from 'react';

import './Feedback.css'
import APIService from "../../APIService";
import axios from "axios";
import HearderResponsive from "../Hearder/HearderResponsive";
import Navbar from "../Hearder/Navbar";

function FeedBack(props) {

    const [selectedValue, setSelectedValue] = useState('')
    const [message, setComment] = useState('')
    const [subject, setSubject] = useState('')
    const [users, setUser] = useState([]);
    const [training, setTraining] = useState([]);
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/auth/all/users/`,{
        })
            .then(response => {
                return setUser(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    },[])

    const isGame =()=> {
        return props.match.params.origin === 'game';
    }

    const isTraining =()=> {
        return props.match.params.origin === 'training';
    }

    useEffect(() => {

        var token = localStorage.getItem('token');

        if(isGame()) {
            axios.get(`http://localhost:8080/api/games/` + props.match.params.Id, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    return setGames(response.data)
                })
                .catch(error => {
                    return console.log(error)
                })
        }
        else if (isTraining()) {
            axios.get(`http://localhost:8080/api/training/` + props.match.params.Id,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    return setTraining(response.data)
                })
                .catch(error => {
                    return console.log(error)
                })
        }

    },[])

    const sendMessage = () =>{
                APIService.PostMessage({displayby:'all',
                        themeForMessage:{subject:subject,
                        trainings:{id : training.id || games.id}},
                        userTo: {id:  selectedValue},message: message})
                    .then(res=> res.data)
                    .catch(err => console.log(err))
    }

    return (
        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
            <br/>
            <div className="commentstyling">
                <br/>
                <div>
                    <h4>Feedback</h4>
                </div>
                <form>
                    <div className="mb-3">

                        <label className = "form-label" htmlFor = "title" >Betreff</label>
                        <input  className = "form-control" id="title"
                                value={subject}  onChange={ event => setSubject(event.target.value)} placeholder="Was ist passiert?"/>
                    </div>
                        {
                            <div>
                                <select className="form-select" aria-label="Default select example" id="data-type"onChange={event => setSelectedValue( selectedValue =>event.target.value)}  required>
                                    <option selected>Bitte Empfänger auswählen </option>
                                    <option disabled>Trainer</option>
                                {
                                    users.map(function (user, i){
                                        if (user.roles[0].name === 'ROLE_COACH'){
                                            return <option value={user.id}>{user.firstName}</option>
                                        }
                                    })
                                }
                                    <option disabled>Administrator</option>
                                    {
                                        users.map(function (user, i){
                                            if (user.roles[0].name === 'ROLE_ADMIN'){
                                                return <option value={user.id}>{user.firstName}</option>
                                            }
                                        })
                                    }
                                </select>
                            </div>
                        }

                    <div className="mb-3">
                        {isGame()?
                            <div>
                                <label className = "form-label" htmlFor = "title" >Spielstitle</label>
                                <input  className = "form-control" id="title"
                                        value={games.title} />
                            </div>:isTraining()?
                            <div>
                                <label className = "form-label" htmlFor = "title" >Trainingstitle</label>
                                <input  className = "form-control" id="title"
                                        value={training.title} />
                            </div>:null
                        }

                    </div>
                    <div className="mb-3">
                        {isGame()?
                            <div>
                                <label className = "form-label" htmlFor = "date" >Spieldate</label>
                                <input className = "form-control" id="date"
                                       value={games.date}/>
                            </div>:isTraining()?
                            <div>
                                <label className = "form-label" htmlFor = "date" >Traningsdate</label>
                                <input className = "form-control" id="date"
                                       value={training.date}/>
                            </div>:null
                        }
                    </div>

                    <div>
                        {isGame()?
                            <div>
                                <label className = "form-label" htmlFor = "date" >Spielsadress</label>
                                <input className = "form-control" id="date"
                                       value={games.address}/>
                            </div>:null
                        }
                    </div>

                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "description" >Kommentar</label>
                        <textarea value={message} onChange={event => setComment(event.target.value)} className = "form-control" id='description' placeholder="Bitte geben Sie Ihr Feedback"
                        ></textarea>
                    </div>
                </form>
                <button onClick={sendMessage} type="button" className="btn btn-primary" >Senden</button>
            </div>
            <br/>
        </div>
    );
}

export default FeedBack;
