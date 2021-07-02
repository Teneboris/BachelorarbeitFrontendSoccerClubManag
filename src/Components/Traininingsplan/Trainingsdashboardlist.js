import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";
import ApiService from "../../APIService";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";


function Trainingsdashboardlist(props) {


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [token] = useCookies(['myToken'])
    const reload=()=>window.location.reload();
    let history = useHistory()

    const deleteTrainingsplan = () =>{
        ApiService.DeleteTrainingsplan(props.training.id, token['myToken'])
            .then(response => props.deleteTrainingsplanbtn(response))
            .then(() => reload())
            .catch(err => console.log(err))
    }

    const PushTOComment = () =>{
        history.push('trainingsplan/comment/'+ props.training.id)
    }


    return (

     <div>

        <div className="stylingDasboardList" onClick={handleShow}>
            {
                        <div key={props.training.id} className = "stylingDasboarddaten">
                            <p><h6>Date:</h6>{props.training.date}</p>
                            <p><h6>Title:</h6>{props.training.title}</p>
                            <p><h6>Description:</h6>{props.training.description}</p>
                        </div>
            }
        </div>
            <div >
                {/*backdrop="static"*/}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Trainingsplan detail {props.training.date}</Modal.Title>
            </Modal.Header>
            <div className="m-3">
                <input className = "form-control"
                       value={props.training.date}/>
            </div>
            <div className="m-3">
                <input className = "form-control"
                       value={props.training.title}/>
            </div>
            <div className="m-3">
                {props.training.description ?
                    <textarea className="form-control" id="username"
                              value={props.training.description}/> :
                    null
                }
            </div>
            <Modal.Footer>
                <button className='btn btn-primary' type='button' onClick={PushTOComment} >
                    Comment
                </button>
                <button className='btn btn-danger' type='button' onClick={() => {
                    deleteTrainingsplan()
                }}>
                    delete
                </button>
            </Modal.Footer>
        </Modal>
        </div>

     </div>
    );
}

export default Trainingsdashboardlist;
