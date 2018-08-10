// server.js

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.all('*',(req,res)=>{
	res.status(200).sendFile(__dirname + '/dist/index.html')
});
app.get('/*', function(req,res) {
    
	res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
	});
app.listen(process.env.PORT || 8080);

