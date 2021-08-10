require('dotenv').config()
const { Login } = require('../models');
const bcrypt = require('bcryptjs')

const Load = async (req, res) => {
	res.render('register.ejs');
}

const register = async(req,res) => {
    console.log("before create Login method")
    await Login.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password),
    });

    console.log("just before the login redirect.")
    res.redirect('/login')
}

module.exports = {Load, register}