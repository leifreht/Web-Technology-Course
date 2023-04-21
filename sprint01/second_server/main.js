const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
    
    app.on("request", (req, res) => {
 
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/html"
        });
        let responseMessage = "<h1>This will show on the screen.</h1>";
        res.end(responseMessage); 
        console.log(req.method);
        console.log(req.url);
        console.log(req.headers);   
        const getJSONString = obj => {
            return JSON.stringify(obj, null, 2);
        };
        console.log(`Method: ${getJSONString(req.method)}`); 
    });

app.listen(port);
console.log(`The server has started and is listening on port number:  ̄ ${port}`);