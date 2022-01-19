import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Modal from "react-bootstrap/Modal";
import {useCookies} from "react-cookie";
import axios from "axios";
import Trainingsplanlist from "./Trainingsplanlist";
import HearderResponsive from "../Hearder/HearderResponsive";
import SearchBar from "material-ui-search-bar";
import Navbar from "../Hearder/Navbar";
// import AddCircleIcon from '@mui/icons-material/AddCircle';

function DashboardTrainingsplan(props) {

    const [trainerToken, setTrainerToken] = useState('')
    const [show, setShow] = useState(false);
    const [training, setTraining] = useState([])
    const [token, setToken, removeToken] = useCookies(['myToken']);
    const [user, setUser] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isLoading, setIsLoading] = useState(false);
    let history = useHistory()


    const addTrainingsplan = () => {
            history.push("/trainingsplan/addtraningsplan");
        }

    useEffect(() => {
        if(trainerToken === null){
            history.push("/trainingsplan")
        }
    })


    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get("http://localhost:8080/api/training/getAlltraining", {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                return setTraining(response.data)
                })
            .catch(error => {
                return console.log(error)
            })
    }, [])


    const addtraningsplanbtn = appendtrainer =>{
        //copy all the previews traininplan
        const new_training = [...training, appendtrainer]
        setTraining(new_training)
    }

    const deleteTrainingsplanbtn = function (){
        const new_training = training.filter(mytraining =>{
            if(mytraining.id === training.id){
                return false
            }
            else{
                return true;
            }
        })
        setTraining(new_training)
    }
    return (

        <div className="training-content">
            <div className = "navbar">
                <Navbar/>
            </div>
            <div className='trainingsstyling'>
                <br/>
                <div className='hearderAddTraningsplan'>
                    <button type="button" className="btn btn-dark" onClick={addTrainingsplan}> + Training hinzufügen</button>
                </div>
                <div className='panels'>
                        {
                            training.map(function(training, i){
                                return <Trainingsplanlist type="button"
                                                           key={i} training = {training}
                                                           addtraningsplanbtn={addtraningsplanbtn}
                                                           deleteTrainingsplanbtn={deleteTrainingsplanbtn}/>
                            })
                        }
                </div>
            </div>
        </div>

    );
}



export default DashboardTrainingsplan;
