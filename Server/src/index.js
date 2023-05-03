// const jsonData = require('../src/utils/data.js');
// const axios = require('axios');
const fnGet = require('../src/controllers/getCharById.js');

const PORT = 3001;
var http = require("http");
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    
  if (req.url.includes('/rickandmorty/character')) { 
    
    // /* get ID from URL */
    let arrUrl = req.url.split('/');
    let id = Number(arrUrl[arrUrl.length - 1]);
    
    fnGet.getCharById(res, id);
    // /* find the character */
    // let data = jsonData.find((item) => id===item.id);
  
    // res.writeHead(200, {'Content-type':'application/json'});
    // res.end(JSON.stringify(data));
  }
}).listen(PORT, 'localhost');
