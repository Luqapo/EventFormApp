import React from 'react';

import './App.css';
import MatrialUIform from './MaterialUIform/MaterialUIform';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = props => {

  const handleSubmit = values => {
    fetch('http://localhost:5000/api/register', {
        method : 'POST',
        body : JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          date: values.eventDate
        }),
        headers: {
            'Content-Type': 'application/json',
        },
       })
      .then( resp => {
        if (resp.ok){
          return resp.json();
        } else {
            async function getErorrMessage(){
              const errorMessage = await resp.json();
              alert(errorMessage.message);
            }
            getErorrMessage();
        }
      })
      .then( resp => {
        alert(resp.message);
        })
      .catch( error => {
         alert('Network error!');
      })
  }

    return (
      <div className="App">
        <h1>New Redux Form</h1>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <MatrialUIform onSubmit={handleSubmit}/>
        </MuiThemeProvider>
      </div>
    );  
}

export default App;