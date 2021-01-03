import {Component} from 'react';
import TodoDataService from './api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class TodoComponent extends Component{
    state={
        todo:[], 
        message: null
    }

    componentDidMount(){
      this.refreshTodo();
    }

    deleteTodo(name, id){
        TodoDataService.deleteTodo(name, id)
        .then(res=>{
            this.setState({
                message: `Delete of todo ${id} successful!`
            })
            this.refreshTodo();
        })
    }

    refreshTodo(){
        TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUsername())
        .then(res=>{
            console.log(res.data)
            this.setState({
                todo: res.data
            })
        })
        .catch(err=>{
            console.log("Todo error: "+err);
        })
    }

    updateTodo(name, id){
        this.props.history.push(`/todos/${id}`)
    }

    render(){
        return(
        <div>
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Done?</th>
                        <th>Target Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todo.map(todo=>
                         <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                            <td><button className="btn btn-success" onClick={()=>this.updateTodo(AuthenticationService.getLoggedInUsername(), todo.id)}>Update</button></td>
                            <td><button className="btn btn-warning" onClick={()=>this.deleteTodo(AuthenticationService.getLoggedInUsername(), todo.id)}>Delete</button></td>
                         </tr>
                    )}
                    
                    
                </tbody>
            </table>
            </div>
        </div>
    )}
}

export default TodoComponent;