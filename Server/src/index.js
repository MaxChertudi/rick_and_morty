const jsonData = require('../src/utils/data.js');

const PORT = 3001;
var http = require("http");
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    
  /* Remove id from URL */
  let arrUrl = req.url.split('/');
  arrUrl.pop();
  let url = arrUrl.join('/')

  if (url === '/rickandmorty/character') {
    /* get ID from URL */
    let arrUrl = req.url.split('/');
    let id = Number(arrUrl[arrUrl.length - 1]);
    
    /* find the character */
    let data = jsonData.find((item) => id===item.id);
  
    console.log( "data;",data);
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(data));
  }
}).listen(PORT, 'localhost');