import React, {useEffect} from 'react';
import Hearder from "../../Hearder/Hearder";
import {useHistory} from 'react-router-dom'
import {useCookies} from "react-cookie";

function News(props) {
    let history = useHistory()
    const [token, setToken] = useCookies(['myToken'])


    return (
        <div>
            <div>
                <Hearder/>
            </div>


            <p>Hier are some news</p>
        </div>
    );
}

export default News;
