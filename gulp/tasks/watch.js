var gulp       = require("gulp");
var livereload = require("gulp-livereload");
var runSequence = require('run-sequence');

gulp.task("watch", function(){
    gulp.watch("src/**/*.js", function() { 
        runSequence( "scripts", "inject", "injectDependencies");
    } );
    
    gulp.watch("src/**/*.html", function() { 
        runSequence( "templates", "inject", "injectDependencies" );
    } );
    
    gulp.watch("src/**/*.css", function() { 
        runSequence( "styles", "inject", "injectDependencies" );
    } );
    
    gulp.watch("src/**/*.png", ["images"]);
    
    gulp.watch("src/index.html", ["inject", "injectDependencies"]);
    
    var server = livereload();
    gulp.watch( ["dist/build/*.html", "dist/build/*.js", "dist/build/*.css"] ).on( "change", function() {
        server.changed();
    });
});
