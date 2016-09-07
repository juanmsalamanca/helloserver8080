/**
 * Created by juan on 06/09/2016.
 */
var http = require('http');
var server = http.createServer();
console.log("running");
function control(petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola, Mundo!');
    resp.end();

}
server.on('request', control);
server.listen(8080, "54.213.81.66");