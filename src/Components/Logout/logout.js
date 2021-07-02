import React from 'react';
import {useCookies} from "react-cookie";


function Logout(props) {

    const [token, setToken, removeToken] = useCookies(['myToken'])

    const logoutBtn = ()=>{
        removeToken(['myToken'])
    }

    return (
        <div>

        </div>
    );
}

export default Logout;
