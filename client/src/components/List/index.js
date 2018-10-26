import React, {Component} from 'react';
import Item from '../Item';
import data from '../../data.json';
import './styles.css';

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/public/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
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
      { this.list(data.children) }
    </ul>
  }
}

export default List;
