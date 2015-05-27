var gulp = require("gulp");
var jscs = require("gulp-jscs");

gulp.task( "check", function() {
    return gulp.src("./src/scripts/**/*.js")
        .pipe( jscs() );
});
