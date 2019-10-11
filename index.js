/* DEMO'S FILES FIRINGS (kept for reference):

// // console.log("Hello from index");
//
// const Person = require('./person');
//
// const person1 = new Person('Johnny', 35);
//
// person1.greeting();

// Importing emitter class
const Logger = require('./logger');

// Instantiating emitter object
const logger = new Logger();

// Adding listener to emitter
logger.on(
    'message',
    data => {
        console.log('Called Listener', data)
    }
);

// Using method 'log' of 'logger' that emits event
logger.log('Hello world!');
logger.log('Hello you!');
logger.log('Hello me!');

returns:
// Called Listener { id: 'd94a398e-1daf-4236-91ea-40e08a424181', msg: 'Hello world!' }
// Called Listener { id: '6aab4b39-3d25-4806-b4c6-2f80a306c2eb', msg: 'Hello you!' }
// Called Listener { id: 'b72316e0-5b09-4938-ab0d-be90d2868ac2', msg: 'Hello me!' }
 */

const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer(
    (req, res) => {
        //===========================================
        // inefficient serving method. hardcoded. Big no-no. Kept for reference
        //     if (req.url === '/') {
        //         fs.readFile(
        //             path.join(__dirname, 'public', 'index.html'),
        //             (err, content) => {
        //                 if (err) throw err;
        //                 res.writeHead(
        //                     200,
        //                     {
        //                         'Content-Type': 'text/html'
        //                     }
        //                 );
        //                 res.end(content);
        //             }
        //         )
        //     }
        //
        //     if (req.url === '/about') {
        //         fs.readFile(
        //             path.join(__dirname, 'public', 'about.html'),
        //             (err, content) => {
        //                 if (err) throw err;
        //                 res.writeHead(
        //                     200,
        //                     {
        //                         'Content-Type': 'text/html'
        //                     }
        //                 );
        //                 res.end(content);
        //             }
        //         )
        //     }
        //
        //     if (req.url === '/api/users') {
        //         const users = [
        //             {name: 'Bob', age: 40},
        //             {name: 'Joe', age: 50},
        //             {name: 'Bill', age: 18},
        //             {name: 'Big Lebowsky', age: 39},
        //         ];
        //         res.writeHead(
        //             200,
        //             {
        //                 'Content-Type': 'application/json'
        //             }
        //         );
        //         res.end(JSON.stringify(users));
        //     }
        //===========================================

        // Build file path
        let filePath = path.join(
            __dirname,
            'public',
            req.url === '/' ? 'index.html' : req.url
        );

        // Extension of the file
        let extname = path.extname(filePath);

        // Initial content type (default)
        let contentType = 'text/html';

        // Check ext and set content type (list ALL expected on this server)
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
        }

        // Read file and serve it
        fs.readFile(
            filePath,
            (err, content) => {
                // -------- error handling --------
                if (err) {
                    // File not found error handling
                    if (err.code === 'ENOENT') {
                        fs.readFile(
                            path.join(
                                __dirname, 'public', '404.html'),
                            (err, content) => {
                                res.writeHead(
                                    200,
                                    { 'Content-Type': 'text/html' }
                                );
                                res.end(
                                    content,
                                    'utf8'
                                )
                            }
                        )
                    } else {
                        // Other server errors handling (not the prettiest, but ok for this)
                        res.writeHead(500);
                        res.end(`Server Error: ${ err.code }`)
                    }
                } else {
                    // -------- success handling --------
                    res.writeHead(
                        200,
                        { 'Content-Type': contentType }
                    );
                    res.end(
                        content,
                        'utf8'
                    )
                }
            }
        )
    }
);

const PORT = process.env.PORT || 5000;   // this first checks for process enviroment parameter PORT (ie. checks if port isn't already assigned), and if it doesnt find it assigns port 5000

server.listen(
    PORT,
    () => console.log(`Server running on port ${ PORT }`)
);
