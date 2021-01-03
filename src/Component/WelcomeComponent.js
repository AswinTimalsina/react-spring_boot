import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import HelloWorldService from '../api/todo/HelloWorldService';


class WelcomeComponent extends Component{
    state={
        message: '',
        messageBean: '',
        messagePath:''
    }

    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService()
        .then(result=>{
            this.setState({
                message: result.data
            })
        }).catch(err=>console.log("Error: "+err));
    }

    retrieveWelcomeMessageBean(){
        HelloWorldService.executeHelloWorldServiceBean()
        .then(result=>{
            console.log(result);
            this.setState({
                messageBean: result.data.message
            })
        }).catch(err=>console.log("Error: "+err));
    }

    retrieveWelcomeMessagePath(){
        HelloWorldService.executeHelloWorldServicePath(this.props.match.params.name)
        .then(res=>{
            this.setState({
                messagePath: res.data.message
            })
        })
        .catch(err=>console.log("Error path: "+err.response.data.message));
    }

    render(){

        return(
            <div>
                Welcome {this.props.match.params.name}!!! <Link to="/todos">Todo</Link>
                <br/>
                Click here to get the welcome message: <button onClick={()=>this.retrieveWelcomeMessage()} className='btn btn-success'>Click Me</button>

                <div className='container'>Message: {this.state.message}</div>

                 Click here to get the welcome message bean: <button onClick={()=>this.retrieveWelcomeMessageBean()} className='btn btn-success'>Click Me for Bean</button>

                 <div className='container'>Bean: {this.state.messageBean}</div>

                 Click here to get the welcome message path: <button onClick={()=>this.retrieveWelcomeMessagePath()} className='btn btn-success'>Click Me for Path</button>

                 <div className='container'>Bean: {this.state.messagePath}</div>
            </div>
        )
    }
}

export default WelcomeComponent;