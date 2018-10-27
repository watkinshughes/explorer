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
  toggleExpanded() {
    const currentState = this.state.expanded;
    this.setState({
      expanded: !currentState
    });
  };
  toggleSelected() {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    const currentState = this.state.selected;
    this.setState({
      selected: !currentState
    });
  };
  render() {
    return <li className={ `Item ${ this.state.expanded ? 'expanded': '' }` }>
        <div className={ `${this.props.type} ${this.props.private ? 'private' : ''} ${this.state.selected ? 'selected': ''}` } onClick={ this.toggleSelected }>
          <button className="icon" onClick={ this.toggleExpanded }></button>
          <button>
            { this.props.name }
          </button>
        </div>
        { this.props.children }
      </li>
  }
}

export default Item;
