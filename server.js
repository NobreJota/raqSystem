const express = require('express');
const app = express();
const session = require('express-session');
const handlebars = require('express-handlebars');handlebars;

// CAMINHOS
const home = require("./src/routes/admin/admin-central/home");

// Pendente
const cors = require('cors');
const flash = require('connect-flash');
const {eAdmin}=require("./helpers/eAdmin");
const morgan = require('morgan');
const bodyParser = require("body-parser");

// Passaport
const passport = require('passport');
require('./config/auth')(passport);
const { use } = require('passport');
const path = require("path");
require('path');

// Mongoose
const mongoose = require('mongoose');

// Morgan
require('./')
app.use(morgan("dev"));

// Cors bodyParser
app.use(express.urlencoded({extended: true}));
app.use(cors(),express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multer
require('./src/config/multer');

// Database
require('./');
require('./database/index');

//Sessão 
app.use(session({
    secret:'vitor/19/ia!',
    resave:true,
    saveUninitialized:true,
}))

//flash
app.use(flash())

//Middleware - 
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash("success_msg") 
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    res.locals.user = req.user || null
    next()
});

// Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout:'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
}))

app.set('view engine','handlebars');
app.use(express.static("imagens"));
// Configurando a pasta "public" como acessível
// app.use(express.static('public'));

app.use('/public', express.static('public', {
    etag: false, // Desativa ETag
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // Desativa o cache
    }
}));

// Arquivis estáticos
app.use(express.static(path.join(__dirname,"public")))

const PORT = process.env.PORT || 4000;

//Passport
app.use(passport.initialize());
app.use(passport.session());

// APP
app.use('/',home);

// ROTAS
app.use('/',home);

// PORT;
app.listen(PORT,async()=>{
    console.log('_____________________________________');
    console.log(" Servidor ligado!!!" + PORT);
    console.log('_____________________________________');
    console.log('')
});