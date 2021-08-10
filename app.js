const express = require('express');
const app = express();
const port = 3000;
const session = require("express-session")
require('dotenv').config()
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use(session({
	secret: 'super top secret',
	resave: false,
	saveUninitialized: true,
  }))



const indexRouter = require('./routers/login.js')
app.use('/', indexRouter)

const homeRouter = require('./routers/index.js')
app.use('/home', homeRouter)


const addRouter = require('./routers/add.js')
app.use('/addUrl', addRouter)


const deleteRouter = require('./routers/delete.js')
 app.use('/bookmarks', deleteRouter)


const updateRouter = require('./routers/update.js')
app.use('/bookmarks', updateRouter)

const sortedRouter = require('./routers/sorted.js')
app.use('/search', sortedRouter)


const loginRouter = require('./routers/login.js')
app.use('/login', loginRouter)

const registerRouter = require('./routers/register.js')
app.use('/register', registerRouter)

const logoutRouter = require("./routers/logout.js")
app.use("/logout", logoutRouter)


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

