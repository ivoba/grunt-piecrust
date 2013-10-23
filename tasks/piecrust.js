/*
 * grunt-piecrust
 * 
 *
 * Copyright (c) 2013 ivo bathke
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var exec = require('child_process').exec;

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('piecrust', 'Run PieCrust static publisher tasks', function() {

        var done = this.async(),
            command = 'chef',
            options = this.options();

        // Build command
        // chef bake -o /path/to/output  --root /path/to/root
        command = options.path2chef + command;
        if (options.root) {
            command += ' --root ' + options.root;
        }
        command += ' ' + options.command
        if (options.output) {
            command += ' -o ' + options.output;
        }

        // Execute command
        exec(command, function(err, stdout) {

            grunt.log.write('\n\nPieCrust output:\n');
            grunt.log.write(stdout);

            if (err) {
                grunt.fail.warn(err);
                done(false);
            } else {
                done(true);
            }
        });
        // Print a success message.
        grunt.log.writeln('"' + command + '" called');
    });

};
