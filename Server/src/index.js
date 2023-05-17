
const PORT = 3001;
const express = require('express');
const morgan = require('morgan');
const server = express();
const cors = require('cors');
const router = require('./routes/app.js');
const { conn } = require('./DB_connection');

server.use(cors());

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
      );
   res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
         );
         next();
});
      
server.use(express.json());
server.use(morgan('dev'));
server.use('/rickandmorty', router);

server.listen(PORT, async () => { 
   await conn.sync({force: true});
   console.log(`Server is running on port ${PORT}`); 
});
