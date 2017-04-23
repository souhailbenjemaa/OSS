'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({ 

	date_enregistrement: String,
	temps_enregistrement:String
	
	
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://souhailbenjemaa:Soulef1968@ds115131.mlab.com:15131/weatherdata');

module.exports = mongoose.model('user', userSchema);        