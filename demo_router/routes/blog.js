const express = require('express');

const router = express.Router();  // me récupère que la partie routeur d'express

router.get('/blog', (req, res) => {
    res.send('All blog articles');
});

router.get('/blog/:id', (req, res) => { 
    res.send(`Blog article with id ${req.params.id}`);
});

module.exports = router;