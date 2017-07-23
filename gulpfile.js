// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlReplace = require('gulp-html-replace');

// Concat and Uglify jQuery and Bootstrap
gulp.task("libs", function() {
  return gulp.src([
      'jquery/dist/jquery.min.js',
      'bootstrap/dist/js/bootstrap.min.js'
  ], {cwd: "node_modules/**"})
  .pipe(concat('vendors.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest("dist/lib"));
});

// Move Html files to /dist and modify index.html
gulp.task('html', function() {
  return gulp.src('app/**/*.html', {base: 'app'}) // base allow to keep the folder structure from the root app/
    .pipe(gulp.dest('dist/app'));
  return gulp.src('index.html')
    .pipe(htmlReplace({
      'css': 'styles.min.css',
      'core': 'https://unpkg.com/core-js/client/shim.min.js',
      'zone': {
        src: ['https://unpkg.com/zone.js@0.8.4?main=browser'],
        tpl: '<script src="%s"></script>'
      },
      'system': 'https://unpkg.com/systemjs@0.19.39/dist/system.src.js',
      'vendors': 'lib/vendors.min.js',
    }))
    .pipe(gulp.dest('dist'));
});

// Compile and concat Sass into a temporary folder for debugging
gulp.task('debug-sass', function() {
  return gulp.src('app/**/*.scss')
  .pipe(concat('styles.scss'))
  .pipe(sass())
  .pipe(gulp.dest('.tmp'));
});

// Compile into CSS and Minify
gulp.task('sass', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'app/**/*.scss'
  ])
  .pipe(concat('styles.scss'))
  .pipe(sass())
  .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
  }))
  .pipe(rename('styles.min.css'))
  .pipe(gulp.dest('dist'));
});

// Move assets to dist
gulp.task("assets", function() {
  return gulp.src('assets/**/*')
  .pipe(gulp.dest("dist/assets"));
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src('dist/app/**/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('dist/app/**/**/*.js', ['lint']);
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('assets/**/*', ['assets']);
});

// Default Task
gulp.task('default', ['sass', 'assets', 'lint']);
