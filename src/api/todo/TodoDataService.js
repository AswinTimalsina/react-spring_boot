import axios from "axios";


class TodoDataService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodo(name, id){
        return axios.get(`http://localhost:8080//users/${name}/todos/${id}`);
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo){
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }

    addTodo(name, todo){
        let username = 'user';
        let password = 'ca0f78d0-a350-45bd-a183-000213921b1c';

        let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);
        return axios.post(`http://localhost:8080/users/${name}/todos`, todo,
        {
            headers:{
                authorization: basicAuthHeader
            }
        }
        )

    }
}

export default new TodoDataService();