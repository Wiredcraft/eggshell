module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
	 	compass: {
	    	dist: {
	      		options: {
	        		config: 'compass.config.rb',
	        		cssDir: 'build'
	      		}
	    	}
	  	},
	  	concat: {
		    js: {
		        src: 'vendor/jquery/jquery.min.js',
		        dest: 'scripts.js'
		    },
		    css: {
		        src: ['vendor/normalize-css/normalize.css', 'build/*.css'],
		        dest: 'styles.css'
		    }
		}
	});
   
    grunt.registerTask('default', ['compass', 'concat']);
}