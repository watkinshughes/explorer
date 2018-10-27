import React, {Component} from 'react';
import Item from '../Item';
import data from '../../data.json';
import './styles.css';

class List extends Component {

  buildRecursiveList(data) {
    const children = (items) => {
      if (items) {
        return <ul className="Child">{ this.buildRecursiveList(items) }</ul>
      }
    }
    return data.map((node, index) => {
      return <Item key={ index } name={ node.name } type={ node.type } private={ node.private }>
        { children(node.children) }
      </Item>
    })
  }

  render() {
    return <ul className="List">
      { this.buildRecursiveList(data.children) }
    </ul>
  }
}

export default List;
