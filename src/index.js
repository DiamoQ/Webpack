import Post from './Post';
// import json from './assets/json.json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv'
import webpackLogo from './assets/webpack-logo.png';
import './babel.js';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', webpackLogo);

console.log('Post to String:', post.toString());
// console.log('CSV:', csv);
// console.log('JSON:', json);
// console.log('XML:', xml);