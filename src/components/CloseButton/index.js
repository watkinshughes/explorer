import React, {Component} from 'react';
import './styles.css';

class CloseButton extends Component {
  render() {
    return <button className="CloseButton" href="#close">
      <span className="visually-hidden">Close Modal</span>
    </button>
  }
}

export default CloseButton;