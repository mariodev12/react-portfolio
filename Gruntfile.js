/*global module, require */

module.exports = function(grunt) {

	var srcFiles = ['Gruntfile.js', 'karma.conf.js', './lib/**/*.js', './specs/**/*.js'];
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			options: {
				transform: [ require('grunt-react').browserify ]
			},
			build: {
				options: {
					standalone: "app"
				},
				src: './lib/index.js',
				dest: './dist/app.js'
			}
		},
		watch: {
			dev: {
				files: srcFiles,
				tasks: ['browserify'],
				options: { spawn: false }
			}
		}
	});
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['browserify']);
	grunt.registerTask('dev', ['watch']);

};
