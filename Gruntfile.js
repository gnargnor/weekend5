module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['client/scripts/*.js'],
        dest: 'server/public/scripts/client.min.js'
      }
    },
    copy: {
      html: {
        expand: true,
        cwd: 'client/views/',
        src: '*.*',
        dest: 'server/public/views'
      },
      css: {
        expand: true,
        cwd: 'client/css/',
        src: 'style.css',
        dest: 'server/public/css/',
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: 'angular.*',
        dest: 'server/public/vendors/'
      },
      angularRoute: {
        expand: true,
        cwd: 'node_modules/angular-route/',
        src: 'angular-route.*',
        dest: 'server/public/vendors/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/*.css', 'fonts/*.*'],
        dest: 'server/public/vendors/'
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      files: ['client/**/*.*'],
      tasks: ['uglify', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['uglify', 'copy', 'watch']);

};
