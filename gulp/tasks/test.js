var gulp = require( "gulp" );
var path = require("path");
var karma = require("karma").server;
 
/**
 * Run the Karma server once with the given config file path.
 */
function runKarma(configFile, cb) {
   karma.start({
      configFile: path.resolve(configFile),
      singleRun: true
   }, cb);
}
 
// There"s a bug in Karma that prevents gulp from exiting for a minute after execution completes.
// For now just run karma start karma.conf.js from the command prompt.
gulp.task("test", function(cb) {
   return runKarma("karma.conf.js", cb);
});