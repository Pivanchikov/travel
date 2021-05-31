import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './components/App';
import 'element-theme-default';

const root = document.getElementById('root');
render(<App />, root);
