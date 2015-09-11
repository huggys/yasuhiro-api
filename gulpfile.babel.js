import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
//  gulp.src(['./core/**/*.js', './controllers/**/*.js', './models/**/*.js'])
  gulp.src('./**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('default', ['lint'], () => {
});
