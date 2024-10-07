import { deleteAsync } from 'del';
import { path } from '../config/path.js';
import gulp from 'gulp';
import { plugins } from '../config/plugins.js';
import zipPlugin from 'gulp-zip';

export const zip = () => {
  deleteAsync(`${path.rootFolder}.zip`);

  return gulp
    .src(`${path.buildFolder}/**/*.*`, {})
    .pipe(zipPlugin(`${path.rootFolder}.zip`))
    .pipe(gulp.dest('./'));
};
