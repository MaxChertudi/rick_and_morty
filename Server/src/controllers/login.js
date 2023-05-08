const loginProcess = (req, res) => {
    const arrUsers = require('../utils/users.js');

    if (arrUsers.find(user => user.email===req.query.email 
        && user.password===req.query.password )
) 
        //user exists
        res.status(200).json({access: true});
    else
        res.status(200).json({access: false});   
}

module.exports = {loginProcess};