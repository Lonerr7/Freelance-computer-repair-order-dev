import gulp from 'gulp';
import { path } from '../config/path.js';
import svgSprite from 'gulp-svg-sprite';

export const svgSprite = () =>
  gulp
    .src(path.src.svgIcons, {})
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../icons/icons.svg',
            example: true, // создавать страницу с перечнем иконок
          },
        },
      })
    )
    .pipe(gulp.dest(path.build.images));
