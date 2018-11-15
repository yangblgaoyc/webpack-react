import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css';
import './app.css';
import plane from './common/img/timg.jpeg';

ReactDOM.render(
    <div className='ret'>
        <h1>React test</h1>
        <img src={plane} alt='' />
    </div>,
    document.getElementById('root')
);