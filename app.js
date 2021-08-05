const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const { models} = require('./models');
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
// app.use(express.static('public'));

app.delete('/bookmarks/:id', async (req,res) => {
    console.log(`id params : ${req.params.id}`)
    await models.bookmarks.destroy({ where:  {id : req.params.id}
    })
    res.redirect('/')
})

app.put('/bookmarks/:id', async (req,res) => {

    await models.bookmarks.update({url : req.body.bookmarkUrl},{
        where : {
            id : req.params.id
        }
     });
     res.redirect('/')

})

app.get('/update/:id', (req,res) => {
    res.render("update.ejs", {
        id : req.params.id
    })
})

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

