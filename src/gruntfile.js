'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['lib/angular/angular.js', 'lib/chance/chance.js', 'lib/lodash/dist/lodash.js'],
                dest: 'scripts/bundle.js',
            },
        },
        jshint: {
            all: {
                src: ['gruntfile.js', 'scripts/*.js', 'scripts/**/*.js', '!scripts/bundle.js'],
                options: {
                    jshintrc: true
                }
            }
        },
        watch: {
            js: {
                files: ['gruntfile.js', 'scripts/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: ['index.html'],
                options: {
                    livereload: true,
                },
            },
            css: {
                files: ['css/**', '!css/bootstrap.css'],
                options: {
                    livereload: true
                }
            }
        },
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', ['jshint', 'concat']);
};