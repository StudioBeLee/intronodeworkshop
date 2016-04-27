 var express = require('express');
 var app = express();
 var exphbs = require('express-handlebars');
 var port = process.env.PORT || 3000;


 // middleware 

app.set('views', 'views');

app.engine('hbs', exphbs({
	extname:'hbs',
	defaultLayout: 'main',
	layoutsDir:'./views/layouts'
}));



app.set('view engine','hbs');

app.use(express.static('public'));

//routes


app.get('/',function(request, response){
	response.render('home');
});

app.get('/projects', function(request, response){
 response.render('projects');
});

//server 

 app.listen(port, function(){
 	console.log('Servers is running on ' + port);

 })

