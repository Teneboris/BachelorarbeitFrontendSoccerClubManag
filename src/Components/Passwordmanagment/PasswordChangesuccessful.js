import React from 'react';
import {useHistory} from 'react-router-dom'


function PasswordChangesuccessful(props) {

    let history = useHistory()

    const ReturnOnLoginPage = () =>{
        history.push('/signupuser')
    }

    return (
            <div className = "App">
                <div className='Logstyle' >
                    <div className="logTitle">
                        Password change successful please click on the button Login.
                        <br/>
                        <br/>
                        <button onClick={ReturnOnLoginPage} type = "button" className ="btn btn-primary">Login</button>
                    </div>

                </div>

            </div>
    );
}

export default PasswordChangesuccessful;
