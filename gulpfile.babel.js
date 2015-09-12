import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
  return gulp.src('**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint']);
