import React, {useState} from 'react';
import Hearder from "../Hearder/Hearder";

function Playersprofis(props) {

    const [clickkable] = useState('')

    const general=()=>{
        {
            console.log("Hier is to check if allegmein is clickable")
        }
        <div>
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        </div>
    }

    return (
        <div>
            <div>
                <Hearder/>
            </div>
            <div className="playerprofilsytling container">
                <h4>Profis</h4>
                <hr/>
                <img className="ononastyling" src="../image/onana.jpeg"/>
                <br/>
                <br/>
                <div>
                    <h4>Daten</h4>
                    <hr/>
                    <div>
                        <div className="profisstatistikstyling">
                            <h5>Statistic Onana</h5>
                            <table className="table table-bordered border-primary">
                                <thead className="thead-dark">
                                <tr>
                                    <div>
                                        <button type='button' className="btn btn-dark" onClick={general}>Allegemein</button>
                                        <button type="button" className="btn btn-dark" onClick={general}>Angriff</button>
                                        <button type="button" className="btn btn-dark" onClick={general}>Abwehr</button>
                                        <button type="button" className="btn btn-dark" onClick={general}>Pässe</button>
                                        <button type="button" className="btn btn-dark" onClick={general}>Disziplin</button>
                                    </div>
                                </tr>
                                </thead>

                            </table>

                        </div>
                        <div className="profisstatistikstyling-left">
                            <h5>person Data</h5>
                            <table className="table">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="row">geboren am:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">02-12-1996</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Land:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">Kamerun</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Größe:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">182 cm</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Gewicht:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">84 kg</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Rücknummer:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">1</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Position:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">Goalkeeper</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Biherige Vereine:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">Chelsea</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Beim  Alax seit:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col">12-04-2012</td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                <tr>
                                    <th>Alle Videos zum Spieler:</th>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                   <a href="#"><td scope="col">zu dem videos</td></a>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                    <td scope="col"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Playersprofis;
