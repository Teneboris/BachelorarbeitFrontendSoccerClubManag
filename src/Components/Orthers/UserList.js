import React from 'react';
import ApiService from "../../APIService";
import {useCookies} from 'react-cookie';


function UserList(props) {
    const [token] = useCookies(['myToken'])
    const editBtn = (user) =>{
        props.editBtn(user)
    }
    const deleteUser = (users)=>{
        ApiService.DeleteUser(users.user_id, token['myToken'])
            .then(() => props.deleteBtn(users))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {props.users  && props.users.map(user => {

                return (
                    <div key={user.user_id}>
                        <h2>{user.first_name}</h2>
                        <h2>{user.last_name}</h2>

                        <div className = "row">
                            <div className = "col-md-1">
                                <button className = "btn btn-primary" onClick = {() => editBtn(user)}>Update</button>
                            </div>
                            <div className = "col">
                                <button onClick={()=>deleteUser(user)} className = "btn btn-danger">Delete</button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
}

export default UserList;
