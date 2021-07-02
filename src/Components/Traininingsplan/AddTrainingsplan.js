import React, {useState, useEffect, Component} from 'react';
import Hearder from "../Hearder/Hearder";
import APIService from "../../APIService";
import Modal from "react-bootstrap/Modal";
import {useCookies} from "react-cookie";


function AddTrainingsplan(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [token] = useCookies(['myToken'])
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
 /*   const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);*/


    const _onFocus= (e)=>{
        e.currentTarget.type = "date";
    }
  const _onBlur=(e)=>{
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Enter a Date";
    }

    const addTrainingsplan = function (){

       APIService.CreateTraininingsplan({date,title,description}, token['myToken'])
           .then(response => props.addtraningsplanbtn)
           .then( () => {
               if (props.addtraningsplanbtn !== null) {
                   handleShow()
               }
           })



    }

    return (

        <div>
            <div>
               <Hearder/>
            </div>
            <br/>
            <br/>
            <div className='addTraininingsplan'>
                <div className='createTraining'>
                    <h2>Create Training</h2>
                </div>
                <form>
                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "date" >Date</label>
                        <input  onFocus = {_onFocus} onBlur={_onBlur} className = "form-control" id="date"
                               value={date}  onChange={ event => setDate(event.target.value)} autoFocus required='please enter valid date'/>
                    </div>
                    <div className="mb-3">

                            <div>
                                <label className = "form-label" htmlFor = "title" >Title</label>
                                <input type="" className = "form-control" id="title" placeholder="please enter title training"
                                       value={title}  onChange={ event => setTitle(event.target.value)} required/>
                            </div>
                              {/* <button  className='btn btn-primary' onClick={(event => addtitle(event))}>+</button>*/}
                    </div>
                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "description" >Description</label>
                        <textarea  type="text"  className = "form-control" id='description' placeholder="please describe hier the training format"
                                   value={description} onChange={ event => setDescription(event.target.value)} required ></textarea>
                    </div>

                </form>
                <button  className='btn btn-primary' onClick={addTrainingsplan}>Save</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Trainer access</Modal.Title>
                    </Modal.Header>
                    <div>
                        <input type="text" className = "form-control"  placeholder="please enter token to create a training"
                               autoFocus/>
                    </div>
                    <Modal.Footer>
                        <button className='btn btn-primary' onClick={handleClose}>
                            Close
                        </button>
                        <button className='btn btn-primary' onClick={addTrainingsplan}>
                            OK
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    );
}

export default AddTrainingsplan;
