import React from 'react';
import ReactDOM from 'react-dom';
import CloseButton from '../components/CloseButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CloseButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
