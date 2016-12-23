/* -------------------------------------------------------------------- */
/*
    Default Tasks
    Copyright: Adrian David Smith 2016
*/
/* -------------------------------------------------------------------- */

var chalk = require("chalk");

module.exports = function(grunt){

    // default task
    grunt.registerTask("default", function(){

        grunt.task.run("ascii");
        grunt.task.run("prompt");
        grunt.task.run("post_prompt");

    });

    // post prompt for after prompt
    grunt.registerTask("post_prompt", function(){

        var choice = grunt.config("open_prompt.config");
        choice = choice.toLowerCase();

        if(choice === "build"){

            grunt.task.run("build");

        }
        if(choice === "engine"){

            grunt.task.run("engine");

        }
        if(choice === "clean"){

            print("Clean/Removal", "Cleaning Core Files And Folders.");

            grunt.task.run("clean");

        }

    });

    function print(heading, sub_heading){

        var top_message = chalk.magenta.bold.underline(heading);
        var sub_message = chalk.magenta.bold(sub_heading);

        if(heading != ""){
            grunt.log.writeln(top_message);
        }

        grunt.log.writeln(sub_message);

    }

};
