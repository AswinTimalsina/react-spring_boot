import React, {Component} from 'react';
import styles from './TodoStyles.module.css';
import {Route, Switch, Link} from 'react-router-dom';
import AuthenticationService from '../../AuthenticationService';
import TodoComponent from '../../TodoComponent';
import HeaderComponent from '../../HeaderComponent';
import AuthenticatedUser from '../../AuthenticatedUser';

class TodoApp extends Component{
render()
    
    {
    return(
        <div className={styles.TodoApp}>
        <HeaderComponent/>
            <Switch>
            <Route path='/' exact component={LoginComponent}/>
            <Route path='/login' component={LoginComponent}/>
            <AuthenticatedUser path='/logout' component={LogoutComponent}/>
            <AuthenticatedUser path="/todos" exact component={TodoComponent}/>
            <AuthenticatedUser path="/welcome/:name" component={WelcomeComponent}/>  
            <Route component={ErrorHandling}/>
            </Switch>
          
            <FooterComponent/>
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
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){
            // this.setState({
            //     loginFailed: false
            // })
            AuthenticationService.startAuthenticationService(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
        }
        else{
            this.setState({
                loginFailed: true
            })
        }  
        // console.log(this.state);
    }
    render()
    {
        let credentialFailed = this.state.loginFailed;
        let ret ="";
        if(credentialFailed){
            ret = (<div className="alert alert-warning">Invalid Credentials</div>)
        }
        else if(credentialFailed === false){
            ret = (<div>Successful</div>)
        }
        else{
            ret = ""
        }
        return(
            <>
            <h1>Login</h1>
            <div className="container">
            {ret}
            <br/>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked} className="btn btn-success">Login</button>
            </div>
            </>
        )
    }
}
// class HeaderComponent extends Component{
//     render(){
//         return(
//             <>
//                 Header <hr/>
//             </>
//         )
//     }
// }

class FooterComponent extends Component{
    render(){
        return(
            <>
               <footer className="footer">
                   <span className='text-muted'>All Rights Reserved 2020 @AswinTimalsina</span>
               </footer>
            </>
        )
    }
}

function LogoutComponent(){
    return(
        <>
            <h1>You are logged out</h1>
            <div className='container'>
                Thank you for using our application.
            </div>
        </>
    )
}

function ErrorHandling(){
    return(<div>It is a wrong URL!!! Contact the administrator.</div>)
}

class WelcomeComponent extends Component{
        render(){
            return(
            <div>Welcome {this.props.match.params.name}!!! <Link to="/todos">Todo</Link></div>
        )}
}



export default TodoApp;