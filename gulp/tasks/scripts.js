var gulp = require('gulp');

gulp.task('jsscripts', function() {
  return gulp.src('./app/assets/scripts/app.js')
    .pipe(gulp.dest('./app/temp/js/'));
});
