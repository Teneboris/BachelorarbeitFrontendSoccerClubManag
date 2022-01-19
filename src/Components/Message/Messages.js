import React,{useState,useEffect, useCallback} from 'react';
import './Messages.css'
import HearderResponsive from "../Hearder/HearderResponsive";
import Button from '@material-ui/core/Button';
import { TextField} from '@material-ui/core';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios";
import APIService from "../../APIService";
import moment from "moment";
import Navbar from "../Hearder/Navbar";

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

function Messages(props) {

    const [value, setValue] = useState();
    const [trainings, setTrainings] = useState([])
    const [feedbacksToCoachs, setfeedbacksToCoachs] = useState([])
    const [themeForMessage, setThemeForMessage] = useState([])
    const [selectedItem, setSelectedItem] = useState({message: []});
    const [messageText, setMessageText] = useState('')
    let [logguser, setloggUser] = useState(undefined);
    const reload=()=>window.location.reload();
    const [date, setSelectedDate] = useState(new Date());

    const handleChange = (event) => {
        setMessageText(event.target.value)
    };


    const fetchMessage = () => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/theme/getThemeWithMessage`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setCurrentMessage(response, false)
            })
            .catch(error => {
                return console.log(error)
            })
    }

    const findCurrentMessage = () => {
        return themeForMessage.findIndex(x => x.id === selectedItem.id);
    }
    const deleteSubject = () =>{
        var token = localStorage.getItem('token');
        console.log(selectedItem.id)
        axios.delete(`http://localhost:8080/api/message/deletesubject/` + selectedItem.id,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).catch(error => {
            return console.log(error)
        })
    }

    const setCurrentMessage= (response, firstCall) => {
        if(response.data.length > 0 && firstCall){
            setSelectedItem(response.data[0])
        }
        setThemeForMessage(response.data)
        if(!firstCall) {
            setSelectedItem(response.data[findCurrentMessage()])
        }
        setMessageText(' ')
    }

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
        let roleuser =  JSON.parse(temp)
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/theme/getThemeWithMessage/`+ roleuser.roles[0],{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
              return  setCurrentMessage(response, true)
            })
            .catch(error => {
                return console.log(error)
            })
    },[]
    )

    const sendResponse = () =>{
        let userTo = findDestinationUser(selectedItem.message[0].userFrom?.id, selectedItem.message[0].userTo?.id);
        APIService.PostMessage(
            {
                    /*displayby: 'all',*/
                    themeForMessage:
                    {
                        subject: selectedItem.subject,
                        id: selectedItem.id
                    },
                    userTo:
                     {
                         id: userTo
                     },
                    message: messageText,
                    postDate:date
            })
            .then(response => {
                fetchMessage();
            })
            .catch(err => console.log(err))
    }

    const findDestinationUser = (userFronId, userToId) => {
            let id;
            if(logguser.id === userFronId) {
                id = userToId;
            }
            else if (userToId === logguser.id){
                id = userFronId;
            }
            return id;
    }

    const CallAllFeedbackMessageBySuject = (id) =>{
       /* APIService.GetFeedbackBySuject(id)
            .then(res => setfeedbacksToCoachs(res.data))
            .catch(err => console.log(err))*/
    }

    const convertDate = (datetime) =>{
        var date = new Date(datetime);
        date.setHours(date.getHours() + 2);
        return date
    }

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/training/getAlltraining`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if(response.data.length > 0){
                    CallAllFeedbackMessageBySuject(response.data[0].id)
                }
                return setTrainings(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    },[])

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
        setloggUser(JSON.parse(temp))
    },[])

    useEffect(() => {
        let temp = localStorage.getItem('jwtToken');
       let roleuser =  JSON.parse(temp)
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/message/getfeedbackbyuser/`+ roleuser.roles[0],{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                return setfeedbacksToCoachs(response.data)
            })
            .catch(error => {

                return console.log(error)
            })
    },[])

    var testDaten = [
        {
            id: 1,
            subject: "subject1",
            sender: "Anonyme",
            training: "Dribbing",
             message: [
                {
                    id: "1",
                    message:"Was haben wir heute gemacht es war so scheiße dass ich nicht mehr Lust zu kommen aber ich mag noch Fußball und werde wieder kommen Hahahhahaha",
                    displayBy: "somebody",
                    sender: "Anonyme",
                    time:"13:34"
                },
                {
                    id: "2",
                    message:" Du bist eine lustige man aber eine meine beste Spieler ich weiß eigentlich nciht wer du bist aber glaub mir ich bin wirklich stolz auf dich meine Junge hahahaha",
                    displayBy: "Boris",
                    sender: "me",
                    time:"13:34"
                },
                 {
                     id: "3",
                     message:" Du bist eine lustige man aber eine meine beste Spieler ich weiß eigentlich nciht wer du bist aber glaub mir ich bin wirklich stolz auf dich meine Junge hahahaha",
                     displayBy: "Boris",
                     sender: "Anonyme",
                     time:"13:34"
                 },
                 {
                     id: "4",
                     message:" Du bist eine lustige man aber eine meine beste Spieler ich weiß eigentlich nciht wer du bist aber glaub mir ich bin wirklich stolz auf dich meine Junge hahahaha",
                     displayBy: "Boris",
                     sender: "me",
                     time:"13:34"
                 },
                 {
                     id: "5",
                     message:" Du bist eine lustige man aber eine meine beste Spieler ich weiß eigentlich nciht wer du bist aber glaub mir ich bin wirklich stolz auf dich meine Junge hahahaha",
                     displayBy: "Boris",
                     sender: "Anonyme",
                     time:"14:00"
                 },
                 {
                     id: "6",
                     message:" Du bist eine lustige man aber eine meine beste Spieler ich weiß eigentlich nciht wer du bist aber glaub mir ich bin wirklich stolz auf dich meine Junge hahahaha",
                     displayBy: "Boris",
                     sender: "me",
                     time:"14:45"
                 }
            ],
            date: "date1"
        },
        {
            id: 2,
            subject: "subject2",
            sender: "trainer 1",
            training: "one to one touch",
            message: [
                {
                    id: "1",
                    message:"Ich wurde beleidig worden wegen meine sexuale orientierung ich habe keine Lust mehr ",
                    displayBy: "somebody",
                    sender: "me",
                },
                {
                    id: "2",
                    message:"es ist doch so schade eine Tipp God mag das auch nicht besser an deiner Orientierung noch besser nachzudenken ich bin auch dagegen hahahiiiiii",
                    displayBy: "Boris",
                    sender: "trainer 1",
                }
            ],
            date: "date2"
        },
    ];

    const ClikOnselectedSuject = (item) =>{
        CallAllFeedbackMessageBySuject(item.id)
        setSelectedItem(item)
    }

    return (
        <div className="main-div">
            <div className="second-div">
                <div className = "navbar">
                    <Navbar/>
                </div>
                <div className="content">
                   {/* <h4 className="message-title">Nachricht</h4>*/}
                    <div className = "messagestyle">

                        <nav id="nebenNav">
                                <div className="itemsearch">
                                    <TextField id="standard-search"
                                               label="Search field"
                                               type="search" />
                                </div>

                        </nav>
                        <main className="haupt">
                        <dl className="message-all-title" key={selectedItem.id}>
                            <div className="message-title-infos">
                                {
                                        <div key={selectedItem.id}>
                                         <dt>Subject:</dt>
                                         <dd>{selectedItem.subject}</dd>

                                         <dt>TrainingsTitel:</dt>
                                         <dd>{selectedItem?.trainings?.title}</dd>

                                     </div>
                                }

                            </div>
                            <div className="titelMessage">
                                <hr/>

                                <h6>{selectedItem?.message[0]?.userTo?.roles[0] !== "ROLE_PLAYER" ?
                                    <p className="userSender">
                                        {/*<div className="firstbuschtable">{selectedItem?.message[0]?.userTo?.firstName.substring(0, 1).toLocaleUpperCase()}</div>*/}
                                        <div>{selectedItem?.message[0]?.userTo?.firstName}</div>
                                    </p> :
                                    selectedItem?.message[0]?.userFrom === null ?
                                        <div>Anonyme</div> : null
                                }</h6>
                                <hr/>
                            </div>
                            <div className="makeDivMessageScroll">

                                <div className="message-From-style">
                                    {selectedItem !== undefined && selectedItem !== null?
                                        selectedItem.message.map(infosmessage => {
                                            return (
                                                <div style={logguser.id === infosmessage.userFrom?.id || logguser.id !== infosmessage.userTo?.id ?{backgroundColor:'green', float:'right'}:{} } >
                                                    {/*{<dt>{moment(new Date(infosmessage.postDate).toLocaleString()).format("DD/MM/YYYY HH:mm:ss")}</dt>}*/}
                                                   <i><dt>{moment(convertDate(infosmessage.postDate), moment.locale('id')).format('DD/MM/YYYY HH:mm:ss')}</dt></i>
                                                    <dt className="message-content"> {infosmessage?.message}</dt>
                                                </div>
                                            );
                                        }): null
                                    }
                                </div>

                            </div>
                            <div className="Textareastyle" >

                                    <TextField
                                        type="text"
                                        value={messageText}
                                        id="standard-multiline-static"
                                        multiline
                                        label="Haben Sie etwas zu sagen?"
                                        rows="3"
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Button
                                        color="primary"
                                        onClick={sendResponse}
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        className="mt-3">
                                        Senden
                                    </Button>
                            </div>

                         </dl>


                        </main>
                        <div className="main1">
                            {
                                    feedbacksToCoachs.map((mail) => {
                                        return (
                                            <div className="message-subject" key={mail.id} type="button"
                                                 onClick={() => ClikOnselectedSuject(mail)}>
                                                <p className="message-sender">Betreff:</p> {mail.subject}
                                         {/*           <div style={{color: 'red', float:'right'}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={deleteSubject()}
                                                             fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path
                                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                            <path fill-rule="evenodd"
                                                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                        </svg>
                                                    </div>*/}
                                            </div>)
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;



