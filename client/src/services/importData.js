 export default function importData() {
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