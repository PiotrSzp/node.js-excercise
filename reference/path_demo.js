//The path module provides utilities for working with file and directory paths.

const path = require('path');

// Base name, i.e. filename without path
console.log(path.basename(__filename));

// Dir name (in this case === __dirname)
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path obj
console.log(path.parse(__filename));
/* returns:
        {
        root: '/',
        dir: '/home/piotrek/Pulpit/Projekty/node.js-excercise/reference',
        base: 'path_demo.js',
        ext: '.js',
        name: 'path_demo'
        }
 */

// Concat paths
console.log(path.join(__dirname, 'test', 'hello.html'));
/* returns:
        /home/piotrek/Pulpit/Projekty/node.js-excercise/reference/test/hello.html
        this gets around delimiters (ie. '/'s in path); bugs in windows
 */



