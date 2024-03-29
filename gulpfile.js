/**
 * Created by chenglian on 15/7/2.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');

var paths = {
    sass: ['./scss/*.scss', './js/*.js', './index.html']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
    gulp.src(['./scss/variables.scss','./scss/style.scss', './scss/content.scss'])
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload())
        .on('end', done);
});

gulp.task('compress', function(done) {
    gulp.src(['./www/js/config.js','./www/js/app.js'])
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./www/js/dist/'))
        .pipe(livereload())
        .on('end', done);
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.sass, ['sass', 'compress']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
