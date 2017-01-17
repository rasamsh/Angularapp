var os = require('os');
var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sources= ['./app/js/config.js', './app/js/app.js'];
var htmlSources=['./app/views/*.html','./app/index.html'];

gulp.task('concat', function() {
    // place code for your default task here
    gulp.src(['./app/js/config.js', './app/js/app.js']) // path to your files
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./app/dist/'))
        .pipe(connect.reload());
    console.log('This is gulp running!!');
});

gulp.task('watch', function() {
    gulp.watch(sources,['default']);
    gulp.watch(htmlSources,['html']);

});

gulp.task('connect',function () {

    connect.server({
        root:'./app/',
        port: 8000,
        livereload: true
    });

});

gulp.task('html',function () {
    gulp.src(htmlSources)
        .pipe(connect.reload());
});
//
// var options = {
//     uri: 'localhost:8000',
//     app: 'firefox'
// };
// gulp.task('open', function(){
//     gulp.src('./app')
//         .pipe(open(options));
// });
gulp.task('default',['html','concat','connect','watch']);