import React, {Component} from 'react';


class Item extends Component {
  constructor(props) {
    super(props);
    
    this.toggleClass= this.toggleClass.bind(this);
    
    this.state = {
        active: false,
    };
  }
  
  toggleClass() {
      const currentState = this.state.active;
      this.setState({ 
        active: !currentState 
      });
  };

  render() {
    return <li className={this.state.active ? 'active': null} 
              onClick={this.toggleClass}>
        <button>
          { this.props.name } { this.props.type }
        </button>
        { this.props.children }
    </li>
  }
}

export default Item;