module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            js: {
                src: ['src/js/app/*.js','src/js/lib/*.js'],
                dest: 'dist/script.js'
            },
            html: {
                src: 'src/html/*',
                dest: 'dist/index.htm'
            }
            
        },
        
        uglify: {
            build: {
                src: 'dist/script.js',
                dest: 'dist/script.js'
            }
        },
        
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/style.css': 'src/css/base.scss'
                }
            } 
        },
		
		copy: {
		  main: {
		    files: [
		      {expand: true, src: ['src/img/*'], dest: 'dist/img', filter: 'isFile'},
		    ]
		  }
		},
		
        
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['src/js/**'],
                tasks: ['concat:js', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['src/css/*'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            html: {
                files: ['src/html/*'],
                tasks: ['concat:html'],
                options: {
                    spawn: false,
                }
            }
        }
        
        

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','sass','copy','watch']);

};
