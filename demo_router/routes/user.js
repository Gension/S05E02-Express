const express = require('express');

const router = express.Router();  // me récupère que la partie routeur d'express

router.get('/user', (req, res) => {
    res.send(`All users`)
});

router.get('/user/:id', (req, res) => {
    res.send(`User with id ${req.params.id}`)
});

module.exports = router;