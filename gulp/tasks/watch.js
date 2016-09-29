var gulp    = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    browser: 'google chrome',
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('./app/index.html').on('change', browserSync.reload);

  gulp.watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  gulp.watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('jsInject');
  });

});

gulp.task('cssInject', ['css'], function() {
  return gulp.src('./app/temp/css/style.css')
    .pipe(browserSync.stream());
});

gulp.task('jsInject', ['jsscripts'], function() {
  browserSync.reload();
});
