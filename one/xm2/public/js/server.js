const http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"http://127.0.0.1:5500"
    })
    res.write("beijin sun 18~38");
    res.end();
}).listen(3100)