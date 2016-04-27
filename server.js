 var express = require('express');
 var app = express();
 var port = process.env.PORT || 3000;

app.get('/',function(request, response){
	response.send('Hi There!')
})
 app.listen(port, function(){
 	console.log('Servers is running on ' + port);

 })

