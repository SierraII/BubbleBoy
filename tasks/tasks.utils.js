/* -------------------------------------------------------------------- */
/*
    Utils Tasks
    Copyright: Adrian David Smith 2016
*/
/* -------------------------------------------------------------------- */

var chalk = require("chalk");

module.exports = function(grunt){

    // ascii task
    grunt.registerTask("ascii", function(){

        var ascii = chalk.white.bold("\n██████╗ ██╗     ██╗   ██╗████████╗ ██████╗\n" +
                                      "██╔══██╗██║     ██║   ██║" + chalk.blue.bold("╚══██╔══╝██╔═══██╗\n") +
                                      "██████╔╝██║     ") + chalk.blue.bold("██║   ██║   ██║   ██║   ██║\n") +
                      chalk.blue.bold("██╔═══╝ ██║     ██║   ██║   ██║   ██║   ██║\n" +
                                      "██║     ███████╗╚██████╔╝   ██║   ╚██████╔╝\n" +
                                      "╚═╝     ╚══════╝ ╚═════╝    ╚═╝    ╚═════╝ \tAdrian David Smith v1");

        var message = ascii;
        grunt.log.writeln(message);

    });

};
