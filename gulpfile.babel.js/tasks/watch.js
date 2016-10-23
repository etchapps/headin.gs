import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['copy', 'sass', 'scripts'], () => {
  gulp.watch([config.paths.html], ['copy']);
  gulp.watch([config.paths.sass], ['sass']);
  gulp.watch([config.paths.scripts], ['scripts']);
});
