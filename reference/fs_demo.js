//FILE SYSTEM
//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

const fs = require('fs');
const path = require('path');

// Create folder (asynchronously)
/*
fs.mkdir(
    path.join(__dirname, '/test'),
    {},
    err => {
        if (err) throw err;
        console.log('Folder created...');
    }
);
 */

// Create & write to file.
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Hello world! This is content of the file.',
//     err => {
//         if (err) throw err;
//         console.log('File created and written to.');
//         myWriteFile(); // this was added later, after declaring myWriteFile func
//     }
// );

// Append to file. Because these are asynchr, it needs to be put in a callback of writeFile.
const myWriteFile = () => {
    fs.appendFile(
        path.join(__dirname, '/test', 'hello.txt'),
        'I <3 Node.js',
        err => {
            if (err) throw err;
            console.log('File created and written to.');
        }
    );
};

// Read file
fs.readFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'utf8', // without encoding, returns raw data. Options can be stated as object {encoding: 'utf8'}
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'newName.txt'),
    (err, data) => {
        if (err) throw err;
        console.log('File renamed.');
    }
);