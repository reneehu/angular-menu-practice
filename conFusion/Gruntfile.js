"use strict";

module.exports = function (grunt) {
    //Time how long taks take. cam help when optimizing build times
    require('time-grunt')(grunt);

	//Automatically load rquired Grunt tasks 
	require('jit-grunt')(grunt);

//define the configuration for all the tasks
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

// make sure code styles are up to par
jshint: { 
	options:{
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	},
	all: {
		src: [
		'Gruntfile.js',
		'app/scripts/{,*/}*.js'
		]
	}
}

});

	grunt.registerTask('build',[
		'jshint'
	]);

	grunt.registerTask('default',['build']);

};

