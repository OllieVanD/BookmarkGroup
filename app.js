const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const { models, sequelize } = require('./models');
// const Bookmarks = require('./models/bookmarks');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));



app.get('/', async (req,res) => {
    
    const Bookmarks = await models.bookmarks.findAll({})

    res.render('index.ejs', {
        bookmarks: Bookmarks
    })
})

app.post('/addUrl', async (req,res) => {

    await models.bookmarks.create({url : req.body.bookmarkUrl});

    res.redirect('/')
})


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

