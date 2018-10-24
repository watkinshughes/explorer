import React, {Component} from 'react';
import Item from '../Item';
import data from '../../data.json';
import './styles.css';


class List extends Component {

  list(data) {
    const children = (items) => {
      if (items) {
        return <ul className="List Child">{ this.list(items) }</ul>
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
      { this.list(data.children) }
    </ul>
  }
}

export default List;