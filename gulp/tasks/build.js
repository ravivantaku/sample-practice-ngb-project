var gulp = require("gulp");
var runSequence = require('run-sequence');

gulp.task("build", function(callback) {
    runSequence( "clean", "scripts", "templates", "styles", "resource",  "images", "injectDependencies", "jboss", 
  "karma",
    callback );
});