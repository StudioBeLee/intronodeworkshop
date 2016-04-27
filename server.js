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
	var favoriteSong = ['HomeSweet', ' RedRose', ' CatCradle'];
	var favoriteLinks =[
	{text: 'Instagram', url: 'http://instagram.com'},
	{text: 'Facebook', url: 'http://facebook.com'},
	{text: 'Gmail', url: 'http://gmail.com'},
	];

	response.render('home', {
		title:"home page",
		favorites: favoriteSong,
		links: favoriteLinks
	});



});

app.get('/projects', function(request, response){
 response.render('projects');
});

//server 

 app.listen(port, function(){
 	console.log('Servers is running on ' + port);

 })

