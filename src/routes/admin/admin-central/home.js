const express = require('express');
const router = express.Router();

// Rota principal do site
router.get('/', (req, res) => {
    res.render('site/indexHtml', { layout: false });
});

// Pagina dedicada ao video (usada no QR code da carta / eventos)
router.get('/video', (req, res) => {
    res.render('site/video', { layout: false });
});

module.exports = router;
