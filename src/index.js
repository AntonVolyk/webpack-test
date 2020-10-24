import Post from './Post';
import json from './assets/data.json';
import webpackLogo from './assets/webpack_logo.png';
import './styles/styles.css';

const post = new Post('Webpack Post Title', webpackLogo);

console.log(`Post to string: ${post}`);

console.log('JSON:', json);
