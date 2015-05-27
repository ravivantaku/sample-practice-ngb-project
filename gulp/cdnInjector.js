
var gutil = require( "gulp-util" ),
    fs    = require('fs'),
    es    = require('event-stream'),
    config = require("./config");

module.exports = function(opts) {
    var appConfig;

    opts = opts || {"env" : "local"};

    appConfig = JSON.parse(fs.readFileSync("./appConfig.json", 'utf8'));

    var cdnHost = config.deployments[opts.env].cdn;

    return src(appConfig.dependencies, cdnHost);
}

function src (dependencies, cdnHost) {
    var stream = es.readArray(dependencies.map(function (pkg) {
        return createVinylFile(pkg,cdnHost);
    }));
    return stream;
}

function createVinylFile (pkg, cdnHost) {
    var packageLink,
        modulePath;

    modulePath = pkg.module_name || pkg.name.split('.')[0];

    var packageLink =  cdnHost + "/" + pkg.cdn_path + "/" + modulePath + "/" + pkg.version + "/" + pkg.name;

    return new gutil.File({
        path: packageLink
    });
}