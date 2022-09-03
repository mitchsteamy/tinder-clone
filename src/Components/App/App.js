import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Header from '../Header/Header';
import TinderCards from '../TinderCards/tinderCards';
import SwipeButtons from '../SwipeButtons/SwipeButtons';
import ChatContainer from '../ChatContainer/ChatContainer';
import ChatScreen from '../ChatScreen/ChatScreen';
import ProfilePage from '../ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>

          <Route path="/profile" >
            <Header backButton="/" />
            <ProfilePage />
          </Route>

          <Route path="/chat/:person" >
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat" >
            <Header backButton="/" />
            <ChatContainer />
          </Route>

          <Route path="/" >
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

