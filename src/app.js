import React from 'react';
import ReactDOM from 'react-dom';
import style from './common/style/main.css';
import './app.css';
// import 'font-awesome/css/font-awesome.css';
import plane from './common/img/timg.jpeg';
import WechatIMG29 from './common/img/WechatIMG29.jpeg';
// const screen = require('./common/img/screen.png');
console.log(style)

ReactDOM.render(
    <div className='ret'>
        <h1 className={style.ot}><span className={style.ac}>1231</span>React test</h1>
        {/*<h1 className="fa fa-rocket">React test</h1>*/}
        {/*<img src={plane} alt='' />*/}
        {/*<img src={WechatIMG29} alt='' />*/}
        {/*<img src={screen} alt='' />*/}
        {/*<img src={require('./common/img/screen.png')} alt='' />*/}
    </div>,
    document.getElementById('root')
);