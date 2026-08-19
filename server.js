const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Rotas
const home = require('./src/routes/admin/admin-central/home');

// Log de requisições
app.use(morgan('dev'));

// CORS + body parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars (view engine)
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Arquivos estáticos (imagens, vídeos, css, etc.)
app.use('/public', express.static('public', {
    etag: false,
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('imagens'));

const PORT = process.env.PORT || 4050;

// Rota principal do site
app.use('/', home);

app.listen(PORT, () => {
    console.log('_____________________________________');
    console.log(' Servidor ligado!!!' + PORT);
    console.log('_____________________________________');
    console.log('');
});
