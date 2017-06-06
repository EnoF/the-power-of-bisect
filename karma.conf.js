module.exports = config => {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    files: ['script.js', 'script.specs.js'],
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    plugins: ['karma-phantomjs-launcher', 'karma-mocha', 'karma-sinon-chai'],
    singleRun: true
  })
}
