const  gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('destination'))
  });