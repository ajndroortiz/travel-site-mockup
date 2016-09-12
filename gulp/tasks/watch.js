var gulp    = require('gulp'),
browserSync = require('browser-sync').create();


gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });
  gulp.watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['css'], function() {
  return gulp.src('./app/temp/css/style.css')
  .pipe(browserSync.stream());
});
