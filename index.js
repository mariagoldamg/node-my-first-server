const http = require('http'); //importing http

const server = http.createServer(function(req,res){
if (req.url === '/recipes') {
    res.write ("RECIPES");
    res.end();
}

else if (req.url === '/cakes') {
    res.write ("CAKES");
    res.end();
}
else res.end ('PAGE NOT FOUND')
});

server.listen (3001);
console.log ("MY FIRST SERVER IS RUNNING NOW!!!")