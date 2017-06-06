module.exports = config => {
  config.set({
    basePath: '..',
    frameworks: ['mocha', 'sinon-chai'],
    files: ['script.js', 'script.specs.js'],
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    singleRun: true
  })
}
