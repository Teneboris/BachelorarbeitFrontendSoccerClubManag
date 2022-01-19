import React from 'react'

function Hello(props){

    function ClickMe(){
        alert("button is clicked");
    }
    return (
        <div>
            <h1>My name is :{props.name}</h1>
            <button className ='btn btn-success' onClick={ClickMe}>Click Me</button>
        </div>
    )
}
export default Hello;
