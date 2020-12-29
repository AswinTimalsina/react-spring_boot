import {Component} from 'react';

class TodoComponent extends Component{
    state={
        todo:[{id:1, description: 'Learn React', done: false, targetDate: new Date()},
              {id:2, description: 'Learn Spring Boot', done: false, targetDate: new Date()},
              {id:3, description: 'Fluent in Full Stack Development', done: false, targetDate: new Date()}
    ]
    }
    render(){
        return(
        <div>
            <h1>List Todos</h1>
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todo.map(todo=>
                         <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                         </tr>
                    )}
                    
                    
                </tbody>
            </table>
            </div>
        </div>
    )}
}

export default TodoComponent;