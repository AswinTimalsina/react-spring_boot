import { Field, Form, Formik, ErrorMessage } from 'formik';
import moment from 'moment';
import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from '../../AuthenticationService';

class TodoUpComponent extends Component{
    state={
        id: this.props.match.params.id,
        description: null,
        targetDate: null
    }

    onSubmit(values){
        console.log(values)
    }

    onValidate(values){
        let errors={}
        if(!values.description){
            errors.description = 'Enter a description'
        }
        else if(values.description.length < 5){
            errors.description = 'Enter a description atleast of length 5';
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid date';
        }
        return errors;
        
    }

    componentDidMount(){
        TodoDataService.retrieveTodo(AuthenticationService.getLoggedInUsername(), this.state.id)
        .then(res=>{
            // console.log(res.data);
            this.setState({
                description: res.data.description,
                targetDate: moment(res.data.targetDate).format('YYYY-MM-DD')
            })
        })
    }

    render(){
        let {description, targetDate} = this.state;
        return(<div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                    initialValues={{description, targetDate }}
                    onSubmit={this.onSubmit}
                    validate={this.onValidate}
                    enableReinitialize={true}
                >
                    {props=> 
                    <Form> 
                        <ErrorMessage name='description' component='div' className='alert alert-warning'/>
                        <ErrorMessage name='targetDate' component='div' className='alert alert-warning'/>
                        <fieldset className="form-group">
                            <label>Description</label>
                            <Field className="form-control" type="text" name="description"/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Target Date</label>
                            <Field className="form-control" type="date" name="targetDate"/>
                        </fieldset>
                        <button type="submit" className="btn btn-success">Save</button>
                    </Form>
                    }
                </Formik>
            </div>
            
            </div>)
    }
}

export default TodoUpComponent;