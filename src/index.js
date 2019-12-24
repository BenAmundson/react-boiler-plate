// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
  return <h1>Hello, world.</h1>;
}

// Render root element into DOM
ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
