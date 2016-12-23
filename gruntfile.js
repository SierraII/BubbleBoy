/* -------------------------------------------------------------------- */
/*
    Pluto Grunt Deployment System
    Copyright: Adrian David Smith 2016
*/
/* -------------------------------------------------------------------- */

var chalk = require("chalk");

module.exports = function(grunt){

    /* -------------------------------------------------------------------- */
    /*
        Load Tasks And NPM Modules
    */
    /* -------------------------------------------------------------------- */

    grunt.loadTasks("tasks");
    require('load-grunt-tasks')(grunt);

};
