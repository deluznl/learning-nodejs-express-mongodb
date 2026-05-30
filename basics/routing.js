// ------------------ Routing in NodeJS -------------------

/* -------------------- Notes -----------------------------

    Routing is the receptionist who looks at where the visitor wants to go and directs
    them to the correct room.

    Core components of Route
        - The method 
            The action the client wants to perform (e.g., GET to read data, POST to submit data).
        - The Path (URL)
            The specific address being requested (e.g., /, /about, /api/users).
        - The Handler
            The function on the server that executes and sends the response back.
----------------------------------------------------------*/


const http = require('http');

const server = http.createServer((req, res) => {
    // 1. Get the URL path and the HTTP method from the request object
    const path = req.url;
    const method = req.method;

    // Console log the incoming request
    console.log(`Request method: ${method}, Request path ${path}`);


    // This will give me error
    // ERR_HTTP_HEADERS_SENT: Cannot write headers after they are sent to the client
    // An HTTP request is a one-shot deal: One Request = One Response.

    // REMOVED the global res.writeHead from here!
    // res.writeHead(200, {
    //     "contenast-type": "text/html",
    // })


    

    if(method === "GET" && path === "/"){
        res.writeHead(200, {"contenast-type": "text/html",}); // Moved it here
        res.end("Home is working");
    }else if(method == "GET" && path === "/about"){
        res.writeHead(200, {"contenast-type": "text/html",}); // Moved it here
        res.end("This is about page");
    }else if (method == "GET" && path === "/contact"){
        res.writeHead(200, {"contenast-type": "text/html",}); // Moved it here
        res.end("This is contact page");
    }else{
        // If there will be no else and someone types the path that does not exist it will go in loop.
        // Change status code
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(9000, ()=>{
    console.log("Server running!");
})