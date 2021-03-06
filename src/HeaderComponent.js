import {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';
import {withRouter} from 'react-router';



class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isAuthenticated();
        // console.log('Hello '+isUserLoggedIn);

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link to="/" className='navbar-brand'>in28minutes</Link></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to='/welcome/in28minutes'>Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to='/todos'>Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to='/login'>Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to='/logout' onClick={AuthenticationService.removeAuthenticatedService}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);