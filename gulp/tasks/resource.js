var changed    = require("gulp-changed");
var gulp       = require("gulp");
var livereload = require("gulp-livereload");

gulp.task("resource", function() {
	var dest = "./dist/build";

	return gulp.src(["./src/**/*.json"])
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(gulp.dest(dest));
});
