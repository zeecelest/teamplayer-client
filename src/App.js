
import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './homepage.js';
import Signup from './signup.js';
import ResponseMessage from './response-message';
import Header from './header';
import MemberAccount from './member-account';
import SendMessage from './send-message';
import ReceiveMessage from './receive-message';


function App() {
  return ( 
    <>
    <Route exact path="/header" component={Header} />
    <Route exact path="/" component={Homepage} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/response-message" component={ResponseMessage} />
    <Route exact path="/member-account" component={MemberAccount} />
    <Route exact path="/send-message" component={SendMessage} />
    <Route exact path="/receive-message" component={ReceiveMessage} />
    </>

  );
}

export default App;