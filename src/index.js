import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Orbitron', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
