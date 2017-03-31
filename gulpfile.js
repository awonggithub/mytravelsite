/* This is the master file for gulpfile that will call other gulp files */
require('./gulp/tasks/styles');   /* when using require, you don't needed to specify .css */
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
