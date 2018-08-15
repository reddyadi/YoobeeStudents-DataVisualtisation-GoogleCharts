module.exports = function(grunt){
  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/output.min.js': ['js/script.js']
        }
      }
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/style.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/style.css']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/script.js']
    },
    watch: {
      css:{
        files: ['css/style.css'],
        tasks: ['csslint', 'cssmin']
      },
      script:{
        files: ['js/script.js'],
        tasks: ['jshint','uglify']
      }
    }
  });

  // grunt.loadNpmTask();
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // grunt.registerTask();
  grunt.registerTask('min', ['cssmin']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('ugly', ['uglify']);
  grunt.registerTask('lint', ['csslint']);
  grunt.registerTask('hint', ['jshint']);
};
