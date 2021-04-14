// local dependency - use it only in this particular project
// npm i <packagename> -> installing npm package 

// global dependency - use it in any project 
// sudo npm install -g <packagename> -> mac command 

// importance of package json - manifest file that stores all the package information along with their versions in this file
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y(everything default ) - fastest way to setup package .json

// uploading to github
// when uploading to github .... placing the node module is important in order to ignore the node modules from being pushed to github due to their large size 
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); // lodash method flattendeep

console.log(newItems);