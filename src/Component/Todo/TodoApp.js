import React, {Component} from 'react';
import styles from './TodoStyles.module.css';

class TodoApp extends Component{
render(){
    return(
        <div className={styles.TodoApp}>
            <LoginComponent/>
            </div>
    )
}
}

class LoginComponent extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         username: 'in28minutes',
    //         password: ''
    //     }
    //     this.handleUsernameChange = this.handleUsernameChange.bind(this);
    //     this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // }

    state={
        username:'in28minutes',
        password:'',
        loginFailed:null
    }

    handleChange=(event)=>{
        // console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked=()=>{
        if(this.state.username=='in28minutes' && this.state.password=='dummy'){
            this.setState({
                loginFailed: false
            })
        }
        else{
            this.setState({
                loginFailed: true
            })
        }
        // console.log(this.state);
    }
    render(){
        return(
            <>
            {this.state.loginFailed ? "Login Failed" : "Login Successful"}
            <br/>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </>
        )
    }
}

export default TodoApp;