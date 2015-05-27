var gulp = require( "gulp"),
    inject = require( "gulp-inject"),
    argv = require('yargs').argv,
    cdnInjector = require("../cdnInjector"),
    es = require('event-stream');

gulp.task( "injectDependencies", function() {

    var opts = {};
    opts.env = argv.env || "local";

    return gulp.src( "./src/index.html" )
        .pipe(inject(
            es.merge(cdnInjector(opts),
            gulp.src( ["./dist/build/app*.js", "./dist/build/templates*.js", "./dist/build/app.css"], { read: false } )),
            {
                ignorePath: "/dist/build",
                addRootSlash: false
            }))
        .pipe( gulp.dest( "./dist/build"));
} );
