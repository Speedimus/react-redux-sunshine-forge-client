import React, { Component } from 'react';
import Banner from './Banner';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Main />
      </div>
    );
  }
}

export default App;
