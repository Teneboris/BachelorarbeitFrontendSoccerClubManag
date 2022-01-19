import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './tailwind.css'
//import './Components/Administrator/Admin.css'
import './Components/News/Home/news.css'
import './Components/Profil/Profil.css'
import './Components/Message/Messages.css'
import './Components/Hearder/hearder.css'
//import'./Components/Coach/Coach.css'
//import './Components/PostNews/PostNews.css'
import './Components/PostGames/PostGames.css'
import './Components/User_Register/userregister.css'
import './Components/Playersmanagment/player.css'
import './Components/Games/Games.css'
import './Components/Traininingsplan/Trainingsplan.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,
        BrowserRouter } from 'react-router-dom';
import Login from "./Components/Loginmanagement/Login";
import ForgotPassword from "./Components/Passwordmanagment/ForgotPassword";
import ConfimRegistration from "./Components/Passwordmanagment/ConfimRegistration";
import PasswordChangesuccessful from "./Components/Passwordmanagment/PasswordChangesuccessful";
import DashboardTrainingsplan from "./Components/Traininingsplan/DashboardTrainingsplan";
import AddTrainingsplan from "./Components/Traininingsplan/AddTrainingsplan";
import News from "./Components/News/Home/News";
import Players from "./Components/Playersmanagment/Players";
import Playersprofis from "./Components/Playersmanagment/Playersprofis";
import UserProfil from "./Components/Profil/UserProfil";
import DashboardGames from "./Components/Games/DashboardGames";
//import Coach from "./Components/Coach/Coach";
//import DashboardAdmin from "./Components/Administrator/DashboardAdmin";
import FeedBack from "./Components/FeedBack/FeedBack";
import AddGames from "./Components/Games/AddGames"
import './Components/FeedBack/Feedback.css'
//import PostNews from "./Components/PostNews/PostNews";
import PostGames from "./Components/PostGames/PostGames";
import Userregister from "./Components/User_Register/userregister";
import Messages from "./Components/Message/Messages";
import HearderResponsive from "./Components/Hearder/HearderResponsive";
import {NoPageFound} from "./Components/noPagesFound/NoPageFound";
import backgroundimage from "/Users/borisfotsotene/WebstormProjects/BachelorarbeitFrontendSoccerClubManag/src/image/backgroundimage.png"
import ChangePlayerPosition from "./Components/Playersmanagment/ChangePlayerPosition";
import UserList from "./Components/Profil/UserList";

function Router(){

    useEffect(() => {
        document.body.style.backgroundImage = `url(${backgroundimage})` ;
        document.body.style.overflow = "hidden" ;

        return () => {
            document.body.style.backgroundColor = '#fff'
        }
    })

    return(
        <BrowserRouter>
                <Route exact path='/' component= {Login}/>
                <Route exact path='/signupuser' component= {App}/>
                <Route exact path='/forgotpassword' component= {ForgotPassword}/>
                <Route exact path='/confirmregistration' component= {ConfimRegistration}/>
                <Route exact path='/ForgotPassword/passwordchangesuccessfully' component= {PasswordChangesuccessful}/>
                <Route exact path='/trainingsplan' component= {DashboardTrainingsplan}/>
                <Route exact path='/trainingsplan/addtraningsplan' component= {AddTrainingsplan}/>
                <Route exact path='/news' component= {News}/>
                <Route exact path='/hearderRespo' component= {HearderResponsive}/>
                <Route exact path='/message' component= {Messages}/>
                <Route exact path='/players' component= {Players}/>
                <Route exact path='/players/profis/:profisID' component= {Playersprofis}/>
                <Route exact path='/profile/:profileId' component= {UserProfil}/>
                <Route exact path='/players/profis/:profisname/message' component= {Messages}/>
                <Route exact path='/games' component= {DashboardGames}/>
                {/*<Route exact path='/admin' component= {DashboardAdmin}/>*/}
                {/*<Route exact path='/trainer' component= {Coach}/>*/}
                {/*<Route exact path='/admin/postnews' component= {PostNews}/>*/}
                <Route exact path='/admin/creategames' component= {PostGames}/>
                <Route exact path='/admin/createuser' component= {Userregister}/>
                <Route exact path='/trainingsplan/comment/:Id/:origin' component= {FeedBack}/>
                <Route exact path='/trainer/addtraningsplan' component= {AddTrainingsplan}/>
                <Route exact path='/game/addGames' component= {AddGames}/>
                <Route exact path='/players/profis/:profisID/playerdata' component= {ChangePlayerPosition}/>
                <Route exact path='/players/users/' component= {UserList}/>
                {/*<Route component={NoPageFound}/>*/}
        </BrowserRouter>
    )
}



ReactDOM.render(
  <React.StrictMode>
      <div className="app-main">
          <Router />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
