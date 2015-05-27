module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular/1.2.28/angular.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular-animate/1.2.28/angular-animate.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular-base64/2.0.2/angular-base64.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular-resource/1.2.28/angular-resource.min.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular-bootstrap/0.12.0/ui-bootstrap-tpls.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular-ui-router/0.2.11/angular-ui-router.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/jquery/2.1.3/jquery-2.1.3.min.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/ng-grid/2.0.13/ng-grid.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/bootstrap/3.3.2/bootstrap.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/ng-grid/2.0.13/plugins/ng-grid-flexible-height.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/ng-grid/2.0.13/plugins/ng-grid-draggablerow.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/lodash/2.4.1/lodash.js',
//            'http://dev.internal.travelhq.com/cdn/js/ng/EnvironmentModule/1.0.0/EnvironmentModule.js',
//            'http://dev.internal.travelhq.com/cdn/js/ng/AuthenticationModule/1.0.0/AuthenticationModule.js',
//            'http://dev.internal.travelhq.com/cdn/js/ng/LogModule/1.0.0/LogModule.js',
//            'http://dev.internal.travelhq.com/cdn/js/ng/ReferenceDataModule/1.0.0/ReferenceDataModule.js',
//            'http://dev.internal.travelhq.com/cdn/js/ng/UserPreferencesModule/2.0.0/UserPreferencesModule.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/sinon/1.10.2/sinon.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/jasmine-sinon/0.4.0/jasmine-sinon.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular-mocks/1.2.25/angular-mocks.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/ui-grid/3.0.0-rc.21/ui-grid.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/d3/3.5.5/d3.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/angular-charts/1.0.0/angular-charts.js',
//            'http://dev.internal.travelhq.com/cdn/3rdParty/moment/2.9.0/moment.js',
            'src/app.js',
            'src/**/*.js',
            "src/**/*.html"
        ],
        exclude: [],
        port: 9998,
        colors: true,
        reporters: ['progress', 'coverage', 'junit'],
        preprocessors: {
            "src/**/*.html": ["ng-html2js"],
            "src/**/!(*.test).js": ['coverage']
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: "src/"
        },
        coverageReporter: {
            dir: 'dist/coverage/',
            reporters: [
                {type: 'html', subdir: 'html'},
                {type: 'cobertura', subdir: 'cobertura', file: 'coverage.xml'}
            ]
        },
        junitReporter: {
            outputFile: 'dist/test-reports/test-results.xml',
            suite: ''
        },
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};