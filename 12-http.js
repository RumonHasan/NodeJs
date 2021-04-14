const http = require('http');

// create server
// req parameter represents incoming requests 
//res is what we are sending back
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('sending back the short browser history')
    }
    // res.write('Setup of first server, welcome to the first server');
    res.end(
        `<h1>Showing some html code</h1>
        <p>We cant seem to find the page you are looking for
        <a href="/">Back home</a>`
    )// ending the response
})
server.listen(5000);