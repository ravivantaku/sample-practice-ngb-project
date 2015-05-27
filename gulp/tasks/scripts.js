var gulp = require( "gulp" );
var handleErrors = require( "../util/handleErrors" );
var rev = require( "gulp-rev" );
var rimraf = require( "gulp-rimraf" );
var fileSort = require( "gulp-angular-filesort" );
var concat = require( "gulp-concat" );
var uglify = require( "gulp-uglifyjs" );
var size = require( "gulp-size" );
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require("../util/handleErrors");

gulp.task( "scripts", 
["lint"],
function() {

    gulp.src( "./dist/app*.js", { read: false } )
        .pipe( rimraf( { force: true } ) )
    .on( "error", handleErrors );

    //Use UglifyJS to beautify our sorted and concatenated code.
    //Run that file through ngMin to protect the AngularJS dependency injection.
    //Minify the output and generate a source map.
    return gulp.src( ["./src/app.js","./src/app-config.js", "./src/**/*.js", "!./src/**/*test.js"] )
        .pipe( concat( "app.js" ) )
        .pipe( uglify(
            {
                mangle: false,
                compress: {
                    sequences: false,
                    properties: false,
                    conditionals: false,
                    comparisons: false,
                    evaluate: false,
                    booleans: false,
                    loops: false,
                    hoist_funs: false,
                    if_return: false,
                    join_vars: false,
                    cascade: false,
                    side_effects: false
                },
                output: {
                    beautify: true,
                    semicolons: false
                }
            } )
            )
        .pipe( size() )
        .pipe( gulp.dest( "./dist/build/" ) )
        .on( "error", handleErrors );
} );