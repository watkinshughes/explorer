import React, { Component } from 'react';
import Title from '../Title';
import Label from '../Label';
import List from '../List';
import Footer from '../Footer';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title copy="Title"/>
        <Label copy="Label" />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
