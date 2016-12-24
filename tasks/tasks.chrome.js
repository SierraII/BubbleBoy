/* -------------------------------------------------------------------- */
/*
    Chrome Tasks
    Copyright: Adrian David Smith 2016
*/
/* -------------------------------------------------------------------- */

var chalk = require("chalk");

module.exports = function(grunt){

    // reload extentions task
    grunt.registerTask("reload_extensions", function(){

        // open the extensions tab
        var output = require("child_process").execSync("chrome-cli open chrome://extensions/", {});
        var bufferedOutput = new Buffer(output).toString("ascii");

        // split on spaces
        // then on the second element, split on \n
        // the first element will be the ID
        // HACK NOTE
        // REMOVE THIS TERRIBLE CODE
        // currently only works with an extentions tab open
        // we can avoid opening new ones the whole time by getting the currently opened one
        var id = bufferedOutput.split(" ");
        id = id[1].split("\n")[0];

        // close the extensions tab
        output = require("child_process").execSync("chrome-cli reload -t " + id, {});
        output = require("child_process").execSync("chrome-cli close -t " + id, {});

    });

};
