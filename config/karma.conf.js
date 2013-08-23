module.exports = function(config){
	config.set({
		basePath: '../',
		frameworks: ['jasmine'],
		files: [
		  //JASMINE,
		  //JASMINE_ADAPTER,
		  'app/lib/angular/angular.js',
		  'app/lib/angular/angular-*.js',
		  'test/lib/angular/angular-mocks.js',
		  'app/js/**/*.js',
		  'test/unit/**/*.js'
		],
		exclude: [],
    	reporters: ['progress', 'junit'],
		autoWatch: true,
		port: 9876,
    	colors: true,
    	logLevel: config.LOG_INFO,
		browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
	    captureTimeout: 20000,
	    singleRun: false,
	    reportSlowerThan: 500,
	    preprocessors: {
	      '**/*.coffee': 'coffee'
	    },
	    plugins: [
	      'karma-jasmine',
	      'karma-chrome-launcher',
	      'karma-firefox-launcher',
	      'karma-junit-reporter'
	    ],
		junitReporter: {
		  outputFile: 'test_out/unit.xml',
		  suite: 'unit'
		}
	});
}