//modules allow us to segregate code in separate component like structures. 
// modules refer to encapsulated code which allows one to access the code atleast the minimum amount 
//note: every file by default is a module.... 
const names = require('./4-names');
// destructuring names 
const {john, rumon} = names;
const sayFunction = require('./5-utils');

const data = require('./6-alternative')
console.log(data);

require('./7-mindgrenade'); // code will still execute even if u dont sign it to a variable

sayFunction('susan');
sayFunction(john);
sayFunction(rumon);