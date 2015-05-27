var changed    = require("gulp-changed");
var gulp       = require("gulp");
var livereload = require("gulp-livereload");

gulp.task("images", function() {
	var dest = "./dist/build";

	return gulp.src(["./src/**/*.png", "./src/**/*.gif", "./src/favicon.ico"])
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(gulp.dest(dest));
});
