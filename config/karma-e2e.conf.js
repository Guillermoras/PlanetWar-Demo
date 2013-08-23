module.exports = function(config){
	config.set({
basePath: '../',

files: [
  'test/e2e/**/*.js'
],

autoWatch: false,

browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

singleRun: true,

proxies: {
  '/': 'http://localhost:8000/'
},

junitReporter: {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
},
});
}