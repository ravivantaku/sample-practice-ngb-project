var gulp = require( "gulp" );
var minifyHTML = require( "gulp-minify-html" );
var templateCache = require( "gulp-angular-templatecache" );
var streamify = require( "gulp-streamify" );
var rev = require( "gulp-rev" );
var rimraf = require( "gulp-rimraf" );
var inject = require( "gulp-inject" );
var config = require("../config");


gulp.task( "templates", function() {
    
    gulp.src( "./dist/build/templates-*.js", { read: false } )
        .pipe( rimraf( { force: true } ) );

    return gulp.src( "./src/**/*.html" )
        .pipe( templateCache( {
            root: ".",
            module: config.applicationName
        } ) )
//        .pipe( streamify( rev() ) )
        .pipe( gulp.dest( "./dist/build/" ) );
} );

