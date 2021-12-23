import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DataLayer} from './DataLayer'
import reducer, { initialstate } from './reducer';
import "./styles/main.css"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialstate={initialstate} reducer={reducer}>
    <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);