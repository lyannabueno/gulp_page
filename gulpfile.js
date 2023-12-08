const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sourcemaps = require('gulp-sourcemaps');
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}
exports.sass = compilaSass; // tarefa pública

function comprimeJS() {
    const uglify = require('gulp-uglify');
    const obfuscate = require('gulp-obfuscate');
    return gulp.src('./source/scripts/main.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}
exports.javascript = comprimeJS;

async function comprimeImage() { // é usado a função assíncrona para permitir a execução de operações longas
    const imagemin = (await import('gulp-imagemin')).default; // o 'await' pausa a execução da função até que uma promessa seja resolvida / carregada
    return gulp.src('./source/images/*.{jpg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}
exports.images = comprimeImage;

exports.build = gulp.series(compilaSass, comprimeJS, comprimeImage);