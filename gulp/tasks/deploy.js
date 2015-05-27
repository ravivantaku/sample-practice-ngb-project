var gulp  = require("gulp");
var touch = require("touch");
var config = require("../config");
var fs = require("fs-extra");
var argv = require('yargs').argv;

var warFile = config.applicationName + ".war";
var doDeployFile = config.applicationName + ".war.dodeploy";

function copyFiles(env){
    var confDestination = config.deployments[env].destination;
    
    var allDests = Array.isArray(confDestination) ? confDestination : [confDestination];
    allDests.forEach(function(dest){
        fs.copySync("dist/" + warFile, dest + "/" + warFile);       
    });
    
}

function touchWar(env){
    touch("dist/" + config.applicationName + ".war.dodeploy");
    var confDestination = config.deployments[env].destination;
    
    var allDests = Array.isArray(confDestination) ? confDestination : [confDestination];
    allDests.forEach(function(dest){
        fs.copySync("dist/" + doDeployFile, dest + "/" + doDeployFile);    
    });
}

function getEnvironment(){
    if(argv.env){
        return argv.env;
    }
    
    console.log("=============================================");
    console.log("* ENV argument not supplied");
    console.log("* Defaulting to 'local'");
    console.log("*");
    console.log("* Please provide this value by:");
    console.log("*");
    console.log("* gulp deploy --env=test");
    console.log("=============================================");
    
    return "local";
}

function doDeployment(env, cb){
    copyFiles(env);
    touchWar(env);
    cb();
}

gulp.task("deploy", ["war"], function(cb){
    doDeployment(getEnvironment(), cb);
});
