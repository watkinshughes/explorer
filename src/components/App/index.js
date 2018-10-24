import React, { Component } from 'react';
import List from '../List';
import './styles.css';
import data from '../../data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List data={ data.children } />
      </div>
    );
  }
}

export default App;
