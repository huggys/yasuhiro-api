import gulp from 'gulp';
import eslint from 'gulp-eslint';
const spawn = require('child_process').spawn;
let node;

const GLOB_SRC_FILES = [
  './controllers/**/*.js',
  './core/**/*.js',
  './models/**/*.js',
];

gulp.task('server', () => {
  if (node) node.kill();

  node = spawn('node', ['app.js'], {stdio: 'inherit'});
  node.on('close', (code) => {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('lint', () => {
  return gulp.src(GLOB_SRC_FILES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['server'], () => {
  gulp.watch(GLOB_SRC_FILES, ['lint', 'server']);
});

process.on('exit', () => {
  if (node) node.kill();
});
