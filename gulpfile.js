const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compressImages() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/dist/images'));
}

function compressJs() {
    return gulp.src('./src/scripts/main.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/dist/scripts'));
}

function compileSass() {
    return gulp.src('./src/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/dist/styles'))
}

exports.default = function() {
    gulp.watch('./src/main.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./src/scripts/main.js', {ignoreInitial: false}, gulp.series(compressJs));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(compressImages));
}