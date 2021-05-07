const { src, dest, watch, parallel, series } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const scss = require("gulp-sass");
const bs = require("browser-sync").create();
const del = require("del");

function styles() {
    return src(["app/scss/index.scss"], { allowEmpty: true })
        .pipe(scss({ outputStyle: "compressed" }))
        .pipe(concat("index.min.css"))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 10 version"],
                grid: true,
            }),
        )
        .pipe(dest("app/css"))
        .pipe(bs.stream());
}

function script() {
    return src([
        "node_modules/jquery/dist/jquery.js",
        "app/js/**/*.js",
        "app/js/index.js"
    ], {allowEmpty: true})
        .pipe(concat("index.min.js"))
        .pipe(uglify())
        .pipe(dest("app/js"))
        .pipe(bs.stream());
}

function images() {
    return src(["app/img/**/*"], { allowEmpty: true })
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
                }),
            ]),
        )
        .pipe(dest("dist/img"));
}

function tracking() {
    watch(["app/scss/**/*.scss"], styles);
    watch(["app/js/**/*.js", "!app/js/index.min.js"], script);
    watch("app/*.html").on("change", bs.reload);
}

function sync() {
    bs.init({
        notify: false,
        server: {
            baseDir: "app/",
        },
    });
}

function cleanDist() {
    return del("dist");
}

function build() {
    return src(["app/css/index.min.css", "app/js/index.min.js", "app/*.html", "app/fonts/**/*"], {
        base: "app",
        allowEmpty: true,
    }).pipe(dest("dist"));
}

exports.styles = styles;
exports.tracking = tracking;
exports.sync = sync;
exports.script = script;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, sync, tracking, script); 