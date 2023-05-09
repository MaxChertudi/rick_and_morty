const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const p_id = req.params.id; 
        const result =  await axios(URL+p_id);
        const {id, name, gender, species, origin, image, status} = result.data;
        res.status(200).json({id, name, gender, species, origin, image, status});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
} 
module.exports = getCharById 