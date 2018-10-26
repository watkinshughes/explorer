import React, {Component} from 'react';
import './styles.css';

class CloseButton extends Component {
  render() {
    return <button className="CloseButton">
      <span className="visually-hidden">Close Modal</span>
    </button>
  }
}

export default CloseButton;
