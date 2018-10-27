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

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

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

  componentDidMount() {
    this.fetchData('http://localhost:8000/public/data.json')
  }

  render() {
    return <ul className="List">
      { this.buildRecursiveList(this.state.data.children) }
    </ul>
  }
}

export default List;
