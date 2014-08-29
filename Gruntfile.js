module.exports = function(grunt) {

  /**
   * Project configuration.
   */
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    /**
     * watch task
     */
    watch: {
      scripts: {
        files: ['FZP.js', 'FZP.XML.js', 'test/*.js'],
        tasks: ['test'],
        options: {
          spawn: false,
        },
      },
    },

    /**
     * hint task
     */
    jshint: {
      all: ['Gruntfile.js',
            'FZP.js',
            'FZP.XML.js',
            'test/**/*.js']
    },

    /**
     * test task
     */
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    /**
     * clean task
     */
    clean: ['node_modules'],

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['jshint', 'mochaTest']);

};
