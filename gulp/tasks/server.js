import { path } from '../config/path.js';
import { plugins } from '../config/plugins.js';

export const sever = (done) => {
  plugins.browserSync.init({
    server: {
      baseDir: `${path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};
