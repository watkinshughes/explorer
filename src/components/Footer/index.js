import React, {Component} from 'react';
import {exportData} from '../../services/exportData.js'
import {importData} from '../../services/importData.js'
import './styles.css';

class Footer extends Component {

  render() {
    return <div className="Footer">
        <button className="link" onClick={ importData }>Import</button>
        <button className="button" onClick={ exportData }>Export</button>
      </div>
  }
}

export default Footer;