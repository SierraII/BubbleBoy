/* -------------------------------------------------------------------- */
/*
    Build Tasks
    Copyright: Adrian David Smith 2016

    install:

    brew install chrome-cli
*/
/* -------------------------------------------------------------------- */

var chalk = require("chalk");

module.exports = function(grunt){

    // build task
    grunt.registerTask("build", function(){

        require("time-grunt")(grunt);

        print("Build", "Executing Core Tasks For Pluto.");

        // lint
        grunt.task.run("javascript_lint");
        grunt.task.run("css_lint");
        grunt.task.run("html_lint");

        // bower install
        grunt.task.run("bower");

        // copy src to build
        grunt.task.run("copy_src");
        grunt.task.run("scss_compile");

        // minification
        grunt.task.run("javascript_minify");
        grunt.task.run("css_minify");
        grunt.task.run("image_min");

        // complexity analysis
        grunt.task.run("analysis");

    });

    grunt.registerTask("engine", function(){

        print("Engine", "Executing Pluto Engine");

        grunt.task.run("watch");

    });

    // javascript linting task
    grunt.registerTask("analysis", function(){

        grunt.log.writeln(chalk.magenta.bold("Analysing JavaScript."));
        grunt.task.run("complexity");

    });

    // javascript linting task
    grunt.registerTask("image_min", function(){

        grunt.log.writeln(chalk.magenta.bold("Minifying Images."));
        grunt.task.run("newer:image");

    });

    // javascript linting task
    grunt.registerTask("javascript_lint", function(){

        grunt.log.writeln(chalk.magenta.bold("Checking JavaScript Code Style."));
        grunt.task.run("newer:jscs");

    });

    // css linting task
    grunt.registerTask("css_lint", function(){

        grunt.log.writeln(chalk.magenta.bold("Checking CSS Code Style."));
        grunt.task.run("newer:csslint");

    });

    // html linting task
    grunt.registerTask("html_lint", function(){

        grunt.log.writeln(chalk.magenta.bold("Checking HTML Code Style."));
        grunt.task.run("newer:htmllint");

    });

    // bower install task
    grunt.registerTask("bower", function(){

        grunt.log.writeln(chalk.magenta.bold("Executing Bower Process."));
        require("child_process").execSync("bower install", { stdio : [0, 1, 2, 3] });

    });

    // copy src task
    grunt.registerTask("copy_src", function(){

        grunt.log.writeln(chalk.magenta.bold("Executing Copying Process."));
        grunt.task.run("newer:copy:src");

    });

    // javascript minification task
    grunt.registerTask("javascript_minify", function(){

        grunt.log.writeln(chalk.magenta.bold("Executing JavaScript Minification And Concatination Process."));
        grunt.task.run("newer:uglify");

    });

    // css minification task
    grunt.registerTask("css_minify", function(){

        grunt.log.writeln(chalk.magenta.bold("Executing CSS Minification Process."));
        grunt.task.run("newer:cssmin");

    });

    // css minification task
    grunt.registerTask("scss_compile", function(){

        grunt.log.writeln(chalk.magenta.bold("Executing SCSS Compilation Process."));
        grunt.task.run("newer:sass");

    });

    function print(heading, sub_heading){

        var top_message = chalk.magenta.bold.underline(heading);
        var sub_message = chalk.magenta.bold(sub_heading);

        if(heading !== ""){
            grunt.log.writeln(top_message);
        }

        grunt.log.writeln(sub_message);

    }

};
