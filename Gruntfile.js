/*global module:false*/
module.exports = function(grunt) {

    var getStylusPathData = function(grunt) {
            var controlsPath = grunt.file.expand('tmp/src/controls/**/src/mixins'),
                utilsPath = grunt.file.expand('tmp/src/utils/**/src/mixins'),
                variablesPath = 'test/fixtures'
                pathData = [variablesPath];

            return pathData.concat(controlsPath, utilsPath);
        };

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        gruntfile: {
            src: 'Gruntfile.js'
        },

        topcoat: {
            download: {
                options: {
                    srcPath: 'tmp/src/',
                    repos: '<%= pkg.topcoat %>'
                }
            }
        },

        unzip: {
            controls: {
                src: 'tmp/src/controls/*.zip',
                dest: 'tmp/src/controls'
            },
            utils: {
                src: 'tmp/src/utils/*.zip',
                dest: 'tmp/src/utils'
            }
        },

        clean: {
            tmp: ['tmp'],
            zip: ['tmp/src/*.zip', 'tmp/src/controls/*.zip', 'tmp/src/skins/*.zip', 'tmp/src/utils/*.zip']
        },

        stylus: {
            compile: {
                options: {
                    paths: getStylusPathData(grunt),
                    import: ['button-mixin', 'utils', 'variables'],
                    compress: false
                },
                files: {
                    'release/css/topcoat-icon-button.css': ['src/copyright.styl', 'src/topcoat-icon-button.styl', 'test/fixtures/icon.styl']
                }
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'release/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'release/css/',
                ext: '.min.css'
            }
        },

        jade: {
            compile: {
                expand: true,
                cwd: 'test/perf',
                src: ['*.jade'],
                dest: 'test/perf/',
                ext: '.html'
            }
        },
        nodeunit: {
            tests: ['test/*.test.js']
        },
        watch: {
            files: 'src/*.styl',
            tasks: ['build']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-topcoat');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['clean', 'topcoat', 'build']);
    grunt.registerTask('build', ['stylus', 'cssmin', 'jade', 'nodeunit']);

};
