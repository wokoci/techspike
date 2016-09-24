'use strict'
var http =require('http');
let bodyParser =require('body-parser');
http.get('http://www.google.com/index.html', (res) => {
  console.log(`Got response: ${res.statusCode}`);

  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
  //add tag and get it its details from commandline
});
