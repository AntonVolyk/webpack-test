import Post from '@models/Post';
import json from './assets/data';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import webpackLogo from './assets/webpack_logo';
import './styles/styles.css';
import * as $ from 'jquery';

const post = new Post('Webpack Post Title', webpackLogo);

$('pre').html(post.toString());

console.log(`Post to string: ${post}`);
console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
