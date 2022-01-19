import React, {Component} from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

     ClickMe = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button className = "btn btn-success" onClick={this.ClickMe}>Click ME</button>
            </div>
        );
    }
}
export default Counter;
