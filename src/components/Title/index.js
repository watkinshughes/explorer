import React, {Component} from 'react';

class Title extends Component {
  render() {
    return <div className="Title">
        { this.props.copy }
      </div>
  }
}

export default Title;