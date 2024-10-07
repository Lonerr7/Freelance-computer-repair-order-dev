import gulp from 'gulp';
import webpack from 'webpack-stream';
import { path } from '../config/path.js';
import { plugins } from '../config/plugins.js';

export const js = () =>
  gulp
    .src(path.src.js, { sourcemaps: true })
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'app.min.js',
        },
      })
    )
    .pipe(gulp.dest(path.build.js))
    .pipe(plugins.browserSync.stream());
