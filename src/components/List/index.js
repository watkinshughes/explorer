import React, {Component} from 'react';
import Item from '../Item';
import './styles.css';

class List extends Component {
  
  list(data) {
    const children = (items) => {
      if (items) {
        return <ul className="List Sublist">{ this.list(items) }</ul>
      }
    }
    
    return data.map((node, index) => {
      return <Item key={ index } name={ node.name } type={ node.type }>
        { children(node.children) }
      </Item>
    })
  }
  
  render() {
    return <ul className="List">
      { this.list(this.props.data) }
    </ul>
  }
}

export default List;