import axios from 'axios';

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldServiceBean(){
        return axios.get('http://localhost:8080/hello-world-bean');
     }

     executeHelloWorldServicePath(name1){
         return axios.get(`http://localhost:8080/hello-world/path-variable/${name1}`)
     }
}

export default new HelloWorldService();