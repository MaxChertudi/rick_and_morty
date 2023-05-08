const router = (server) => {
    // const express = require('express');
    // const server = express.Router();
    const getCharById = require('../controllers/getCharById.js');
    const handleFavorites = require('../controllers/handleFavorites.js')
    const login = require('../controllers/login.js');

    server.get('/rickandmorty/character/:id', (req, res) => 
        {getCharById.getCharById(req, res)});
    server.get('/rickandmorty/login', (req, res) => {
        login.loginProcess(req, res)});
    server.post('/rickandmorty/fav', (req, res) => 
        {handleFavorites.postFav(req, res)});
    server.delete('/rickandmorty/fav/:id', (req, res) => 
        {handleFavorites.deleteFav(req, res)});
    
    // const expressListRoutes = require('express-list-routes');
    // expressListRoutes(server);
}

module.exports = {router};