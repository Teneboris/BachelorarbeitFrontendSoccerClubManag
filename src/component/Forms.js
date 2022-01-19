import React, {Component} from 'react';

class Forms extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            posts:[]
        }
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })

}

    passwordHandler= (event) => {
        this.setState({
            password: event.target.value
        })

    }

    componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => this.setState({posts: data}))
        }

    render() {
        const {posts} = this.state

        return (
            <div className='container'>
                <input type="text" value={this.state.username} placeholder = 'Enter your username' className='form-control' onChange={this.usernameHandler}/>
                <input type="password" value={this.state.password} placeholder = 'Enter your password' className='form-control' onChange={this.passwordHandler}/>
                <button className="btn btn-success">Click Me</button>

              {/*  {posts.map(post =>
                <h2 key = {post.id}>{post.id}</h2>
                )}*/}

            </div>
        );
    }
}

export default Forms;
