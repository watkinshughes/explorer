import React, {Component} from 'react';
import './styles.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
        active: false,
    };
  }

  toggleClass(event) {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
    event.stopPropagation();
  };

  render() {
    return <li className={ `${ this.props.type } ${ this.props.private ? 'private' : '' }`}>
        <span className={ `icon ${this.state.active ? 'expanded': ''}` } onClick={ this.toggleClass }></span>
        <button>
          { this.props.name }
        </button>
        { this.props.children }
      </li>
  }
}

export default Item;