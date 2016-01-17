"use strict";

//JSHint options
var jsHint = {
	files: ["./**/gruntfile.js", "./**/*.js"],
	options: {
		ignores : [
			"./**/node_modules/**/*",
			"./**/npm-cache/**/*",
			"**/tmp/**/"
		],
		jshintrc : "unknown"
	}
};

module.exports = function(grunt) {
	var config = {
		jasmine_node: {
			projectRoot : "spec",
			options: {
				specs: 'spec/**/*.spec.js'
			}
		},
		watch: {
			files: ['src/**/*.js', 'spec/**/*.spec.js'],
			tasks: ['j']
		},
		jshint: jsHint
	};
	grunt.initConfig(config);

	grunt.registerTask("j", [], function() {
		grunt.loadNpmTasks("grunt-jasmine-node");
		grunt.task.run("jasmine_node");
	});

	grunt.registerTask("w", [], function() {
		grunt.loadNpmTasks("grunt-contrib-watch");
		grunt.task.run("watch");
	});

	grunt.registerTask('default', ['j'])
};