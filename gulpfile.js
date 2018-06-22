const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const livereload = require('gulp-livereload');
const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const copy = require('gulp-copy');
const pump = require('pump');
const minify = require('gulp-babel-minify');

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss').pipe(sass()).pipe(gulp.dest('./dist'));
});

gulp.task('eslint', function(){
  return gulp.src('./scripts/index.js')
    .pipe(eslint())
    .pipe(eslint.failAfterError())
    .pipe(gulp.dest('./dist'));
});

gulp.task('live', function(){
  livereload.listen();

  gulp.watch('./scripts/index.js', ['eslint']);
});

gulp.task('concat', function(){
  return gulp.src('./sass/*.js').pipe(concat('all.js')).pipe(gulp.dest('./scripts'));
});

gulp.task('uglify', function (cb) {
  pump([
      gulp.src('./libs/*.js'),
      uglify(),
      gulp.dest('./dist')
    ],
    cb
  );
});

gulp.task('copy', function(){
  return gulp.src('./libs/appFile.js').pipe(gulp.dest('./dist'));
});

gulp.task('del', function(){
  return del([
   './appTwoFile'
  ]);
});

gulp.task('delProd', function(){
  return del([
     './prod'
    ]);
});

gulp.task('copyhtmlProd', function(){
  return gulp.src('./index.html').pipe(gulp.dest('./prod'));
});

gulp.task('copycssProd', function(){
  return gulp.src('./dist/*.css').pipe(concat('style.css')).pipe(gulp.dest('./prod/css'));
});

gulp.task('minifyProd', function(){
  gulp.src("./scripts/*.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("./dist/minify"));
});

gulp.task('concatProd', function(){
  gulp.src('./dist/minify/*.js').pipe(concat('app.js')).pipe(gulp.dest('./prod/js'));
});

gulp.task('default', ['sass', 'eslint', 'live', 'concat', 'uglify', 'copy']);
