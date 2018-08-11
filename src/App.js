import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import history from './helpers/history';
import './App.css';
import NavBar from './components/NavBar';
import VideoList from './components/VideoList';
import SearchView from './components/SearchView';
import VideoView from './components/VideoView';



class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <NavBar></NavBar>
        <br />
        <Route exact path="/" component={VideoList} />
        <Route exact path="/search/:search" component={SearchView} />
        <Route exact path="/video/:videoId" component={VideoView} />
      </div>
      </Router>
    );
  }
}

export default App;
