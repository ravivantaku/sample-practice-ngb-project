var gulp = require( "gulp" );
//var sass = require( "gulp-sass" );
var sass = require( "gulp-ruby-sass" );
var handleErrors = require( "../util/handleErrors" );
var streamify = require( "gulp-streamify" );
var rev = require( "gulp-rev" );
var rimraf = require( "gulp-rimraf" );
var util = require( "gulp-util" );
var inject = require( "gulp-inject" );
var size = require("gulp-size");
var concat = require( "gulp-concat" );


gulp.task( "styles", function() {
    
    gulp.src( "./dist/build/app*.css", { read: false } )
        .pipe( rimraf( { force: true } ) )
    .on( "error", handleErrors );

    return gulp.src( "./src/styles/*.css" )
        .pipe( concat( "app.css" ) )
        .pipe( size() )
        .pipe( gulp.dest( "./dist/build/" ) );
} );
