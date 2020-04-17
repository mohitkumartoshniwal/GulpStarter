const  gulp = require('gulp');
const sass = require('gulp-sass');


// // Gulp 3.x watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);

// // NOTE! Gulp 4.x watch syntax (all the rest of the examples would need to be like this for Gulp 4
// gulp.watch('files-to-watch', gulp.series(['tasks', 'to', 'run']));

//gulp.watch('app/scss/**/*.scss', gulp.series(['sass'])); 





gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('destination'))
  });

  gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    // Other watchers
  })