
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
  return gulp.src('./dist/mainio-surveytool/*.js')
    .pipe(concat('mainio-survey.js'))
    .pipe(gulp.dest('./dist/gulp'));
});

gulp.task('rename', function() {
  return gulp.src('./dist/mainio-surveytool/*.css')
    .pipe(rename('mainio-survey.css'))
    .pipe(gulp.dest('./dist/gulp'));
});

gulp.task('default', ['concat', 'rename']);