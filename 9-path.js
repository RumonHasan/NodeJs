// path module
const path = require('path');

console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'test.txt'); // file path enables us to display directory name 
// filepath is to determined the normalized path of the file route... 
console.log(filePath);

const base = path.basename(filePath); // the final file in the path.. in this case it is test.txt
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt');
// absolute path to the test txt.... 
console.log(absolute);