import React from 'react';
import Hearder from "../Hearder/Hearder";

function Players(props) {
    return (
        <div>
            <div>
                <Hearder/>
            </div>
            <div className="Allplayers, container">
                <div>
                    <h5>Goalkeeper</h5>
                    <hr/>
                   <a href="/players/profis"><p>Onana</p></a>
                    <a href="/players/profis"><p>Ondoa</p></a>
                    <a href="/players/profis"><p>Alium Boukar</p></a>
                </div>

                <div>
                    <h5>Defence</h5>
                    <hr/>
                    <a href="/players/profis"><p>Nkoulou</p></a>
                    <a href="/players/profis"><p>Van Djik</p></a>
                    <a href="/players/profis"><p>Ramos</p></a>
                    <a href="/players/profis"><p>Varane</p></a>
                    <a href="/players/profis"><p>Pepe</p></a>
                </div>

                <div>
                    <h5>Midfield</h5>
                    <hr/>
                    <a href="/players/profis"><p>Keita</p></a>
                    <a href="/players/profis"><p>Tiago</p></a>
                    <a href="/players/profis"><p>Kross</p></a>
                    <a href="/players/profis"><p>Geremi</p></a>
                    <a href="/players/profis"><p>Djouf</p></a>
                    <a href="/players/profis"><p>Rodrigo</p></a>
                    <a href="/players/profis"><p>Vinicuis</p></a>
                    <a href="/players/profis"><p>Benzema</p></a>
                    <a href="/players/profis"><p>neymar</p></a>
                    <a href="/players/profis"><p>Choupo</p></a>
                </div>

                <div>
                    <h5>storm</h5>
                    <hr/>
                    <a href="/players/profis"><p>Etoo</p></a>
                    <a href="/players/profis"><p>Mane</p></a>
                    <a href="/players/profis"><p>Salah</p></a>
                    <a href="/players/profis"><p>Aboubakar</p></a>
                    <a href="/players/profis"><p>Ferminho</p></a>
                </div>
            </div>
        </div>
    );
}

export default Players;
