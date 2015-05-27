var gulp = require( "gulp" );
var del = require("del");
var handleErrors = require("../util/handleErrors");

gulp.task( "clean", function(cb) {
    del(['dist'], cb);
} );
