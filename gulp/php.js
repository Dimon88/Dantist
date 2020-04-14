var gulp                = require('gulp');
var cnf                 = require('../package.json').config;
var plumber             = require('gulp-plumber');
var notify              = require("gulp-notify");
var fileinclude         = require('gulp-file-include');

gulp.task('php', function () {
    gulp.src(cnf.src.php + '/*.php')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(cnf.dist.php));
  });
   
  gulp.task('php:watch', function () {
    gulp.watch('src/**/*.php', ['php']);
  });