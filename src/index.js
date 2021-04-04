// /** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const globalStyles = css`
  body {
    font: 1.5rem/2.5rem 'Open Sans', 'Lucida Grande', 'Lucida Sans Unicode',
      Helvetica, Arial, Verdana, sans-serif;
    width: 100vw;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
