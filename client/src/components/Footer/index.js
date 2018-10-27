import React, {Component} from 'react';
import importData from '../../services/importData';
import './styles.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.importData = importData.bind(this);
    this.state = {
      fileURL: '',
    };
  }
  render() {
    return <div className="Footer">
        <form className="import" onSubmit={ this.importData }>
          <input ref={ (ref) => { this.uploadInput = ref; } } type="file" />
          <button className="link" onClick={ this.importData }>Import</button>
        </form>
        <form action="http://localhost:8000/export">
          <button className="button">Export</button>
        </form>
      </div>
  }
}

export default Footer;
