import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import axios from "axios";


function DashboardAdminList(props) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([])
    const [trainings, setTrainings] = useState([])

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/training/getAlltraining`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return setTrainings(response.data)
            })
            .catch(error => {

                return console.log(error)
            })
    },[])


    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/auth/all/users/`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return setUsers(response.data)
            })
            .catch(error => {

                return console.log(error)
            })
    },[])

    return (

        <div>
            <div className="stylingDasboardList" onClick={handleShow}>
                {
                    <div className = "stylingDasboarddaten">
                        <p><h6>Betreff:</h6>{ props.feedback.subject}</p>
                        <p><h6>Message:</h6>{props.feedback.message}</p>
                    </div>
                }
            </div>
            <div >
                {/*backdrop="static"*/}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Feedback of </Modal.Title>
                    </Modal.Header>

                    <div className="m-3">
                        <label className = "form-label" htmlFor = "subject" >suject</label>
                        <input className = "form-control"
                               value={props.feedback.subject}/>
                    </div>

                    {
                        trainings.map(training =>{
                       return <div>
                                <div className="m-3">
                                    <label className = "form-label" htmlFor = "date" >Trainingsdate</label>
                                    <input className = "form-control"
                                           value={training.date}/>
                                </div>

                                <div className="m-3">
                                    <label className = "form-label" htmlFor = "title" >Trainingstitle</label>
                                    <input className = "form-control"
                                           value={training.title}/>
                                </div>
                            </div>

                        })
                    }

                    {
                        users.map(user =>{
                                if(user.roles[0].name === "ROLE_PLAYER"){
                                    return (
                                        <div className="m-3">
                                            <label className = "form-label" htmlFor = "name" >Name</label>
                                            <input className = "form-control"
                                                   value={user.firstName}/>
                                        </div>)
                                }
                        })

                    }
                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "feedback" >Message</label>
                        <textarea  className = "form-control" id='feedback'
                        value={props.feedback.message} ></textarea>
                    </div>

                    <Modal.Footer>
                        <button className='btn btn-primary' type='button' onClick={handleClose} >
                            OK
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    );
}

export default DashboardAdminList;
