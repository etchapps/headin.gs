import gulp from 'gulp';
import webpack from 'webpack-stream';
import config from '../config';

gulp.task('scripts', () => {
  return gulp.src(config.paths.scripts)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.dest.scripts));
});
