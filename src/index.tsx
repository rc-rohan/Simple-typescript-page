import React from 'react';
import ReactDOM from 'react-dom';
import '@evive/ui-kit/dist/index.css';
import './index.scss';
import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
);

