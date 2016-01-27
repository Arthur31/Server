
var http = require('http');
var url = require('url');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var index1 = fs.readFileSync('index1.html');
var querystring = require('querystring');


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



