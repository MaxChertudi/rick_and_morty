
//getCharById = (res, id) => {
    //     axios(`https://rickandmortyapi.com/api/character/${id}`)
    //         .then((response) => response.data)
    //         .then((data) => {
        //             const returnedObj = {
            //                 id: id,
            //                 name: data.name,
            //                 gender: data.gender,
            //                 species: data.species,
            //                 origin: data.origin,                    
            //                 image: data.image,
            //                 status: data.status};
            //             res.writeHead(200, {'Content-type':'application/json'});
            //             res.end(JSON.stringify(returnedObj));
            //         })
            //         .catch((error) => {
                //             res.writeHead(500, {'Content-type':'text/plain'});
                //             res.end(error.message);
                //         })
                //     return;
                //}
                
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = (req, res) => {
    const { id } = req.params; 
console.log("id:", id);
    axios(URL+id)
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
            res.status(200).json(returnedObj);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        })
}
module.exports = getCharById