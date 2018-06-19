var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').csss;

var srcs = [];
srcs.push('src/make/css/css.css');

var dark = [];
dark.push('src/make/css/dark.css');

var light = [];
light.push('src/make/css/light.css');

gulp.task('web-css',function(){
	gulp.src(light)      
       .pipe(concat('light.css'))  
       .pipe(minifycss())     
       .pipe(gulp.dest(config.dest));
	gulp.src(dark)      
       .pipe(concat('dark.css'))  
       .pipe(minifycss())     
       .pipe(gulp.dest(config.dest));
   	return gulp.src(srcs)      
       .pipe(concat('all.css'))  
       .pipe(minifycss())     
       .pipe(gulp.dest(config.dest))
});