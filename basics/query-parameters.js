// -------------------Query Parameters --------------------

// URL like this https://google.com/search?q=nodejs,  That ?q=nodejs is called a query string.

/*

    A way for the browser to pass extra information to your server right inside the URL path.
    This is how you implement search bars, sorting, and filtering on your website.

*/

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;
    const queryData = parsedURL.query; // This is an object holding variables

    console.log(queryData.term);

    if(path === "/search"){
        // If user visits /search?term=javascript, queryData.term will be 'javascript'
        const searchTerm = queryData.term || "nothing";
        res.writeHead(200, {"content-type":"text/html"});
        res.end(`<h1>You Searched for ${searchTerm}</h1>`)
    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end("<h1>Page not found!</h1>")
    }

})

server.listen(9000, () => {console.log("Server Running!")});