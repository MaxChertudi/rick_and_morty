    const express = require('express');
    const router = express.Router();
    const getCharById  = require('../controllers/getCharById.js');
    const postFav  = require('../controllers/postFav.js');
    const deleteFav  = require('../controllers/deleteFav.js');
    const login  = require('../controllers/login.js');
    const postUser  = require('../controllers/postUser.js');

    router.get('/character/:id', getCharById)
    router.post('/login', login);
    router.post('/fav', postFav);
    router.delete('/fav/:id', deleteFav);
    router.post('/user', postUser);

module.exports = router;