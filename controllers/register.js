require('dotenv').config()
const { Login } = require('../models');


const Load = async (req, res) => {
	res.render('register.ejs');
}

const register = async(req,res) => {
    await Login.create({
        username: req.body.username,
        password: req.body.password,
    });
    res.redirect('/login')
}

module.exports = {Load, register}