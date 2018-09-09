
// require gul, gulp-sass and gulp-rename
const gulp   = require("gulp");
const sass   = require("gulp-sass");
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const pump   = require('pump');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');



// creating compile task
gulp.task("compile-sass", function() {

	//compile sass compressed version
	gulp.src("scss/*.scss")
	.pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	.pipe(sass().on("error", sass.logError))
	.pipe(rename("main.css"))
	.pipe(autoprefixer({
        browsers: ['last 4 versions'],
        cascade: true
    }))
	.pipe(gulp.dest("storage/cssbin/"));

});

gulp.task("compile-pug", function() {

	return gulp.src('views/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest(""));
});



// creating watch task
gulp.task("compile", function() {

	// watching sass files on src directory
	gulp.watch("scss/*.scss", ["compile-sass"]);
	gulp.watch("scss/**/*.scss", ["compile-sass"]);

	gulp.watch("views/*.pug", ["compile-pug"]);
	gulp.watch("views/**/*.pug", ["compile-pug"]);

});
