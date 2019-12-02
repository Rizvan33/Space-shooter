const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// permet de récupérer l'objet "req.body" des requêtes post
app.use(express.urlencoded({extended: true})); 

app.engine('hbs', hbs({
	extname: 'hbs',
	defaultLayout: 'projet2',
	layoutsDir: __dirname + '/views/',
}));

app.set('view engine', 'hbs');

/*
	Sous routeur (le fichier appelé par require doit utiliser express.Router()
	De plus, toutes les routes commenceront par "animals"
*/
//app.use('/animals', require('./server/animalsRequests'));



app.get('/regles', function(req, res) {
	let data = {
		
	};
	res.render('regles.hbs');
});

app.get('/signin', function(req, res) {
	let data = {
		
	};
	res.render('signin.hbs',{game:false});
});

app.get('/conditions', function(req, res) {











	
	let data = {
		
	};
	res.render('conditions.hbs');
});

app.get('/contact', function(req, res) {
	let data = {
		
	};
	res.render('contact.hbs');
});

app.get('/manuel', function(req, res) {
	let data = {
		
	};
	res.render('manuel.hbs');
});

app.get('/Fomulaire', function(req, res) {
	let data = {
		
	};
	res.render('Formulaire.hbs');
});


app.get('/*', function(req, res) {
	let data = {
		game: true
	};
	res.render('projet.hbs', data);
});

app.listen(port);