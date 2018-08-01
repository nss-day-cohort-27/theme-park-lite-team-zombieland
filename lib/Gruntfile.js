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
        
        watch: {
            javascripts: {
                files: ["../src/js/**/*.js", "!node_modules/**?*.js"],
                tasks: ["eslint", "browserify"]
            },
            browserify: {
                files: ["../javascripts/*.js"],
                tasks: ["browserify"]
            }
        },
        eslint: {
            src: ["../src/js/*.js", "!node_modules/**?*.js"],
            options:{
                configFile: "./.eslintrc"
            }

        },
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["eslint", "browserify", "watch"]);
};