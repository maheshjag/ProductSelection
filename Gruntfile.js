"use strict";

//JSHint options
var jsHintOptions = {
	files: ['./**/gruntfile.js', './**/*.js'],
	options: {
		ignores : [
			'./**/node_modules/**/*',
			'./**/npm-cache/**/*',
			'./public/assets/js/require.js'
		],
		jshintrc : './.jshintrc'
	}
};

var jasmineNodeOptions = {
	specNameMatcher: ".spec",
	projectRoot: 'src',
	specFolders: ["spec/pages", "spec/services"]
};

module.exports = function(grunt) {
	var config = {
		watch: {
			files: ['src/**/*.js', 'spec/pages/*.spec.js', 'spec/services/*.spec.js'],
			tasks: ['tests']
		},
		jasmine_node: jasmineNodeOptions,
		jshint: jsHintOptions
	};
	grunt.initConfig(config);

	grunt.registerTask('tests', [], function() {
		grunt.loadNpmTasks('grunt-jasmine-node');
		grunt.task.run('jasmine_node');
	});

	grunt.registerTask('w', [], function() {
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.task.run('watch');
	});

	grunt.registerTask('j', [], function() {
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.task.run('jshint');
	});

	grunt.registerTask('default', ['j']);
};