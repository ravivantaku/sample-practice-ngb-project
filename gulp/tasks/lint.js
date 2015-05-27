var gulp = require("gulp");
var jshint = require("gulp-jshint");
var handleErrors = require("../util/handleErrors");

gulp.task("lint", function() {
    return gulp.src("./src/**/*.js")
        .pipe(jshint( "jshint.json" ) )
        .pipe(jshint.reporter("default"))
        .pipe(jshint.reporter("fail"))
        .on( "error", handleErrors );
});