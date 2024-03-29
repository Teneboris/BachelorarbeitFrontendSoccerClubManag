import React, {Component} from 'react';

class Exemple2 extends Component {


    myElement(names){
        return names.map(name =>
            <div key = {name}>
                {`${name}`}
            </div>
        )
    }

    render() {
        return (
            <div>
                <h3>{this.myElement(this.props.names)}</h3>
            </div>
        );
    }
}

export default Exemple2;
