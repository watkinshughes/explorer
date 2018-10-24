import React, {Component} from 'react';

class Item extends Component {
  render() {
    return <li>
        <button>
          { this.props.name } { this.props.type }
        </button>
        { this.props.children }
    </li>
  }
}

export default Item;