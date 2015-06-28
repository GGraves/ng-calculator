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
          style: 'expanded',
          sourcemap: 'none',
          noCache: true

        },
        files: {                        
          'bin/css/app.css': 'src/assets/css/app.scss'
        }
      }
    },

    //minify.css
    cssmin: {
      build: {
        files: {
          'bin/css/app.min.css': 'bin/css/app.css'
        }
      }
    },

    copy: {
      main: {
        files: [ 
          {expand: true, cwd: 'src/', src: 'index.html', dest: 'bin/', filter: 'isFile' },
        ]
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
