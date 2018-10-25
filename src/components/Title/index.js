import React, {Component} from 'react';
import CloseButton from '../CloseButton';
import './styles.css';

class Title extends Component {
  render() {
    return <div className="Title">
        { this.props.copy }
        <CloseButton />
      </div>
  }
}

export default Title;