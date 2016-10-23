import gulp from 'gulp';
import config from '../config';

gulp.task('copy', () => {
  return gulp.src(config.paths.html)
    .pipe(gulp.dest(config.dest.html));
});
