import React, {Component} from 'react';
import './styles.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.importData = this.importData.bind(this);
    this.state = {
      fileURL: '',
    };
  }

  importData() {
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', 'data.json');
    fetch('http://localhost:8000/import', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ fileURL: `http://localhost:8000/${body.file}` });
      });
    });
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
