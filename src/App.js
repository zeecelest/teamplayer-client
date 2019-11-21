
import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './homepage.js';
import Signup from './signup.js';
import ResponseMessage from './responseMessage';
import Header from './header';


function App() {
  return ( 
    <>
    <Route exact path="/header" component={Header} />
    <Route exact path="/" component={Homepage} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/responseMessage" component={ResponseMessage} />
    </>

  );
}

export default App;