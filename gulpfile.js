const gulp = require('gulp'), //traer dependecias de gulp, es como @import de sass
  sass = require('gulp-sass'), //traer plugin de sass
  autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () =>
  gulp.src('./scss/styles.scss')
    .pipe(sass({
      outputStyle: 'expanded', // tipo de salida de compilacion nested(por defecto), compact (hay espacios, pero en una sola linea, se respetan los comentarios), compressed(sin comentarios, una linea, sin espacios), expanded
      sourceComments: true //boolean indica que linea del sass genero el css
    }))//se utiliza para pasar un plugin
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./css'))
  );

gulp.task('default', () => {
gulp.watch('./scss/styles.scss', gulp.series('sass')); //Apartir de gulp 4.x para invocar una tarea se necesita usar el metodo gulp.series()
});
