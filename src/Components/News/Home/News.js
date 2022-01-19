import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {useCookies} from "react-cookie";
import HearderResponsive from "../../Hearder/HearderResponsive";
import './news.css'
import Navbar from "../../Hearder/Navbar";

function News(props) {
    let history = useHistory()
    const [token, setToken] = useCookies(['myToken'])


    return (
        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
            <p className='text'>Hier are some news</p>
        </div>
    );
}

export default News;
