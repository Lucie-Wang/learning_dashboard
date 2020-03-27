import React, {useState, useEffect} from 'react';
import './App.css';
import {Router} from '@reach/router';
import Wrapper from './components/Wrapper';
import Success from './components/Success';
import Timer20 from './components/Timer20';
import axios from 'axios'
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

// i used a wrapper so that you can see the registration and login as different components
// instead of on one page. the wrapper allows me to put both components on the same route.
// if the cookie was set with HttpOnly:false then you can show it using {document.cookie}
function App() {
  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <Router>
        <Wrapper path="/"/>
        <Success path="/success" />
        <Timer20 path="/timer/timer20" />
        <TaskList path="/tasklist"></TaskList>
      </Router> 
    </div>
  );
}

export default App;
