/*
var request = require('request');
request('http://192.168.0.177/?pinD12=0', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})






var http = require('http');

var options = {
  host: 'http://192.168.0.177/?pinD12=0',
  port: ,
  //path: '/foo.html'
};

http.get(options, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
*/


var http = require('http');
var req = http.request('http://192.168.0.177/?pinD12=1', function(res) {});
req.end();