const { Favorite } = require('../DB_connection.js');

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender, userEmail } = req.body;
        if (id && name && origin && status && image && species && gender) {
            const favorite = await Favorite.create({ id, name, origin, status, image, species, gender });
            const favorites = await Favorite.findAll();
//            await favorite.addUser(1)
            return res.status(200).json(favorites);
        } else
            return res.status(401).send('Faltan datos');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = postFav;