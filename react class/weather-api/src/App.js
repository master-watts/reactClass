import React, { Component } from 'react';
import MyNavBar from './components/MyNavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        { this.props.children }
      </div>
    );
  }
}

export default App;
