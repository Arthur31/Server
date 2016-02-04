var http = require('http');
var url = require('url');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var index1 = fs.readFileSync('index1.html');
var querystring = require('querystring');


var notifier = require('node-notifier');
var path = require('path');
var schedule = require('node-schedule');

var j1 = false ;
//var s1 = true;







var ruleSoir = new schedule.RecurrenceRule();
ruleSoir.second = 00;

var rule = new schedule.RecurrenceRule();
rule.second = 30;


var server = http.createServer(function(req, res) {
    var params= querystring.parse(url.parse(req.url).query);
        res.writeHead(200, {'Content-Type': 'text/html'});
        if('prenom' in params) {
        	if(params['prenom'] == 'Arthur' && params['pass'] == 'Arthur'){
        		res.write('Bonjour ' + params['prenom'] + ', Comment vas tu ?');
        		console.log('Admin');
                
        	}
        	else if(params['prenom'] == 'Arthur' && params['pass'] != 'Arthur'){
        		res.end('<h1>IMPOSTEUR</h1>'+'<a href="/">Retour</a>');
        		console.log("tentative d'intrusion par Admin");
        	}
        	else if (params['prenom'] == 'Clement'){
        		res.write('Bonjour ' + params['prenom'] + ', Comment vas tu ?');
                console.log('Admin-2 ');
        	}
            else if (params['prenom'] == 'carre'){
                res.end(index1);
                console.log("Demande d'affichagede carre");
            }
        	else if (params['prenom'] == ''){
        		res.end(index);
                console.log('Reconnection car echec ');
        	}
            else if (params['prenom'] == 'ON'){
        		j1 = true ;
                console.log('ON');
        	}
            else if (params['prenom'] == 'OFF'){
        		j1 = false ; 
                console.log('OFF');
        	}
       		else {
       			res.write('Bonjour ' + params['prenom']);
       			console.log('Invite');
        	}
            
        }
        else {
        	res.end(index);
        	console.log('Nouvelle connection');
        }
        res.end();
});
server.listen(8080);
console.log('server pret');

var j = schedule.scheduleJob(rule, function () {
    if(j1 == true ){
  //console.log('The answer to life, the universe, and everything!');
  
    var http = require('http');
    var req = http.request('http://192.168.0.177/?pinD12=1', function(res) {});
    req.end();
    
    notifier.notify({
        title: "Il est 30",
        message: "J'allume le burreau",
        //icon: path.join(__dirname, 'coulson.jpg'), // absolute path (not balloons) 
        //sound: true, // Only Notification Center or Windows Toasters 
        wait: true // wait with callback until user action is taken on notification 
    }, function (err, response) {
        console.log("notification envoyé")
        // response is response from notification 
    });
        notifier.on('click', function (notifierObject, options) {
            console.log("notification fermée")
            var http = require('http');
            var req = http.request('http://192.168.0.177/?pinD12=0', function(res) {});
            req.end();
            // Happens if `wait: true` and user clicks notification 
        });
        notifier.on('timeout', function (notifierObject, options) {
            console.log("Pas de reponse..")
        // Happens if `wait: true` and notification closes 
    });
    };
});

var soir = schedule.scheduleJob(ruleSoir, function () {
    if (j1== true ){
  //console.log('The answer to life, the universe, and everything!');
  
    var http = require('http');
    var req = http.request('http://192.168.0.177/?pinD12=0', function(res,error) {
    }).on("error", function(e){
        console.log("Got error: " + e.message);
        req.end;
    });
    req.end();
    console.log("j'éteins")
    };
});





