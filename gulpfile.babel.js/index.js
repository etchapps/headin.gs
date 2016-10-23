import gulp from 'gulp';

import './tasks/copy';
import './tasks/sass';
import './tasks/scripts';
import './tasks/serve';
import './tasks/watch';

gulp.task('default', ['serve', 'watch']);

gulp.task('build', ['copy', 'sass']);
