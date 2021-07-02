import React, {useState, Component, useEffect} from 'react';
import Hearder from "../Hearder/Hearder";
import './comment.css'
import {useHistory} from "react-router-dom";
import APIService from "../../APIService";
import axios from "axios";

function Comment(props) {

    const [selectedValue, setSelectedValue] = useState('')
    const [message, setComment] = useState('')
    const [subject, setSubject] = useState('')
    const [users, setUser] = useState([]);
    const [training, setTraining] = useState([]);

    let history = useHistory()

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

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/training/` + props.match.params.trainingId,{
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
    },[])

    const sendMessage = () =>{
        for(let index of users){
            if(index.roles[0].name === "ROLE_ADMIN"){
                APIService.PostMessage({trainings:{id : training.id}, subject:subject , userTo: {id:  selectedValue},message: message})
                    .then(res=> res.data)
                    .catch(err => console.log(err))
            }
        }
    }


    return (
        <div>
            <div>
                <Hearder/>
            </div>
            <br/>
            <div className="commentstyling">
                <br/>
                <div>
                    <h4>Message</h4>
                </div>
                <form>
                    <div className="mb-3">

                        <label className = "form-label" htmlFor = "title" >Betreff</label>
                        <input  className = "form-control" id="title"
                                value={subject}  onChange={ event => setSubject(event.target.value)} placeholder="what´s happend"/>
                    </div>
                        {
                            <div>
                                <select className="form-select" aria-label="Default select example" id="data-type"onChange={event => setSelectedValue( selectedValue =>event.target.value)}  required>
                                    <option selected>select target</option>
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
                        <label className = "form-label" htmlFor = "date" >Traningsdate</label>
                        <input className = "form-control" id="date"
                               value={training.date}/>
                    </div>
                    <div className="mb-3">

                        <label className = "form-label" htmlFor = "title" >Trainingstitle</label>
                        <input  className = "form-control" id="title"
                                value={training.title} />
                    </div>

                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "description" >Comment</label>
                        <textarea value={message} onChange={event => setComment(event.target.value)} className = "form-control" id='description' placeholder="please enter your feedback"
                        ></textarea>
                    </div>
                </form>
                <button onClick={sendMessage} type="button" className="btn btn-primary" >Send</button>
            </div>
            <br/>
        </div>
    );
}

export default Comment;
