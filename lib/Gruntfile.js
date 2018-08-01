module.exports = function (grunt) {
    grunt.initConfig({
       browserify: {
          js: {
             src: ["../js/main.js"],
             dest: "../dist/app.js"
          },
          options: {
             browserifyOptions: {
                paths: [
                   "./node_modules"
                ]
             }
          }
       },
        eslint: {
            options: {
                configFile: '.eslintrc',
                // rulePaths: ['conf/rules']
            },
            target: ['../js/*.js']
        },
       watch: {
          javascripts: {
             files: ["../js/**/*.js"],
             tasks: ["browserify"]
          },
          eslint: {
              files:["../js/**/*.js"],
              tasks:["eslint"]
          },
          browserify: {
             files: ["../js/*.js"],
             tasks: ["browserify"]
          }
       }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["browserify","eslint", "watch"]);
 };