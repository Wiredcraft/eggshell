module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
	 	compass: {
	    	dist: {
	      		options: {
	        		config: 'compass.config.rb',
	        		cssDir: './'
	      		}
	    	}
	  	}
	});
   
    grunt.registerTask('default', ['compass']);
}