import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as actionTypes from './store/actions';

class App extends Component {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.props.setValue(name, value);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);
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
    date: state.date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => dispatch({ type: actionTypes.SET_VALUE, 
                                          inputName: name, 
                                          inputValue: value })
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(App);
