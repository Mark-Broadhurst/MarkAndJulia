basePath = '../';

files = [
	JASMINE,
	JASMINE_ADAPTER,
	'../jq/jquery-1.8.2.js',
	'../bs/bootstrap.js',
	'../ng/angular.js',
	'../ng/angular-*.js',
	'*.js',
	'tests-e2e/scenarios.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = true;

proxies = {
	'/': 'http://localhost:8000/'
};

junitReporter = {
	outputFile: 'test_out/e2e.xml',
	suite: 'e2e'
};
