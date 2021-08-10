require('dotenv').config()
const { Login } = require('../models');
const bcrypt = require('bcryptjs')

const Load = async (req, res) => {
	res.render('login.ejs');
}


const login = async(req,res) => {
	const user = await Login.findOne({
		where :{ 
			username : req.body.username			
		}
	})
	if (user && bcrypt.compareSync(req.body.password, user.password) ) {
		req.session.userId = user.id 
		res.redirect('/home')
	}
	else {
	res.redirect('/')
	}
}

module.exports = {Load, login }