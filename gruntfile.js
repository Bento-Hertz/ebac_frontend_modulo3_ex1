module.exports = (grunt) => {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dist: {
                options: {
                    compress: true
                },
                files: {
                    'build/dist/styles/main.min.css':
                    'src/styles/main.less'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'build/dist/scripts/main.min.js':
                    'src/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify'])
}