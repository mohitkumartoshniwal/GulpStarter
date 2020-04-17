const  gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// // Gulp 3.x watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);

// // NOTE! Gulp 4.x watch syntax (all the rest of the examples would need to be like this for Gulp 4
// gulp.watch('files-to-watch', gulp.series(['tasks', 'to', 'run']));

//gulp.watch('app/scss/**/*.scss', gulp.series(['sass'])); 
var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "src/scss/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "src/css"
    }
 
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};



 function style(){
    return gulp.src(paths.styles.src)
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream());
  }

 function watch() {
    browserSync.init({
      server: {
        baseDir: './src',
        index: "/index.html"
      },
    }),
    gulp.watch(paths.styles.src, style);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
}
  

//   gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
//     // ...
//   })

 // Don't forget to expose the task!
exports.watch = watch

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(style, watch);
 
/*
 * You can still use `gulp.task` to expose tasks
 */
//gulp.task('build', build);
 
/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
