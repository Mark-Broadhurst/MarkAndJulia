// Testacular configuration
// Generated on Tue Dec 11 2012 11:30:12 GMT+0000 (GMT Standard Time)


// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [
	JASMINE,
	JASMINE_ADAPTER,
	'../jq/jquery-1.8.2.js',
	'../bs/bootstrap.js',
	'../ng/angular.js',
	'../ng/angular-*.js',
	'*.js',
	'tests/*Spec.js'
];


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome', 'ChromeCanary', 'Firefox', 'IE', 'PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 10000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

junitReporter = {
	outputFile: 'test_out/unit.xml',
	suite: 'unit'
};
