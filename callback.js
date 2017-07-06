var fs = require('fs');

fs.readFile('/Users/carlos/Desktop/curso_node/destino.html', function(err, contenido){
	console.log(contenido);

});


console.log('Hago otra cosa mas'); 