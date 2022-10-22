// http module allows us to set up a web server
const http = require('http');

// createServer method is looking for a callback, the callback function there
// is two parameters, both of them are objects, they are the request and the response

// request: representes the incoming request from the client requesting from the 
// web browser your webpage

// response: what we're sending back to that request, a response
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hi mom, welcome to my homepage');

  } else if (req.url === '/about') {
    res.end('Here is our short history');

  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
  
  // res.write('Hi mom, welcome to my homepage')
  // res.end()
});

server.listen(5000)