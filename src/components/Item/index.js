import React, {Component} from 'react';
import './styles.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
    
    this.state = {
        expanded: false,
        selected: false
    };
  }

  toggleExpanded(event) {
    const currentState = this.state.expanded;
    this.setState({
      expanded: !currentState
    });
  };

  toggleSelected(event) {
    const currentState = this.state.selected;
    this.setState({
      selected: !currentState
    });
  };

  render() {
    return <li className={ ` Item ${ this.state.expanded ? 'expanded': '' }`}>
        <div className={ ` ${this.props.type} ${this.props.private ? 'private' : ''} ${this.state.selected ? 'selected': ''} `}>
          <span className="icon" onClick={ this.toggleExpanded }></span>
          <button onClick={ this.toggleSelected }>
            { this.props.name }
          </button>
        </div>
        { this.props.children }
      </li>
  }
}

export default Item;