import fs from 'fs';
import gulp from 'gulp';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import { path } from '../config/path.js';

export const otfToTtf = () =>
  gulp
    .src(`${path.srcFolder}/fonts/*.otf`, {})
    // Коневртируем в .ttf
    .pipe(
      fonter({
        formats: ['ttf'],
      })
      // Выгружаем в исходную папку
    )
    .pipe(gulp.dest(`${path.srcFolder}/fonts/`));

export const ttfToWoff = () =>
  gulp
    .src(`${path.srcFolder}/fonts/*.ttf`, {})
    // Конвертируем в .woff
    .pipe(
      fonter({
        formats: ['woff'],
      })
    )
    // Выгружаем в папку с результатом
    .pipe(gulp.dest(path.build.fonts))
    // Ищем файлы шрифтов .ttf
    .pipe(gulp.src(`${path.srcFolder}/fonts/*.ttf`))
    // Конвертируем в woff2
    .pipe(ttf2woff2())
    // Выгружаем в папку с результатом
    .pipe(gulp.dest(path.build.fonts));

