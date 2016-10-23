import gulp from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config';

gulp.task('sass', () => {
  return gulp
    .src(config.paths.sass)
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({
      browsers: ['> 0.5%'],
      cascade: false,
    }))
    .pipe(gulp.dest(config.dest.css));
});
