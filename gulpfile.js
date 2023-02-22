"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");



const dist = "./dist";

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});


gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
                .pipe(gulp.dest(dist + "/assets"))
                .on("end", browsersync.reload);
});

gulp.task("copy-bootstrap-css", () => {
    return gulp.src("./node_modules/bootstrap/dist/css/bootstrap.min.css")
                .pipe(gulp.dest(dist + "/assets/css"))
                .pipe(browsersync.stream());
});

// gulp.task("copy-bootstrap-js", () => {
//     return gulp.src("./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js")
//                 .pipe(gulp.dest(dist))
//                 .pipe(browsersync.stream());
// });


gulp.task("watch", () => {
    browsersync.init({
		server: "./dist",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/script.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js", "copy-bootstrap-css"));

gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));

// const   gulp = require("gulp"),
//         webpack = require("webpack-stream"),
//         browsersync = require("browser-sync");
//         // del = require("del");
//         // gulpWatch = require("gulp-watch");


// const dist = "./dist/";

// function copyHtml(){
//     return gulp.src("./src/index.html")
//     .pipe(gulp.dest(dist))
//     .pipe(browsersync.stream());
// } 

// // function clear(){
// //     return del(dist);
// // }

// function buildJs(){
//     return gulp.src("./src/assets/js/script.js")
//                 .pipe(webpack({
//                     mode: 'development',
//                     output: {
//                         filename: 'script.js'
//                     },
//                     watch: false,
//                     devtool: "source-map",
//                     module: {
//                         rules: [
//                           {
//                             test: /\.m?js$/,
//                             exclude: /(node_modules|bower_components)/,
//                             use: {
//                               loader: 'babel-loader',
//                               options: {
//                                 presets: [['@babel/preset-env', {
//                                     debug: true,
//                                     corejs: 3,
//                                     useBuiltIns: "usage"
//                                 }]]
//                               }
//                             }
//                           }
//                         ]
//                       }
//                 }))
//                 .pipe(gulp.dest(dist))
//                 .on("end", browsersync.reload);
// }

// function copyAssets(){
//     return gulp.src("./src/assets/**/*.*")
//                 .pipe(gulp.dest(dist + "/assets"))
//                 .on("end", browsersync.reload);
// }

// function watch(){
//     browsersync.init({
// 		server: "./dist/",
// 		port: 4000,
// 		notify: true
//     });
    
//     gulp.watch("./src/index.html", gulp.parallel(copyHtml));
//     gulp.watch("./src/assets/**/*.*", gulp.parallel(copyAssets));
//     gulp.watch("./src/js/**/*.js", gulp.parallel(buildJs));
// }

// function build(){
//     gulp.parallel(copyHtml, copyAssets, buildJs);
// }

// function buildProdJs(){
//     return gulp.src("./src/assets/js/script.js")
//                 .pipe(webpack({
//                     mode: 'production',
//                     output: {
//                         filename: 'script.js'
//                     },
//                     module: {
//                         rules: [
//                           {
//                             test: /\.m?js$/,
//                             exclude: /(node_modules|bower_components)/,
//                             use: {
//                               loader: 'babel-loader',
//                               options: {
//                                 presets: [['@babel/preset-env', {
//                                     corejs: 3,
//                                     useBuiltIns: "usage"
//                                 }]]
//                               }
//                             }
//                           }
//                         ]
//                       }
//                 }))
//                 .pipe(gulp.dest(dist));
// }

// exports.buildProdJs = buildProdJs;
// exports.default = gulp.parallel(watch, build);


