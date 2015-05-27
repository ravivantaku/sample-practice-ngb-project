var gulp  = require("gulp");


gulp.task( "jboss", function() {

    gulp.src( ["./web.xml","./jboss-web.xml"] )
        .pipe( gulp.dest( "./dist/build/WEB-INF/" ) );
});
