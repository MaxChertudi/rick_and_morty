const axios = require('axios');

getCharById = (res, id) => {
    
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.data)
        .then((data) => {
            const returnedObj = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,                    
                image: data.image,
                status: data.status};
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify(returnedObj));
        })
        .catch((error) => {
            res.writeHead(500, {'Content-type':'text/plain'});
            res.end(error.message);
        })
    return;
}
module.exports = {getCharById}