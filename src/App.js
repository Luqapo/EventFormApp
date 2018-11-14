import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as actionTypes from './store/actions';

export class App extends Component {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.props.setValue(name, value);
  }

  handleSubmit = event => {
    event.preventDefault();
    let error = '';
    if(!this.props.firstName){
      error = 'First name is required!';
    }
    if(!this.props.lastName){
      error = 'Last name is required!';
    }
    if(!this.props.email){
      error = 'Email is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.props.email)){
      error = 'Invalid email addres';
    }
    if(!this.props.date){
      error = 'Date is required!';
    }
    this.props.setError(error);
    if(!error){
      fetch('http://localhost:5000/api/register', {
        method : 'POST',
        body : JSON.stringify({
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          email: this.props.email,
          date: this.props.date
        }),
        headers: {
            'Content-Type': 'application/json',
        },
       })
      .then( resp => resp.json())
      .then( response => {
        this.props.setError(response.message);
        })
      .catch( error => {
         this.props.setError(error.message);
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Add Event</h1>
        <div className="Form">
          <form className="Input" onSubmit={this.handleSubmit}>
            <label className="Label">
              First name
              <input className="InputElement" 
                     type="text" 
                     name="firstName" 
                     onChange={this.handleChange} />
            </label>
            <label className="Label">
              Last name
              <input className="InputElement" 
                     type="text" 
                     name="lastName" 
                     onChange={this.handleChange}/>
            </label>
            <label className="Label">
              Email
              <input className="InputElement" 
                     type="email" 
                     name="email" 
                     onChange={this.handleChange}/>
            </label>
            <label className="Label">
              Date
              <input className="InputElement" 
                     type="date" name="date" 
                     onChange={this.handleChange}/>
            </label>
            <label className="Error">
              {this.props.message}
            </label>
            <input className="InputElement" type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

const mapSateToProps = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    date: state.date,
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => dispatch({ type: actionTypes.SET_VALUE, 
                                          inputName: name, 
                                          inputValue: value }),
    setError: (message) => dispatch({ type: actionTypes.CHECK_ERROR,
                                            errorMessage: message})
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(App);
