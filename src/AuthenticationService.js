class AuthenticationService{
    startAuthenticationService(username, password){
        console.log('User Authenticated');
        sessionStorage.setItem('authenticatedUser', username);
    }

    removeAuthenticatedService(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isAuthenticated(){
        let authUser = sessionStorage.getItem('authenticatedUser');
        
        if(authUser){
            return true;
        }
        else return false;
    }
}

export default new AuthenticationService();