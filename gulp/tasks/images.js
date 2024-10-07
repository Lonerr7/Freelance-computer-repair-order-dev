import gulp from 'gulp';
import { path } from '../config/path.js';
import { plugins } from '../config/plugins.js';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () =>
  gulp
    .src(path.src.images)
    .pipe(plugins.newer(path.build.images))
    .pipe(webp())
    .pipe(gulp.dest(path.build.images))
    .pipe(gulp.src(path.src.images))
    .pipe(plugins.newer(path.build.images))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interplaced: true,
        optimizationlevel: 3, // 0 - 7
      })
    )
    .pipe(gulp.dest(path.build.images))
    .pipe(gulp.src(path.src.svg))
    .pipe(gulp.dest(path.build.images))
    .pipe(plugins.browserSync.stream());
