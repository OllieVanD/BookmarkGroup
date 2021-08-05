require('dotenv').config()
const { models} = require('../models');


const Load = async (req, res) => {
	res.render('register.ejs');
}

const register = async(req,res) => {
    await models.login.create({
        username: req.body.username,
        password: req.body.password,
    });
    res.redirect('/login')
}

module.exports = {Load, register}