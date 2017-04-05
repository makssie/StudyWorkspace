var html = require("http");

html.createServer(function(req, res){
    res.writeHead(200, {"Content-type":"text/plain"});
    res.write("Resposta HTTP!");
    res.end();
}).listen(3000);