import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/Administrator/Admin.css'
import './Components/Profil/Profil.css'
import'./Components/Coach/Coach.css'
import './Components/PostNews/PostNews.css'
import './Components/PostGames/PostGames.css'
import './Components/Register/userregister.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Forms from "./component/Forms";
import Login from "./Components/Loginmanagement/Login";
import {CookiesProvider} from "react-cookie";
import ForgotPassword from "./Components/Passwordmanagment/ForgotPassword";
import ConfimRegistration from "./Components/Passwordmanagment/ConfimRegistration";
import PasswordChangesuccessful from "./Components/Passwordmanagment/PasswordChangesuccessful";
import DashboardTrainingsplan from "./Components/Traininingsplan/DashboardTrainingsplan";
import AddTrainingsplan from "./Components/Traininingsplan/AddTrainingsplan";
import News from "./Components/News/Home/News";
import Players from "./Components/Playersmanagment/Players";
import Playersprofis from "./Components/Playersmanagment/Playersprofis";
import UserProfil from "./Components/Profil/UserProfil";
import Games from "./Components/Games/Games";
import Coach from "./Components/Coach/Coach";
import DashboardAdmin from "./Components/Administrator/DashboardAdmin";
import Comment from "./Components/Comment/Comment";
import './Components/Comment/comment.css'
import PostNews from "./Components/PostNews/PostNews";
import PostGames from "./Components/PostGames/PostGames";
import Userregister from "./Components/Register/userregister";

function Router(){

    return(
        <CookiesProvider>
        <BrowserRouter>

            <Route exact path='/' component= {Login}/>
            <Route exact path='/signupuser' component= {App}/>
            <Route exact path='/forgotpassword' component= {ForgotPassword}/>
            <Route exact path='/confirmregistration' component= {ConfimRegistration}/>
            <Route exact path='/ForgotPassword/passwordchangesuccessfully' component= {PasswordChangesuccessful}/>
            <Route exact path='/trainingsplan' component= {DashboardTrainingsplan}/>
            <Route exact path='/trainingsplan/addtraningsplan' component= {AddTrainingsplan}/>
            <Route exact path='/news' component= {News}/>
            <Route exact path='/players' component= {Players}/>
            <Route exact path='/players/profis' component= {Playersprofis}/>
            <Route exact path='/profile/:profilID' component= {UserProfil}/>
            <Route exact path='/games' component= {Games}/>
            <Route exact path='/admin' component= {DashboardAdmin}/>
            <Route exact path='/trainer' component= {Coach}/>
            <Route exact path='/admin/postnews' component= {PostNews}/>
            <Route exact path='/admin/creategames' component= {PostGames}/>
            <Route exact path='/admin/createuser' component= {Userregister}/>
            <Route exact path='/trainingsplan/comment/:trainingId' component= {Comment}/>
            <Route exact path='/trainer/addtraningsplan' component= {AddTrainingsplan}/>

        </BrowserRouter>
        </CookiesProvider>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
