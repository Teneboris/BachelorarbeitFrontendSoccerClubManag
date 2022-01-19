import React, {Component} from 'react'


class MyClass extends Component{


    render() {
        return (
            <div>
                <h1 className= 'bg-white text-danger'>{this.props.email}</h1>
                <button className = 'btn btn-primary' onClick = {this.props.myClick}>Clik Me Class</button>
            </div>
            )
    }

}
export default MyClass;
