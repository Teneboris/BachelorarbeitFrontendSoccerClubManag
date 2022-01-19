import React, {Component} from 'react';

//use this one for rape of the children of element and remove <div>
class MyFragment extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>this is my first fragment</h3>
                <p>im proud of this</p>
            </React.Fragment>

        );
    }
}

export default MyFragment;
