var express = require('express');
var app = express();
var path = require('path');

/*
// prepare server
app.use('/api', api); // redirect API calls
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
*/
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + 'app/test_folder/landing_page.html'));
});

app.listen(3000, function() {
	console.log();
});