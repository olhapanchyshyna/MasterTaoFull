"use strict";

// const gulp = require("gulp");
// const webpack = require("webpack-stream");
// const browsersync = require("browser-sync");

// const dist = "./dist/";

// // function defaultTask(cb) {
// //     // place code for your default task here
// //     cb();
// //   }
  
  
// //   exports.default = defaultTask;


// function copyHtml(){
//     return gulp.src("./src/index.html")
//     .pipe(gulp.dest(dist))
//     .pipe(browsersync.stream());
// } 

// function buildJs(){
//     return gulp.src("./src/js/main.js")
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
    
//     gulp.watch("./src/index.html", gulp.parallel("copyHtml"));
//     gulp.watch("./src/assets/**/*.*", gulp.parallel("copyAssets"));
//     gulp.watch("./src/js/**/*.js", gulp.parallel("buildJs"));
// }

// function build(){
//     gulp.parallel("copyHtml", "copyAssets", "buildJs");
// }

// function buildProdJs(){
//     return gulp.src("./src/js/main.js")
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

// function defaultTask() {
//     gulp.parallel("watch", "build");
// }

