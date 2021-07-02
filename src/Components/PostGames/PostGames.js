import React, {useState} from 'react';
import Hearder from "../Hearder/Hearder";
import './PostGames.css'

function PostGames(props) {

    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const _onFocus= (e)=>{
        e.currentTarget.type = "date";
    }
    const _onBlur=(e)=>{
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Enter a Date";
    }

    return (
        <div>
            <div>

                <div>
                    <Hearder/>
                </div>
                <br/>
                <br/>
                <div className='PostGamesStyling'>
                    <div className='createTraining'>
                        <h2>Create Game</h2>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label className = "form-label" htmlFor = "date" >Date</label>
                            <input  onFocus = {_onFocus} onBlur={_onBlur} className = "form-control" id="date"
                                    value={date}  onChange={ event => setDate(event.target.value)} autoFocus required='please enter valid date'/>
                        </div>
                        <div className="mb-3">
                                <label className = "form-label" htmlFor = "location" >Location</label>
                                <input type="" className = "form-control" id="location" placeholder="please enter a location"
                                       value={location}  onChange={ event => setLocation(event.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label className = "form-label" htmlFor = "description" >Description</label>
                            <textarea  type="text"  className = "form-control" id='description' placeholder="please describe hier the training format"
                                       value={description} onChange={ event => setDescription(event.target.value)} required ></textarea>
                        </div>
                    </form>
                    <button  className='btn btn-primary' >Post</button>
                </div>

            </div>
        </div>
    );
}

export default PostGames;
