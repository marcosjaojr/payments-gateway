const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const OUTPUT_DIR = 'dist';

// pull in the project typescript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assert', () => gulp.src(JSON_FILES).pipe(gulp.dest(OUTPUT_DIR)));

gulp.task('default', ['watch', 'assert']);
