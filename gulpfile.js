const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function runSass() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css/"))
    .pipe(browserSync.stream());
}

function reloadBrowser(done) {
  browserSync.reload();
  done();
}

function runWatch() {
  startBrowserSync();
  gulp.watch("src/scss/**/*.scss", runSass);
  gulp.watch("src/**/*.html", reloadBrowser);
  gulp.watch("src/js/**/*.js", reloadBrowser);
}

function startBrowserSync() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
}

gulp.task("sass", runSass);
gulp.task("watch", runWatch);
