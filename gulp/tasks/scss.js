import gulp from 'gulp';
import { path } from '../config/path.js';
import { plugins } from '../config/plugins.js';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () =>
  gulp
    .src(path.src.scss, { sourcemaps: true })
    .pipe(plugins.replace(/@img\//g, '../images/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp',
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        cascade: true,
        overrideBrowserslist: ['last 3 versions'],
      })
    )
    // Расскоментировать, если нужен не сжатый дубль файла стилей
    .pipe(gulp.dest(path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(gulp.dest(path.build.css))
    .pipe(plugins.browserSync.stream());
