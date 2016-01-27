var connect = require('connect');
var url = require('url');
var app = connect();

var result = function(req, res, next) {
	var qs = url.parse(req.url, true).query;
	var method = qs.method;
	var x = qs.x;
	var y = qs.y;

if (method === 'add') {
	var total = parseFloat(x) + parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " + " + y + " = " + total);

	res.end();
}

if (method === 'subtract') {
	var total = parseFloat(x) - parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " - " + y + " = " + total);

	res.end();	
}

if (method === 'multiply') {
	var total = parseFloat(x) * parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " * " + y + " = " + total);

	res.end();		
}

if (method === 'divide') {
	var total = parseFloat(x) / parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " / " + y + " = " + total);

	res.end();	
}

else {
	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write("Invalid QueryString.");

	res.end();	
}
}

app.use('/lab3', result);
app.listen(3000);
console.log ('connect app running http://localhost:300/');