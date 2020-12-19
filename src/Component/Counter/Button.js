import React, {Component} from 'react';
import styles from './Counter.module.css';


class Button extends Component{
    render(){
        return(
            <button className={styles.button} onClick={this.props.incrementi}>+{this.props.by}</button>
        )
    }
}

// Button.defaultProps={
//     by: 1
// }

export default Button;