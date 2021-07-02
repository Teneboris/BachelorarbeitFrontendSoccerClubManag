import './App.css';
import Hello from "./component/hello";
import FunComponent from "./component/funComponent";
import MyClass from "./component/MyClass";
import Name from "./component/Name"
import Exemple from "./component/Exemple"
import Exemple2 from "./component/Exemple2";
import Forms from "./component/Forms";
import MyFragment from "./component/MyFragment";
import ComponentA from "./component/ComponentA";
import React,{useState, useEffect} from "react";
import axios from 'axios';
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";
import FechtData from "./component/FechtData";
import ComponentAuseContext from "./component/ComponentAuseContext";
import UseReducer from "./component/UseReducer";
import DataFecthing from "./component/DataFecthing";
import UserList from "./Components/Orthers/UserList";
import FormsUser from "./Components/Orthers/FormsUser";
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom'


function App() {

    const [users, setUser] = useState([])
    const [editUsers, setEditUser] = useState(null)
    const [token, setToken, removeToken] = useCookies(['myToken'])
    let history = useHistory()
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/signupperson/", {
            headers: {
                'Content-type':"application/json",
                'Authorization':`Token ${token['myToken']}`
            }
        })
            .then(response => {
                return setUser(response.data)
            })
            .catch(error => {
                return console.log(error)
            })
    }, [])

    //redirect to Login Page
    useEffect(() => {
        if (!token['myToken']) {
            history.push('/')
            //window.location.href = '/'
        }
    }, [token])

    const editBtn = (user) => {
        setEditUser(user)
    }

    const deleteBtn = (user)=>{
        const new_user = users.filter(myUser =>{
            if(myUser.user_id === user.user_id){
                return false
            }
            else{
                return true;
            }
        })
        setUser(new_user)
    }

    const updateInformation = (user)=>{
        const new_user = users.map(myUser =>{
            if(myUser.user_id === user.user_id){
                return user
                console.log('this is the user', user)
            }
            else{
                return myUser;
            }
        })
        setUser(new_user)
    }

    // Automalic Update
    /*const updateInformation = (user) =>{
        const new_user = users.map(myUser => {
            console.log("ID MyUser: ", myUser.user_id )
            console.log("ID USER_ID: ", user.user_id )
            if(myUser.user_id === user.user_id){
                return user;
            }
            else {
                return myUser
            }
        })
        setUser(new_user);
    }*/

    const insertedInformation = (appenduser) => {
        //copy all the previews Users
        const new_user = [...users, appenduser]
        setUser(new_user)
    }


    const userForm = (user) => {
        setEditUser({first_name:'', last_name:''})
    }

    const logoutBtn = ()=>{
        removeToken(['myToken'])
    }


    return (
    <div className="App">
        <div className = "row">
            <div className="col">
                <h2>This is something special now</h2>
            </div>
            <div className="col">
                <button onClick = {userForm} className ="btn btn-primary">Insert User</button>
            </div>

            <div className="col">
                <button onClick = {logoutBtn} className ="btn btn-primary">Logout</button>
            </div>
        </div>

        {/* <Name/>
       <Exemple names={['python', 'Java', 'PHP', 'Laravel']}/>
       <Exemple2 names={['Msql', 'Docker', 'c#', 'c++']}/>
       <FormsUser/>
       <MyFragment/>*/}
       {/*<MyContext.Provider value = "this is a value from context">
           <ComponentA/>
       </MyContext.Provider>*/}
       {/*<Counter/>
       <CounterHook/>*/}
       {/*<FechtData/>*/}
     {/*   <MyContext.Provider value = "this is a value from context">
           <ComponentAuseContext/>
       </MyContext.Provider>
        <UseReducer/>*/}
        {/*<DataFecthing/>*/}


        <UserList users = {users} editBtn = {editBtn} deleteBtn = {deleteBtn}/>

        {editUsers ? <FormsUser usersignup = {editUsers} updateInformation = {updateInformation}
                                insertedInformation = {insertedInformation}/> : null}

    </div>
  );
}

export default App;
