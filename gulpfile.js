// Load Node Modules/Plugins
import gulp from 'gulp';
import pug from 'gulp-pug';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import jshint from 'gulp-jshint';
import sassLoader from 'sass';
import gulpSass from 'gulp-sass';
import gulpBabel from 'gulp-babel';
// const imagemin = require('gulp-imagemin');
const sass = gulpSass(sassLoader);

const { src, dest, lastRun, series, parallel, watch } = gulp;

function html() {
  return src(['src/pug/*.pug'], { since: lastRun(html) })
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest('dist/'));
}

function css() {
  return src(['src/scss/*.scss'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dist/frontend/css'));
}

function scripts() {
  return src(['src/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(
      gulpBabel({
        presets: ['@babel/env'],
        plugins: ['@babel/transform-runtime'],
      })
    )
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('dist/frontend/js'));
}

function images() {
  return gulp.src(['src/images/**']).pipe(dest('dist/frontend/images'));
}

function watchFiles() {
  watch('src/pug/**/*.pug', series(html));
  watch('src/scss/**/*.scss', series(css));
  watch('src/js/**', series(scripts));
  watch('src/images/**', series(images));
}

const _default = series(css, parallel(scripts, images), watchFiles);
export { _default as default };
