
import React from 'react';
import {Route} from 'react-router-dom';
import './main.css';
import Header from './header';
import Homepage from './homepage.js';
import SendMessage from './send-message';
import ReceiveMessage from './receive-message';
import ResponseMessage from './response-message';
import MessagesList from './messagesList';



import Footer from './footer';


function App() {
  return ( 
    <>
    <Header></Header>
    <Route exact path="/homepage" component={Homepage} />
    <Route exact path="/messagesList" component={MessagesList} />
    <Route exact path="/send-message" component={SendMessage} />
    <Route exact path="/receive-message" component={ReceiveMessage} />
    <Route exact path="/response-message" component={ResponseMessage} />
    <Footer></Footer>
    </>

  );
}

export default App;