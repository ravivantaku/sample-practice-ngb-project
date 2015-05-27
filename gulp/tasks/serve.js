var connect = require("connect");
var gulp    = require("gulp");
var http    = require("http");
var config  = require("../config");
var runSequence = require('run-sequence');

gulp.task("serve", function( callback ) {
    runSequence( "build", "watch", callback );
    
	var app = connect()
		.use(connect.logger("dev"))
		.use(connect.static("./dist/build"));

	http.createServer(app).listen(config.port);
});
