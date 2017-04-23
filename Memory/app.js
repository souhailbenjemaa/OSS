const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const logger 	   = require('morgan');
const router 	   = express.Router();
const port 	   = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(logger('dev'));


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
const register = require('./pages/register');


module.exports = router => {

	

	router.post('/users', (req, res) => {

		
		const date_enregistrement =  req.body.date_enregistrement
		const temps_enregistrement =  req.body.temps_enregistrement

		
           register.registerUser(date_enregistrement)
			res.status(400).json({message: 'Ajout avec succes !'});

			
	});


app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});