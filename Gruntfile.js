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
        files: ['FZP.js', 'test/*.js'],
        tasks: ['jshint', 'qunit'],
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
            'test/**/*.js']
    },

    /**
     * test task
     */
    qunit: {
      all: ['test/**/*.html']
    },

    /**
     * clean task
     */
    clean: ['node_modules'],

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-clean');

};
