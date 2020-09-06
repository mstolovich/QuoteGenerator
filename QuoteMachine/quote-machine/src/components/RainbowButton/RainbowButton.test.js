import React from 'react';
import ReactDOM from 'react-dom';
import RainbowButton from './RainbowButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RainbowButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});