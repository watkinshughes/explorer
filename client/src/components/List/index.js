import React, { Component } from 'react';
import Item from '../Item';
import './styles.css';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        children: []
      },
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

  componentDidMount() {
    fetch('http://localhost:8000/public/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  render() {
    return <ul className="List">
      { this.list(this.state.data.children) }
    </ul>
  }
}

export default List;
