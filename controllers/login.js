require('dotenv').config()
const { Login } = require('../models');


const Load = async (req, res) => {
	res.render('login.ejs',);
}


const login = async(req,res) => {

    
}

module.exports = {Load, login }