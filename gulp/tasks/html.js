import gulp from 'gulp';
import { path } from '../config/path.js';
import fileinclude from 'gulp-file-include';
import { plugins } from '../config/plugins.js';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

export const html = () =>
  gulp
    .src(path.src.html)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'HTML',
          message: 'Error <%= error.message %>',
        })
      )
    )
    .pipe(fileinclude())
    .pipe(plugins.replace(/@img\//g, 'images/'))
    .pipe(webpHtmlNoSvg())
    .pipe(
      versionNumber({
        value: '%DT%',
        append: {
          key: '_v',
          cover: 0,
          to: ['css', 'js'],
        },
        output: {
          file: 'gulp/version.json',
        },
      })
    )
    .pipe(gulp.dest(path.build.html))
    .pipe(plugins.browserSync.stream());
