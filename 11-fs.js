// synchronous method
const {readFile, writeFile} = require('fs');
// callback is important in order to use asynchronous functions in order to prevent line by line interpretation
console.log('start computing task ')
// below is an example of nested callbacks in order display data asynchronously 
readFile('./content/first.txt', 'utf8', (err, result)=>{
    // err and result are required in the synchronous function to make a callback 
    if(err){
        console.log('unable to read the file ')
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{ // takes in two arguments err and result as a callback to spit out the result
        if(err){
            console.log('unable to read');
            return
        }
        const second= result;

        writeFile('./content/result-async.txt',
            `here is the final result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log('report the error bitch');
                    return
                }
                console.log(result);
            }
        )
    })
    console.log('task callback completion')
})

console.log('task handed in asynchronous approach');
