const { User } = require('../DB_connection.js');

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const user = await User.create({ email, password });
            return res.status(200).json(user);
        } else
            return res.status(400).send('Faltan datos');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = postUser;