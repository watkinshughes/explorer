import React, { Component } from 'react';
import Item from '../Item';
import { children } from '../../data.json';
import './styles.css';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  list(data) {
    const children = (items) => {
      if (items) {
        return <ul className="Child">{ this.list(items) }</ul>
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
      { this.list(children) }
    </ul>
  }
}

export default List;
