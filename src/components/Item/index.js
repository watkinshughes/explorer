import React, {Component} from 'react';


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
    return <li className={this.state.active ? 'active': null} 
              onClick={this.toggleClass}>
        <button className={this.props.type}>
          <span>{ this.props.name }</span>
        </button>
        { this.props.children }
    </li>
  }
}

export default Item;