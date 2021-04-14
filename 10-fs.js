// fs module asynchronous mode 
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');// utf8 encoding 
const second = readFileSync('./content/second.txt','utf8');// utf8 encoding 

// if the file is not there then node will create a result txtfile and input the template string
// or if the the file is there then it will be overwritten with the new content 
writeFileSync('./content/result-sync.txt', 
`here is the result: ${first}, ${second}`, {flag: 'a'});