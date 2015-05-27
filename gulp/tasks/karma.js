var gulp = require('gulp');
var karma = require('karma').server;
var path = require('path');

gulp.task('karma', function(cb){
    var karmaOptions = {
        configFile: path.resolve('karma.conf.js')
    };
    
    karma.start(karmaOptions, cb);    
});

