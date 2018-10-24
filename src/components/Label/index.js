import React, {Component} from 'react';

class Label extends Component {
  render() {
    return <div className="Label">
        { this.props.copy }
      </div>
  }
}

export default Label;