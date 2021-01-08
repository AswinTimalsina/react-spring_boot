import axios from 'axios';

class HelloWorldService{
    
    executeHelloWorldService(){
        // let username = 'user';
        // let password = 'c68ab437-1d56-4269-b68e-e5f42273c8ab';

        // let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldServiceBean(){
        // let username = 'user';
        // let password = 'c68ab437-1d56-4269-b68e-e5f42273c8ab';

        // let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);
        return axios.get('http://localhost:8080/hello-world-bean');
     }

     executeHelloWorldServicePath(name1){
        // let username = 'user';
        // let password = 'c68ab437-1d56-4269-b68e-e5f42273c8ab';

        // let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);
         return axios.get(`http://localhost:8080/hello-world/path-variable/${name1}`);
     }
}

export default new HelloWorldService();