var fs = require('fs');

var callback = function(err, contenido){
	console.log(contenido);
};

fs.readFile('/Users/carlos/Desktop/curso_node/destino.html', callback);
fs.readFile('/Users/carlos/Desktop/curso_node/destino.html', callback);


console.log('Hago otra cosa');