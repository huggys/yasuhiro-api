import gulp from 'gulp';
import eslint from 'gulp-eslint';

const GLOB_SRC_FILES = [
  './controllers/**/*.js',
  './core/**/*.js',
  './models/**/*.js',
];

gulp.task('lint', () => {
  return gulp.src(GLOB_SRC_FILES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint']);
