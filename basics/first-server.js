//-------------------- Learning NodeJS -----------------------//

// Import http module
// Node.js has a built-in module called http that contains all the heavy-lifting code required to transfer
// data over the network.

const http = require('http'); 


// Create the server
// The http.createServer() method tells Node.js to set up a brand new web server instance.
// The Callback Function: Inside the method, an arrow function (req, res) => {}. 
// This is a listener function. Every single time a browser or a client sends a request to your server, 
// node.js triggers this function.

//The Two Objects:
// req (Request): An object full of data about the incoming request 
// (e.g., the URL the user visited, their browser type, etc.).
// res (Response): An object you use to bundle up the data you want to send back to the user.

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html", //This is a header. It gives the browser a heads-up on what kind of data is arriving.
    })
    res.end("<h1>Hello server</h1>");
    // res.end() does two things at once. It sends the final string "Hello server" back to the client, and then it closes the connection.
    // If you forget to call res.end(), the browser will just sit there with a spinning loading wheel forever, waiting for the server to finish talking.
})


// Computer has thousands of digital "doors" called ports.
// This line tells the server to stand guard specifically at Port 9000 and listen for incoming traffic.
// The function inside .listen() runs only once, right when the server successfully starts up.
server.listen(9000, () => {
    console.log("Server started at PORT 9000");
})