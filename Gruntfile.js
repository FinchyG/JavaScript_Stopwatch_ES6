module.exports = function(grunt) { //eslint-disable-line
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        cssmin: {
          target: {
            files: {
              'stopwatch.min.css': ['stopwatch.css']
            }
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', [ 'cssmin']);
    
};