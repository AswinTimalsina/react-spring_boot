import {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class AuthenticatedUser extends Component{
    render(){
        var isLoggedIn = AuthenticationService.isAuthenticated();
        if(isLoggedIn){
            return <Route {...this.props}/>
        }
        else{
            return <Redirect to='/login'/>
        }
        
    }
}

export default AuthenticatedUser;