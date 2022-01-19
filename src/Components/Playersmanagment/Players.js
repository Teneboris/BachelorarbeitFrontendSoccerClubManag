import React, {useEffect, useState} from 'react';
import './player.css'
import axios from "axios";
import Navbar from "../Hearder/Navbar";
import {PlayerList} from "./PlayerList";
import { useRouteMatch } from 'react-router-dom';

function Players(props) {

    const [users, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/auth/all/users/`,{
        })
            .then(response => {
                return setUser(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    },[])

    function Workspacelist() {
        const {
            params: { id },
        } = useRouteMatch('/players/profis/:id');

        console.log(id)
    }

    return (
        <div>
            <div className = "navbar">
                <Navbar/>
            </div>
            {users.map(user => {
                    console.log("the User", user)
                    return  <PlayerList key={user.id}
                                        playerpositions = {user}/>

            })

            }
            <div className="Allplayers container">
                     <div  className='goalkeeper'>
                        <h5>Torward</h5>
                         <hr/>
                         {users.map(user =>{
                                 if(user.player[0]?.name === "GOALKEEPER"){
                                     return <a key={user.id} href={"/players/profis/"+ user.id}><p>{user.firstName}</p></a>

                                 }

                         })
                         }
                     </div>
                <div className='defence'>
                    <h5>Abwehr</h5>
                    <hr/>
                    {users.map(user =>{
                        if(user.player[0]?.name === "DEFENCE"){
                            return <a key={user.id} playerposition = {user} href={"/players/profis/" + user.id}><p>{user.firstName}</p></a>

                        }

                    })

                    }
                </div>

                <div className='midfield'>
                    <h5>Mittelfeld</h5>
                    <hr/>
                    {users.map(user =>{
                        if(user.player[0]?.name === "MIDFIELD"){
                            return <a key={user.id} playerposition = {user} href={"/players/profis/" + user.id}><p>{user.firstName}</p></a>
                        }
                    })

                    }
                </div>

                <div className='storm'>
                    <h5>Stürmer</h5>
                    <hr/>
                    {users.map(user =>{
                        if(user.player[0]?.name === "STORM"){
                            return <a key={user.id} playerposition = {user} href={ "/players/profis/"+ user.id}><p>{user.firstName}</p></a>

                        }

                    })

                    }
                </div>
           {/*     <form className="relative">
                    <svg width="20" height="20" fill="currentColor"
                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                    </svg>
                    <input
                        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                        type="text" aria-label="Filter projects" placeholder="Filter projects"/>
                </form>*/}
            </div>
        </div>
    );
}

export default Players;
