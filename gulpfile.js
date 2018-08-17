var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();




gulp.task('serve',function(){
    browserSync.init({
        server:"./"
    });
    gulp.watch("*.html").on('change',browserSync.reload);
    gulp.watch("./CSS/*.css").on('change',browserSync.reload);
    gulp.watch("./JS/*.js").on('change',browserSync.reload);
});



