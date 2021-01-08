import axios from 'axios';

class AuthenticationService{

    startAuthenticationService(username, password){
        let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);

        console.log('User Authenticated');
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(basicAuthHeader);
    }

    authenticationBackend(username, password){
        let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);

        return axios.get('http://localhost:8080/basicauth',{
            headers: {
                authorization: basicAuthHeader
            }
        })}


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

    getLoggedInUsername(){
        let authUser = sessionStorage.getItem('authenticatedUser');
        if(authUser){
            return authUser;
        }
        else{
            return '';
        }
    }

    setupAxiosInterceptors(basicAuthHeader){
  
        axios.interceptors.request.use(
            (config)=>{
                if(this.isAuthenticated()){
                config.headers.authorization=basicAuthHeader
            }
            return config;
        }
        )
    }
}

export default new AuthenticationService();