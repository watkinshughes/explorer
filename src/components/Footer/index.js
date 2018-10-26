import React, {Component} from 'react';
import './styles.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.import = this.import.bind(this);
    this.export = this.export.bind(this);
  }

  import(event) {
    alert('Import');
  };

  export(event) {
    alert('Export');
  };

  render() {
    return <div className="Footer">
        <button className="link" onClick={ this.import }>Import</button>
        <button className="button" onClick={ this.export }>Export</button>
      </div>
  }
}

export default Footer;