var gulp = require( "gulp" );
var inject = require( "gulp-inject" );
var handleErrors = require( "../util/handleErrors" );


gulp.task( "inject", function() {

    return gulp.src( "./src/index.html" )
        .pipe(
            inject(
                gulp.src( ["./dist/build/app*.js", "./dist/build/templates*.js", "./dist/build/app.css"], { read: false } ),
                { 
                    ignorePath: "/dist/build",
                    addRootSlash: false
                }
            ) )
        .pipe( gulp.dest( "./dist/build" ) );
} );
