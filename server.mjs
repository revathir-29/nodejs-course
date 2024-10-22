// console.log("Node js");
// console.log(global);
//import
// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// const path = require('path');
// console.log(path.dirname(__dirname));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename)); // return as a object

// //default values
// console.log(__dirname);
// console.log(__filename);


//import math from './math.js'; 
const math = require('./math')
console.log(math.add(3,3));
console.log(math.sub(3,3));
console.log(math.mul(3,3));
console.log(math.div(3,3));

//destructuring
//import {add, sub, mul, div} from './math.js';
const {add, sub, mul, div} = require('./math')
console.log(add(3,3));
console.log(sub(3,3));
console.log(mul(3,3));
console.log(div(3,3));

