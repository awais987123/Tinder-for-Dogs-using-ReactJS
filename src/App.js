import React from 'react';
import './App.css';
import Header from './Header';
import Chats from './Chats';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
  

      <Router>
     
        <Switch>
        <Route path="/chats/:person">
        <Header BackButton="/chats"/>
        <ChatScreen />
        </Route>
        <Route path="/chats">
<Header BackButton="/"/>
<Chats />
        </Route>
          <Route path="/">
          <Header />
<TinderCards />
<SwipeButtons />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
  
