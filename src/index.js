import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import TestCComponent from './components/test-component/test-component';


ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<TestCComponent/>, document.getElementById('test-root'));
