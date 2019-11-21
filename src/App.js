
import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './homepage.js';
import ResponseMessage from './response-message';
import Header from './header';
import SendMessage from './send-message';
import ReceiveMessage from './receive-message';
import Footer from './footer';


function App() {
  return ( 
    <>
    <Header></Header>
    <Route exact path="/homepage" component={Homepage} />
    <Route exact path="/response-message" component={ResponseMessage} />
    <Route exact path="/send-message" component={SendMessage} />
    <Route exact path="/receive-message" component={ReceiveMessage} />
    <Footer></Footer>
    </>

  );
}

export default App;