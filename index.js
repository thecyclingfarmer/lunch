var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res){
  res.send('It works!');
});

app.post('/lunch', function(req, res){
  var lunchOptions = [
  	'Ölerian',
  	'Greesy spoon',
  	'Chokladfabriken',
  	'Omnipollo',
  	'Gossip',
  	'TacoBar',
    'Ai Ramen',
    'Urban deli',
    'Indien 1',
    'Indien 2',
    'Thai-kiosken',
  	'Lily\'s burger',
  	'Amida kolgrill'
  ];

  var lunchChoice = Math.floor(Math.random() * lunchOptions.length);

  var lunchText = 'Your choice for lunch is: ' + lunchOptions[lunchChoice];
  var d = new Date();
	var today = d.getDay();
	if (today === 5) {
		lunchText = 'It\'s Friyay! Beer o clock! Omnipollo it is!';
	}

  if (req.body.text && req.body.text.indexOf('--force') == 0) {
    lunchText = '';
    var forceParam = req.body.text.replace('--force', '');
    for (var i = 0; i < lunchOptions.length; i++) {
      lunchText = lunchText + '\n' + forceParam + ' ' + lunchOptions[i];
      if (forceParam === lunchOptions[i]) {
        lunchText = 'Ok! Are you sure? ⭐️' + lunchOptions[i] + '⭐️ it is!';
      }
    }
  }

  var body = {
    response_type: 'in_channel',
    text: lunchText
  };

  res.send(body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
