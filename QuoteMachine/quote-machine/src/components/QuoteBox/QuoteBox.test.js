import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './QuoteBox';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuoteBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});