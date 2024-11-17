const http = require('http');
const APP_SECRET = "5ecret5nake";

http.createServer((req, res)=>{
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end(APP_SECRET);
}).listen(3000);