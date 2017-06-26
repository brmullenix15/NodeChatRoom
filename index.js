//Import the downloaded packages

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io =  require("socket.io")(http);//how we communicate between clients


app.get("/", function(req,res){
	res.sendFile(__dirname + "/index.html");
});

//Use express to serve up static files, like the main.css file, to enhance apperance of the app.
app.use(express.static(__dirname + "/public"));

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

//Tell the server where to run on the host
http.listen(process.env.PORT || 3000,function(){
	console.log("Listening on *:3000");

});