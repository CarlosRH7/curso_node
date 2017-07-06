var http =require("http");

http.createServer(function(request, response){
	response.writeHeader(200);
	response.write('Hola mudo');
	response.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');