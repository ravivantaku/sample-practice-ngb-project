var path = require("path");
var fs = require('fs');

var pkgJson = JSON.parse(
    fs.readFileSync(
        './package.json',
        {encoding: 'utf8'}
    ));

module.exports = {
    port: "9000",
    root: path.resolve("./"),
    applicationName: pkgJson.name,
    applicationVersion: pkgJson.version,
//    deployments: {
//        local: {
//            destination: "C:\\Apps\\JBoss-EAP-6.2\\standalone\\deployments\\",
//            cdn : "///dev.internal.travelhq.com"
//        },
//        dev: {
//            destination: "/fenlxmtd03/WebApps/",
//            cdn : "///dev.internal.travelhq.com"
//        },
//        test: {
//            destination: [
//                "/fenlxmtt05/WebApps/",
//                "/fenlxmtt06/WebApps/"
//            ],
//            cdn : "///test.internal.travelhq.com"
//        },
//        prod: {
//            destination: [
//                "/fenlxmtp16/WebApps/",
//                "/fenlxmtp17/WebApps/"
//            ],
//            cdn : "///internal.travelhq.com"
//        }
//    }
};
