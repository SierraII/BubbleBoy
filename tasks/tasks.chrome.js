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

        var tabs = require("child_process").execSync("chrome-cli list tabs", {});
        var bufferedTabs = new Buffer(tabs).toString("ascii");

        // tab is open
        // reload the extensions tab
        if(bufferedTabs.indexOf("Extensions") > -1){

            var tab = bufferedTabs.split("\n");

            for(var i = 0; i < tab.length; i++){

                var s = tab[i].split(" ");

                if(s[1] === "Extensions"){

                    var id = s[0].replace("[", "").replace("]", "");

                    output = require("child_process").execSync("chrome-cli reload -t " + id, {});

                }
            }
        }
        else{

            var output = require("child_process").execSync("chrome-cli open chrome://extensions/", {});
            var bufferedOutput = new Buffer(output).toString("ascii");

            // HACK NOTE
            // split on spaces
            // then on the second element, split on \n
            // the first element will be the ID
            // REMOVE THIS TERRIBLE CODE
            // currently only works with an extentions tab open
            // we can avoid opening new ones the whole time by getting the currently opened one
            var id = bufferedOutput.split(" ");
            id = id[1].split("\n")[0];

            // close the extensions tab
            output = require("child_process").execSync("chrome-cli reload -t " + id, {});
        }

    });

};
