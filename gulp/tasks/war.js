var gulp = require('gulp');
var zip = require('gulp-zip');
var config = require('../config');

gulp.task('war', ['build'], function(){
    return gulp.src('dist/build/**/*.*')
            .pipe(zip(config.applicationName + '.war'))
            .pipe(gulp.dest('dist'));
});

