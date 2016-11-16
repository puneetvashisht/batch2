var gulp = require('gulp');
var gulpUtil = require('gulp-util')
var jshint = require('gulp-jshint');


// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('public/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('task1', function(){
    gulpUtil.log('Task 1')
})

gulp.task('copyhtml', function(){
    gulp.src('public/*.html')
    .pipe(gulp.dest('./build'))
})

gulp.task('jschange', function(){
    gulp.watch('public/**/*.js', ['jshint'])
})






