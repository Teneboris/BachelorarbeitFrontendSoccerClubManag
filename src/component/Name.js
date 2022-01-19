import React, { Component} from 'react';

class Name extends Component {

    constructor(){
        super()
        this.state = {
            name:'Fotso Tene Boris the best'
        }
    }

    clickedMe(){
        this.setState({
            name:'change text now'
        })
    }

    render(){
        return (
            <div>
                <h1 className='bg-primary'>{this.state.name}</h1>
                <button className='btn btn-success'onClick={()=>this.clickedMe()}>Change Text</button>
            </div>
        )}
}
export default Name;
