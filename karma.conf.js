// Karma configuration
// Generated on Fri May 22 2020 15:18:05 GMT-0400 (Eastern Daylight Time)

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jasmine-jquery',
            'jasmine',
            'jasmine-matchers'
        ],

        // list of files / patterns to load in the browser
        files: [
            require.resolve('angular'),
            require.resolve('angular-animate'),
            require.resolve('angular-aria'),
            require.resolve('angular-material'),
            require.resolve('angular-messages'),
            require.resolve('angular-google-analytics'),
            require.resolve('angular-route'),
            require.resolve('angular-ui-tree'),
            require.resolve('angular-mocks'),
            'dist/js/options.js',
            'tests/**/*.js',
            {
                pattern: 'tests/**/*.json',
                included: false
            }
        ],

        // list of files / patterns to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/js/options/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],
        //specReporter: { maxLogLines: 5 },

        // web server port
        port: 8080,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,
        //logLevel: config.LOG_ERROR,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // Which plugins to enable
        plugins: [
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-jasmine-jquery',
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-spec-reporter',
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
    })
}
