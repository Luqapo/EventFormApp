import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField, DatePicker } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';

import './MaterialUIform.css'

const validate = values => {
    const errors = {}
    const requiredFields = [ 'firstName', 'lastName', 'email', 'eventDate' ]
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }
  

export class MaterialUIform extends Component {
    render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <Field name="firstName" 
                       component={TextField} 
                       label="First Name" 
                       hintText="First name"
                    />
                <Field name="lastName" 
                       component={TextField} 
                       label="Last Name" 
                       hintText="Last name"
                    />
                <Field name="email" 
                       component={TextField} 
                       label="email" 
                       hintText="Email"
                    />
                <Field name="eventDate" 
                       component={DatePicker} 
                       formal={null} 
                       hintText="What day is the event?"
                    />
                <Button style={{marginRight: '20px'}} 
                        type="submit" 
                        disabled={ pristine || submitting } 
                        variant="outlined" 
                        color="primary">
                        Submit
                    </Button>
                <Button type="button" 
                        disabled={ pristine || submitting } 
                        variant="outlined" color="secondary" 
                        onClick={reset}>
                        Reset
                    </Button>
            </form>
        </div>
    )
}
}

export default reduxForm({
    form: 'MaterialUIform',
    validate
})(MaterialUIform);