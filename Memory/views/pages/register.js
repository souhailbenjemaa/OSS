'use strict';

const user = require('../models/user');


exports.registerUser = (date_enregistrement,temps_enregistrement) => 

	new Promise((resolve,reject) => {

		 const newUser = new user({

			date_enregistrement: date_enregistrement,
			temps_enregistrement: temps_enregistrement			
		});

		newUser.save()

			
	.then(() => resolve({ status: 201, message: 'User Registered Sucessfully !' }))
		
});


