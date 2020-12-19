import React, {Component} from 'react';
import styles from './Counter.module.css';
import propTypes from 'prop-types';
import Button from './Button';

class Counter extends Component{
state={
    counter: 0
}

    increment=(by)=> {
        this.setState({counter: this.state.counter + by})
        // console.log('Hello world');
    }

    reset=()=>{
        this.setState({counter: 0})
    }

    render(){
    return(
        <div>
            <Button by={1} incrementi={()=>this.increment(1)}/>
            <Button by={5} incrementi={()=>this.increment(5)}/>
            <Button by={10} incrementi={()=>this.increment(10)}/>
            <Button by={15} incrementi={()=>this.increment(15)}/>
            <Button by={20} incrementi={()=>this.increment(20)}/>
            <span className={styles.number}>{this.state.counter}</span>
            <button onClick={this.reset}>Reset</button>
        </div>
    )}
}

Counter.defaultProps={
    by: 1
}

Counter.propTypes = {
    by: propTypes.number
}

export default Counter;
