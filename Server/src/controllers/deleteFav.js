const { Favorite } = require('../DB_connection.js');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const favorite = await Favorite.findByPk(id);
            if (favorite) {
                favorite.destroy();
                const favorites = await Favorite.findAll();
                return res.status(200).json(favorites);
            } else
                return res.status(401).send('Favorito no encontrado');
        } else
            return res.status(401).send('Faltan datos');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports =  deleteFav ;