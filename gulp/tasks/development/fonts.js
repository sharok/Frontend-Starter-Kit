var gulp   = require('gulp');
var config = require('../../config').fonts;

gulp.task('fonts', function(){
    gulp.src(config.srcFonts)
        .pipe(gulp.dest(config.destFonts));

    gulp.src(config.srcCss)
        .pipe(gulp.dest(config.destCss));
});