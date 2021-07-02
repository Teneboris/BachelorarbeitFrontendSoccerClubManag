import React, {useState} from 'react';
import './PostNews.css'
import Hearder from "../Hearder/Hearder";

function PostNews(props) {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    return (

        <div>

            <div>
                <Hearder/>
            </div>
            <br/>
            <br/>
            <div className='PostNewsStyling'>
                <div className='createTraining'>
                    <h2>Post News</h2>
                </div>
                <form>
                    <div className="mb-3">

                        <div>
                            <label className = "form-label" htmlFor = "title" >Title</label>
                            <input type="" className = "form-control" id="title" placeholder="please enter title training"
                                   value={title}  onChange={ event => setTitle(event.target.value)} required/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className = "form-label" htmlFor = "description" >Description</label>
                        <textarea  type="text"  className = "form-control" id='description' placeholder="please describe hier the training format"
                                   value={image} onChange={ event => setImage(event.target.value)} required ></textarea>
                    </div>
                </form>
                <button  className='btn btn-primary' >Post</button>
            </div>

        </div>
    );
}

export default PostNews;
