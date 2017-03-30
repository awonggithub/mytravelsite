var gulp= require('gulp'),
watch=require('gulp-watch'),
browserSync=require('browser-sync').create();    /*usng only browser-sync method create- this is to create a web server */


gulp.task('watch', function(){

   browserSync.init({
      server:{
        baseDir:"app"
      }

   });

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');

    });
});

/*[styles] is to tell gulp to update styles before running cssInject.*/

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
