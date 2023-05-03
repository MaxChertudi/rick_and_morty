import jsonData from '../src/utils/data'

const PORT = 3001;
var http = require("http");
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/rickandmorty/character') {
    /* get ID from URL */
    let arrUrl = req.url.split('/');
    let id = Number(arrUrl[arrUrl.length - 1]);
    /* find the character */
    let index = jsonData.search((item) => id===item.id);
    let data = arrUrl[index];
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(data));
  }
}).listen(PORT, 'localhost');