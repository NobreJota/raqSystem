const express = require('express');
const router = express.Router();

// Rota principal do site
router.get('/', (req, res) => {
    res.render('site/indexHtml', { layout: false });
});

module.exports = router;
