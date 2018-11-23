var $gulp = require('gulp');
var $uglify = require('gulp-uglify');
var $concat = require('gulp-concat');
var $sourcemaps = require('gulp-sourcemaps');

$gulp.task('default', function () {
    $gulp.src([
        'src/jquery.dump.js'
    ])
    .pipe($sourcemaps.init())
    .pipe($uglify({
        mangle: true,
        compress: false
    }))

    .pipe($concat('jquery.dump.min.js'))
    .pipe($sourcemaps.write('.'))
    .pipe($gulp.dest('dist'));
});
