var gulp           = require('gulp'),
  postcss          = require('gulp-postcss'),
  cssimport        = require('postcss-import'),
  cssnext          = require('postcss-cssnext'),
  cssvars          = require('postcss-simple-vars'),
  mixins           = require ('postcss-mixins'),
  pxtorem          = require('postcss-pxtorem');

gulp.task('css', function() {
  var plugins = [
    cssimport,
    mixins,
    cssnext({
      browsers: ['last 2 versions']
    }),
    cssvars,
    pxtorem({
      propWhiteList: [],
      mediaQuery: true
    })
  ];
  return gulp.src('./app/assets/styles/style.css')
  .pipe(postcss(plugins))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/css/'));
});
