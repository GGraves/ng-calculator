module.exports = function(grunt) {
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    //lint.js 
    jshint: {
      all: ['src/**/*.js'] 
    },

    //minify.js
    uglify: {
      build: {
        files: {
          'bin/js/app.min.js': ['src/**/*.js', '!src/**/*.spec.js']
        }
      }
    },

    //compile.scss  
    sass: {
      build: {
        options: {                      
          style: 'expanded'
        },
        files: {                        
          'src/assets/css/style.scss': 'bin/css/style.css'
        }
      }
    },

    //minify.css
    cssmin: {
      build: {
        files: {
          'bin/css/style.min.css': 'bin/css/style.css'
        }
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: 'index.html',
        dest: 'bin/',
        flatten: true,
        filter: 'isFile',
      }
    }

  });

  //load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //default tasks to run 
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin', 'copy']);  

};
